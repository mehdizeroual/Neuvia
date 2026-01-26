"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface ImmersiveVideoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  experienceTitle: string;
}

export default function ImmersiveVideoPlayer({
  isOpen,
  onClose,
  videoUrl,
  experienceTitle,
}: ImmersiveVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showExitHint, setShowExitHint] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Gérer le montage côté client pour le portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Fonction pour entrer en plein écran
  const enterFullscreen = useCallback(async () => {
    const element = containerRef.current;
    if (!element) return;

    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if ((element as HTMLDivElement & { webkitRequestFullscreen?: () => Promise<void> }).webkitRequestFullscreen) {
        await (element as HTMLDivElement & { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen();
      }
    } catch (err) {
      console.log("Fullscreen non disponible, utilisation du mode plein écran CSS");
    }
  }, []);

  // Fonction pour quitter le plein écran
  const exitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => { });
    }
  }, []);

  // Gérer la fermeture
  const handleClose = useCallback(() => {
    exitFullscreen();
    onClose();
    setIsLoading(true);
    setShowExitHint(false);
  }, [exitFullscreen, onClose]);

  // Écouter les événements clavier et fullscreen
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };

    const handleFullscreenChange = () => {
      // Si l'utilisateur quitte le fullscreen via le navigateur, fermer le player
      if (!document.fullscreenElement && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // Entrer en fullscreen à l'ouverture
    enterFullscreen();

    // Bloquer le scroll du body
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, enterFullscreen]);

  // Gérer le chargement de la vidéo
  const handleVideoCanPlay = () => {
    setIsLoading(false);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay bloqué, l'utilisateur devra cliquer
        setIsLoading(false);
      });
    }
  };

  // Gérer la fin de la vidéo
  const handleVideoEnd = () => {
    handleClose();
  };

  // Gérer le clic pour afficher l'indication de sortie
  const handleContainerClick = () => {
    setShowExitHint(true);
    setTimeout(() => setShowExitHint(false), 2000);
  };

  // Ne rien rendre côté serveur ou si fermé
  if (!mounted || !isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-black cursor-none"
          onClick={handleContainerClick}
        >
          {/* Écran de chargement */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center z-10"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-5xl sm:text-6xl font-bold text-gradient mb-8"
                >
                  Neuvia
                </motion.div>
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-neutral-400 text-lg"
                >
                  Chargement de l'expérience...
                </motion.p>
                <p className="text-neutral-600 text-sm mt-4 max-w-md text-center px-4">
                  {experienceTitle}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Vidéo */}
          <video
            ref={videoRef}
            src={videoUrl}
            className="immersive-video w-full h-full object-cover"
            playsInline
            muted
            onCanPlay={handleVideoCanPlay}
            onEnded={handleVideoEnd}
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
          />

          {/* Indication de sortie */}
          <AnimatePresence>
            {showExitHint && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-3xl border border-white/30 px-6 py-3 rounded-full shadow-xl"
              >
                <p className="text-white text-sm">
                  Appuyez sur <span className="font-bold">ESC</span> pour quitter
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bouton de fermeture discret en haut à droite */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-3xl border border-white/30 flex items-center justify-center cursor-pointer z-20 shadow-xl"
            aria-label="Fermer"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

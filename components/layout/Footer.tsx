import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { label: "Mentions légales", href: "/legal/mentions" },
    { label: "Politique de confidentialité", href: "/legal/privacy" },
    { label: "Conditions générales", href: "/legal/terms" },
    { label: "Politique cookies", href: "/legal/cookies" },
  ];

  const companyLinks = [
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Comment ça marche", href: "/how-it-works" },
    { label: "Vision pédagogique", href: "/vision" },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Neuvia</h3>
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              La plateforme IA de construction de mondes vidéo éducatifs,
              co-construite avec l'Éducation nationale.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Neuvia</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Légal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 dark:text-neutral-500">
            © {currentYear} Neuvia. Tous droits réservés. En partenariat avec
            l'Éducation nationale.
          </p>
        </div>
      </div>
    </footer>
  );
}

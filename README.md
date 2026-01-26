# Neuvia - Plateforme IA Éducative

Site web de démonstration pour **Neuvia**, une plateforme IA de construction de mondes vidéo éducatifs, co-construite avec l'Éducation nationale.

## 🚀 Démarrage rapide

Le serveur de développement est déjà lancé et accessible sur :
**http://localhost:3000**

### Commandes disponibles

```bash
# Lancer le serveur de développement
npm run dev

# Créer une version de production
npm run build

# Lancer la version de production
npm start

# Lancer le linter
npm run lint
```

## 📁 Structure du projet

```
/app                    # Pages Next.js (App Router)
  page.tsx             # Landing page
  /login               # Page de connexion
  /library             # Dashboard principal (protégé)
  /about               # À propos
  /contact             # Contact
  /how-it-works        # Comment ça marche
  /vision              # Vision pédagogique
  /legal               # Pages légales (mentions, privacy, terms, cookies)

/components
  /landing             # Composants de la landing page
  /ui                  # Composants UI de base
  /library             # Composants du dashboard
  /layout              # Header, Footer, Navigation
  /auth                # Composants d'authentification

/lib
  mock-data.ts         # Données mockées des expériences
  auth-context.tsx     # Context d'authentification
  types.ts             # Types TypeScript

/public
  /images              # Assets visuels (ajoutez votre logo ici)
```

## 🎨 Design System

### Palette de couleurs
- **Primaire** : Bleu turquoise (#06B6D4, #22D3EE)
- **Secondaire** : Violet (#8B5CF6, #A78BFA)
- **Neutre** : Blanc, Gris, Noir

### Effets visuels
- Glassmorphism sur les cartes
- Dégradés bleu → violet
- Animations subtiles (hover, fade-in, slide-up)
- Ombres douces avec effet glow

## 🔐 Authentification

L'authentification est **mockée** pour la démonstration :
- Accepte n'importe quelle combinaison email/mot de passe
- Stockage en localStorage
- Redirection automatique vers /library après connexion

## 📚 Fonctionnalités

### Landing Page
- Hero section avec CTA
- Section "Révolution de l'éducation par l'IA"
- Section "Partenariat Éducation nationale"
- Aperçu des expériences vérifiées

### Dashboard Library
- **Onglet 1** : Expériences vérifiées (8 expériences)
- **Onglet 2** : Expériences communautaires (8 expériences)
- Filtres par matière (Histoire, Sciences, Mathématiques)
- Filtres par niveau (3ème, Seconde, Première, Terminale)

### Pages statiques
- Mentions légales
- Politique de confidentialité
- Conditions générales d'utilisation
- Politique cookies
- À propos
- Contact
- Comment ça marche
- Vision pédagogique

## 🖼️ Ajout du logo

Pour ajouter votre logo :

1. Placez votre fichier logo dans `/public/images/`
2. Éditez `/components/layout/Header.tsx` et `/components/layout/Footer.tsx`
3. Remplacez le texte "Neuvia" par une balise `<Image>` :

```tsx
import Image from "next/image";

// Dans le composant
<Image
  src="/images/votre-logo.png"
  alt="Neuvia"
  width={120}
  height={40}
/>
```

## 🛠️ Technologies utilisées

- **Framework** : Next.js 14+ (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **État** : React Context API

## 📝 Données mockées

Toutes les données des expériences sont mockées dans `/lib/mock-data.ts`.

- 8 expériences vérifiées
- 8 expériences communautaires
- Couvrent 3 matières (Histoire, Sciences, Mathématiques)
- 4 niveaux (3ème, Seconde, Première, Terminale)

## 🎯 Navigation

- **/** : Landing page
- **/login** : Page de connexion
- **/library** : Dashboard (nécessite connexion)
- **/about** : À propos de Neuvia
- **/contact** : Formulaire de contact
- **/how-it-works** : Comment ça marche
- **/vision** : Vision pédagogique
- **/legal/mentions** : Mentions légales
- **/legal/privacy** : Politique de confidentialité
- **/legal/terms** : CGU
- **/legal/cookies** : Politique cookies

## ⚠️ Important

Ceci est un **site de démonstration**. Toutes les fonctionnalités sont simulées :
- Authentification mock (pas de backend réel)
- Données d'expériences fictives
- Formulaire de contact non fonctionnel
- Actions "Lancer l'expérience" sans effet

## 📱 Responsive

Le site est entièrement responsive et optimisé pour :
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablette (768px - 1024px)
- Mobile (320px - 768px)

## 🚀 Déploiement

Pour déployer en production :

```bash
npm run build
npm start
```

Ou utilisez des plateformes comme Vercel (recommandé pour Next.js), Netlify, ou tout hébergeur supportant Node.js.

## 📄 Licence

Ce projet est un site de démonstration pour Neuvia.

---

**Développé avec ❤️ pour l'éducation du futur**

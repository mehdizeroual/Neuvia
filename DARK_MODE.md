# 🌙 Dark Mode - Documentation

## Vue d'ensemble

Le dark mode est maintenant complètement implémenté sur tout le site Neuvia avec un excellent contraste et une lisibilité optimale.

## ✅ Corrections appliquées

### 1. Textes et typographie
- **text-neutral-900** → `dark:text-neutral-100` (titres principaux)
- **text-neutral-800** → `dark:text-neutral-200` (titres secondaires)
- **text-neutral-700** → `dark:text-neutral-300` (texte normal)
- **text-neutral-600** → `dark:text-neutral-400` (texte secondaire)
- **text-neutral-500** → `dark:text-neutral-400` (texte tertiaire)

### 2. Backgrounds
- **bg-white** → `dark:bg-neutral-950` (fonds de page)
- **bg-neutral-100** → `dark:bg-neutral-800` (boutons filtres)
- **bg-neutral-200** → `dark:bg-neutral-700` (hover états)
- Gradients adaptés : `dark:from-neutral-900 dark:to-primary/10`

### 3. Bordures
- **border-neutral-200** → `dark:border-neutral-800`
- **border-neutral-300** → `dark:border-neutral-700`

### 4. Composants spéciaux

#### Inputs et formulaires
```tsx
bg-white dark:bg-neutral-900
text-neutral-900 dark:text-neutral-100
border-neutral-300 dark:border-neutral-700
```

#### Cartes (Cards)
```tsx
bg-white dark:bg-neutral-900
border-neutral-200 dark:border-neutral-800
```

#### Boutons de filtres
```tsx
bg-neutral-100 dark:bg-neutral-800
hover:bg-neutral-200 dark:hover:bg-neutral-700
```

#### Header
```tsx
bg-white/80 dark:bg-neutral-900/80
border-neutral-200 dark:border-neutral-800
```

### 5. Effets glassmorphism
Adapté automatiquement via la classe utilitaire :
```css
.glassmorphism {
  @apply bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10;
}
```

## 🎯 Pages entièrement supportées

- ✅ Landing Page (Hero, Features, Partnership, Experiences)
- ✅ Page de login
- ✅ Dashboard Library (onglets + filtres)
- ✅ À propos
- ✅ Contact (formulaire inclus)
- ✅ Comment ça marche
- ✅ Vision pédagogique
- ✅ Mentions légales
- ✅ Politique de confidentialité
- ✅ CGU
- ✅ Politique cookies

## 🎨 Palette Dark Mode

### Backgrounds
- Principal : `neutral-950` (#020617)
- Cartes : `neutral-900` (#111827)
- Hover : `neutral-800` (#1F2937)

### Textes
- Titres : `neutral-100` (#F3F4F6)
- Normal : `neutral-300` (#D1D5DB)
- Secondaire : `neutral-400` (#9CA3AF)

### Accents (conservés)
- Primaire : Bleu turquoise (#06B6D4)
- Secondaire : Violet (#8B5CF6)
- Dégradés : Conservés identiques

## 🔧 Utilisation

Le toggle dark mode est situé dans le Header, à côté de la navigation. Un clic permet de basculer entre les modes, et le choix est automatiquement sauvegardé dans localStorage.

### Détection automatique
Au premier chargement, le thème suit les préférences système de l'utilisateur (`prefers-color-scheme`).

### Persistance
Le choix de l'utilisateur est sauvegardé et restauré à chaque visite.

## 📝 Fichiers modifiés

### Nouveaux fichiers
- `lib/theme-context.tsx` - Context pour gérer le thème
- `components/layout/ThemeToggle.tsx` - Bouton de toggle avec animations

### Fichiers mis à jour
- Tous les fichiers `.tsx` dans `/app` et `/components`
- `tailwind.config.ts` - Ajout de `darkMode: "class"`
- `app/globals.css` - Variables CSS pour dark mode
- `app/layout.tsx` - Ajout du ThemeProvider

## ✨ Résultat

Le site offre maintenant une excellente expérience en mode sombre avec :
- Contraste optimal pour la lisibilité
- Cohérence visuelle sur toutes les pages
- Transitions fluides entre les thèmes
- Conservation de l'identité visuelle (gradients, couleurs d'accent)

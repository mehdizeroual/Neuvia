# 📊 Dashboard - Documentation

## Vue d'ensemble

Un nouvel onglet **Dashboard** a été ajouté à la bibliothèque pour afficher les statistiques et les notes de l'utilisateur.

## 🎯 Fonctionnalités

### 1. Statistiques principales (4 cartes)
- **Expériences réalisées** : Nombre total d'expériences complétées
- **Moyenne générale** : Note moyenne sur 20 avec appréciation
- **Temps d'apprentissage** : Temps total passé (en heures et minutes)
- **Série en cours** : Nombre de jours consécutifs d'activité

### 2. Performance par matière
Affiche pour chaque matière :
- Nombre d'expériences réalisées
- Note moyenne sur 20
- Code couleur :
  - 🟢 **Vert** : ≥ 16/20 (Excellent)
  - 🟡 **Jaune** : 10-15/20 (Satisfaisant)
  - 🔴 **Rouge** : < 10/20 (À améliorer)
- Barre de progression visuelle
- Icône médaille pour les excellents résultats

### 3. Expériences récentes
Liste des 5 dernières expériences complétées avec :
- **Titre** de l'expérience
- **Date** de réalisation
- **Durée** d'apprentissage
- **Nombre d'essais** (si > 1)
- **Niveau** (badge)
- **Note sur 20** avec code couleur

### 4. Message d'encouragement
Carte motivante avec :
- Félicitations
- Rappel de la moyenne générale
- Message d'encouragement personnalisé

## 📁 Fichiers créés

### Données mockées
- `lib/mock-stats.ts` - Statistiques et expériences complétées

### Composants
- `components/library/Dashboard.tsx` - Composant principal du dashboard
- `components/library/StatsCard.tsx` - Carte de statistique
- `components/library/CompletedExperienceRow.tsx` - Ligne d'expérience complétée

## 🎨 Design

### Code couleur des notes
- **16-20** : Vert (#10b981) - Excellent
- **12-15** : Jaune/Ambre (#f59e0b) - Satisfaisant
- **0-11** : Rouge (#ef4444) - À améliorer

### Icônes utilisées
- 📚 **BookOpen** : Expériences réalisées
- 📈 **TrendingUp** : Moyenne générale
- ⏱️ **Clock** : Temps d'apprentissage
- 🔥 **Flame** : Série de jours
- 🏆 **Award** : Performance par matière
- 📅 **Calendar** : Date de réalisation
- 🔄 **RotateCcw** : Nombre d'essais

## 💾 Données mockées (exemples)

### Statistiques utilisateur
```typescript
{
  totalExperiences: 12,
  averageScore: 15.8,
  totalTimeSpent: 420, // 7h
  bestSubject: "Histoire",
  currentStreak: 5
}
```

### Expériences complétées
12 expériences avec des notes variées (13 à 19/20), réparties sur :
- Histoire : 5 expériences
- Sciences : 4 expériences
- Mathématiques : 3 expériences

## 🔧 Navigation

L'onglet **Mon Dashboard** est désormais le premier onglet et s'ouvre par défaut dans la bibliothèque.

Les autres onglets restent accessibles :
1. **Mon Dashboard** (nouveau, par défaut) ✨
2. Expériences vérifiées
3. Expériences de la communauté

## ✨ Améliorations futures possibles

- Graphiques de progression dans le temps
- Comparaison avec d'autres élèves (anonyme)
- Badges et récompenses
- Objectifs personnalisés
- Export PDF du dashboard
- Filtres par période (semaine, mois, année)

## 🎯 Objectif pédagogique

Le dashboard permet à l'élève de :
- Suivre sa progression
- Identifier ses points forts et faibles
- Se motiver avec des statistiques positives
- Visualiser son investissement (temps passé)
- Maintenir une routine d'apprentissage (série de jours)

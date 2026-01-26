export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
          Politique de gestion des cookies
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Qu'est-ce qu'un cookie ?
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Un cookie est un petit fichier texte déposé sur votre terminal
              (ordinateur, tablette, smartphone) lors de la visite d'un site web.
              Il permet au site de mémoriser des informations sur votre visite,
              comme vos préférences ou votre langue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Les cookies utilisés par Neuvia
            </h2>

            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-3 mt-6">
              Cookies strictement nécessaires
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Ces cookies sont indispensables au fonctionnement de la plateforme.
              Ils permettent notamment :
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>La gestion de votre session et de votre authentification</li>
              <li>La sécurisation de votre navigation</li>
              <li>La mémorisation de vos préférences de base</li>
            </ul>

            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-3 mt-6">
              Cookies de performance
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Ces cookies nous permettent d'analyser l'utilisation de la
              plateforme et d'améliorer ses performances :
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Mesure d'audience et statistiques de visite</li>
              <li>Identification des pages les plus consultées</li>
              <li>Amélioration de l'expérience utilisateur</li>
            </ul>

            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-3 mt-6">
              Cookies fonctionnels
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Ces cookies permettent de personnaliser votre expérience :
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Mémorisation de vos préférences d'affichage</li>
              <li>Sauvegarde de votre progression dans les expériences</li>
              <li>Personnalisation des contenus recommandés</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Gestion de vos cookies
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Vous pouvez à tout moment choisir de désactiver certains cookies.
              Cependant, cela peut affecter le fonctionnement de la plateforme.
            </p>

            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-3 mt-6">
              Configuration de votre navigateur
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              La plupart des navigateurs acceptent les cookies par défaut. Vous
              pouvez modifier les paramètres de votre navigateur pour :
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Refuser systématiquement les cookies</li>
              <li>Accepter ou refuser les cookies au cas par cas</li>
              <li>Supprimer les cookies déjà enregistrés</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Durée de conservation
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Les cookies sont conservés pour une durée maximale de 13 mois à
              compter de leur premier dépôt dans votre terminal. Au-delà de cette
              durée, votre consentement devra être renouvelé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Cookies tiers
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Neuvia peut utiliser des services tiers (analyse d'audience,
              hébergement) qui peuvent déposer leurs propres cookies. Ces
              services sont soumis à leurs propres politiques de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Contact
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Pour toute question concernant notre politique de cookies,
              contactez-nous à : privacy@neuvia.fr
            </p>
          </section>

          <section>
            <p className="text-neutral-700 dark:text-neutral-300 mt-8">
              <strong>Dernière mise à jour :</strong> Décembre 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

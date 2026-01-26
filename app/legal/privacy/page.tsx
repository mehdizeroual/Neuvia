export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Introduction
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Neuvia accorde une grande importance à la protection de vos données
              personnelles. Cette politique de confidentialité vous informe sur la
              manière dont nous collectons, utilisons et protégeons vos
              informations personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Données collectées
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Dans le cadre de l'utilisation de notre plateforme, nous sommes
              susceptibles de collecter les données suivantes :
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Établissement scolaire</li>
              <li>Niveau d'étude</li>
              <li>Données de navigation et d'utilisation de la plateforme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Utilisation des données
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Les données collectées sont utilisées dans les buts suivants :
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Fournir et améliorer nos services éducatifs</li>
              <li>Personnaliser l'expérience d'apprentissage</li>
              <li>Communiquer avec vous concernant votre compte</li>
              <li>
                Analyser l'utilisation de la plateforme pour l'améliorer
              </li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Protection des données
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre tout accès
              non autorisé, modification, divulgation ou destruction. Toutes les
              données sont stockées sur des serveurs sécurisés conformes au RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Vos droits
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="text-neutral-700 dark:text-neutral-300 mt-4">
              Pour exercer ces droits, contactez-nous à : privacy@neuvia.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Protection des mineurs
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              La protection des données des mineurs est une priorité pour Neuvia.
              L'utilisation de la plateforme par des mineurs nécessite
              l'autorisation parentale ou de l'établissement scolaire. Nous ne
              collectons pas sciemment de données personnelles auprès de mineurs
              sans consentement approprié.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Modifications
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Toute modification sera publiée sur
              cette page avec une date de mise à jour.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 mt-4">
              <strong>Dernière mise à jour :</strong> Décembre 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

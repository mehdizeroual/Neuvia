export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
          Conditions générales d'utilisation
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              1. Objet
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Les présentes conditions générales d'utilisation (CGU) ont pour
              objet de définir les modalités et conditions dans lesquelles Neuvia
              met à disposition sa plateforme éducative, ainsi que les droits et
              obligations des utilisateurs dans ce cadre.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              2. Accès à la plateforme
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              La plateforme Neuvia est accessible gratuitement à tout utilisateur
              disposant d'un accès à internet. Les frais d'accès et d'utilisation
              du réseau de télécommunication sont à la charge de l'utilisateur.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 mt-4">
              L'accès à certaines fonctionnalités nécessite la création d'un
              compte utilisateur. L'utilisateur s'engage à fournir des
              informations exactes et à les maintenir à jour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              3. Utilisation de la plateforme
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              L'utilisateur s'engage à utiliser la plateforme conformément à sa
              destination et de manière responsable. Il est strictement interdit :
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>
                De porter atteinte aux droits de propriété intellectuelle de
                Neuvia
              </li>
              <li>
                De diffuser des contenus illégaux, offensants ou inappropriés
              </li>
              <li>
                De perturber ou tenter de perturber le fonctionnement de la
                plateforme
              </li>
              <li>
                D'utiliser la plateforme à des fins commerciales non autorisées
              </li>
              <li>De partager ses identifiants de connexion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              4. Contenus pédagogiques
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Les contenus pédagogiques proposés sur Neuvia sont co-construits et
              validés par l'Éducation nationale. Ils sont protégés par le droit
              d'auteur et ne peuvent être reproduits ou diffusés sans
              autorisation expresse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              5. Responsabilité
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Neuvia s'efforce de maintenir la plateforme accessible et
              fonctionnelle, mais ne peut garantir une disponibilité continue.
              Neuvia ne saurait être tenue responsable des dommages directs ou
              indirects résultant de l'utilisation ou de l'impossibilité
              d'utiliser la plateforme.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              6. Données personnelles
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Le traitement des données personnelles est régi par notre politique
              de confidentialité, consultable sur cette page. En utilisant la
              plateforme, l'utilisateur accepte le traitement de ses données
              conformément à cette politique.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              7. Modification des CGU
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Neuvia se réserve le droit de modifier les présentes CGU à tout
              moment. Les utilisateurs seront informés de toute modification
              substantielle. L'utilisation continue de la plateforme après
              modification vaut acceptation des nouvelles conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              8. Droit applicable
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Les présentes CGU sont régies par le droit français. Tout litige
              relatif à leur interprétation ou leur exécution relève de la
              compétence exclusive des tribunaux français.
            </p>
          </section>

          <section>
            <p className="text-neutral-700 dark:text-neutral-300 mt-8">
              <strong>Date de dernière mise à jour :</strong> Décembre 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
          Mentions légales
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Éditeur du site
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              <strong>Raison sociale :</strong> Neuvia SAS
              <br />
              <strong>Siège social :</strong> Paris, France
              <br />
              <strong>SIRET :</strong> XXX XXX XXX XXXXX
              <br />
              <strong>Directeur de publication :</strong> [Nom du directeur]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Hébergement
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Le site Neuvia est hébergé par :
              <br />
              <strong>Raison sociale :</strong> [Hébergeur]
              <br />
              <strong>Adresse :</strong> [Adresse de l'hébergeur]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              L'ensemble des contenus présents sur le site Neuvia (textes,
              images, graphismes, logos, icônes, sons, logiciels) est la
              propriété exclusive de Neuvia ou de ses partenaires. Toute
              reproduction, distribution, modification, adaptation, retransmission
              ou publication de ces différents éléments est strictement interdite
              sans l'accord exprès par écrit de Neuvia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Partenariat institutionnel
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Neuvia est développée en partenariat avec l'Éducation nationale
              française. Les contenus pédagogiques sont co-construits et validés
              par des experts de l'Éducation nationale pour garantir leur qualité
              et leur conformité aux programmes scolaires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Contact
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Pour toute question concernant les mentions légales, vous pouvez
              nous contacter :
              <br />
              <strong>Email :</strong> contact@neuvia.fr
              <br />
              <strong>Adresse :</strong> [Adresse postale]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

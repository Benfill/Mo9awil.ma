import React, { useState } from "react";
import 'tailwindcss/tailwind.css';

export default function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "Pourquoi passer par MO9AWIL.ma ?",
      answer:
        "LegalPlace vous permet de créer votre société facilement, rapidement, et sans aucun risque de rejet par le greffe. Vos statuts sont parfaitement fiables juridiquement et adaptés à votre société. Nos experts sont disponibles par email et téléphone pour répondre à vos questions et créent votre société en un temps record grâce à leur expérience et leurs relations avec les greffes et autres administrations.",
      open: false
    },
    {
      question: "En combien de temps aurai-je mes statuts ? Et mon Kbis ?",
      answer:
        "Vos statuts seront disponibles dès que vous aurez finalisé votre questionnaire. Une fois votre dossier complet, nos experts lancent toutes les démarches auprès du greffe et du journal d’annonce légale pour immatriculer votre société au plus vite. Vous recevrez alors votre Kbis en moyenne 8 jours après (variable selon les départements).",
      open: false
    },
    {
      question: "Que se passe-t-il après le paiement ?",
      answer:
        "Une fois le paiement effectué, vous serez redirigés vers un questionnaire avec des questions complémentaires sur votre société. Nous vous demanderons ensuite quelques justificatifs, comme les pièces d'identité des associés. Une fois le questionnaire complété, vos statuts seront disponibles et nos experts traiteront votre dossier, jusqu’à l’obtention de votre Kbis.",
      open: false
    },
    {
      question: "Comment récupérer la TVA ?",
      answer:
        "Les frais de création sont avancés par un ou plusieurs associés pour le compte de la société en formation. Les associés qui ont avancé les coûts de création de société se remboursent une fois le capital social de la société débloqué – et à condition que la société dispose de la trésorerie suffisante. La TVA afférente aux frais de création est déductible dans le cadre des activités de la société.",
      open: false
    },
    {
      question: "Quelles pièces dois-je fournir pour l'immatriculation de ma société ?",
      answer:
        "Pour immatriculer votre société, vous devrez fournir : une pièce d’identité (CNI ou titre de séjour permettant une inscription au RCS le cas échéant), un certificat de dépôt des fonds et un justificatif de domicile. Pour les activités réglementées, d’autres justificatifs complémentaires peuvent vous être demandés.",
      open: false
    },
    {
      question: "Je suis artisan. Dois-je m'inscrire au Répertoire National des Entreprises (RNE) ?",
      answer:
        "Si vous êtes artisan, nous effectuons aussi cette démarche et transmettons les justificatifs nécessaires au guichet des formalités des entreprises. Si vous êtes artisan commerçant, vous serez inscrit au répertoire des métiers, au RNE et au RCS (Registre du Commerce et des Sociétés).",
      open: false
    },
    {
      question: "J'hésite encore concernant la forme juridique de ma société.",
      answer:
        "Pas de souci ! Vous pouvez commencer votre création et demander le changement de votre forme juridique avant le dépôt de votre dossier. N'hésitez pas à nous contacter, nous serons également ravis de vous répondre à vos questions.",
      open: false
    },
    {
      question: "Est-il possible de créer une société agricole avec LegalPlace ?",
      answer:
        "Compte tenu des spécificités liées à ce type d'activité, il n'est actuellement pas possible de créer votre société avec LegalPlace.",
      open: false
    },
    {
      question: "D’autres services sont-ils proposés par LegalPlace (domiciliation, comptabilité, dépôt de capital, etc.) ?",
      answer:
        "LegalPlace simplifie la création et la gestion d'entreprise en vous offrant une gamme complète de services : création d'entreprise, comptabilité, domiciliation d'entreprise, compte professionnel et dépôt de capital en ligne.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">FAQ</h1>
      <div className="w-full max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq bg-white rounded-lg shadow-md p-4 border ${faq.open ? "border-blue-500" : "border-gray-200"}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question flex justify-between items-center text-blue-900 font-bold">
              {faq.question}
              <svg
                data-accordion-icon
                className={`w-4 h-4 transform ${faq.open ? "rotate-180" : "rotate-0"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5L5 1 1 5"
                />
              </svg>
            </div>
            {faq.open && (
              <div className="faq-answer text-blue-800 mt-2">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import { Alert } from "flowbite-react";
import { useState } from "react";

export default function STEP_2({
  handleNextStep,
  handleSelection,
  managerEmail,
}) {
  const [alertColor, setAlertColor] = useState("failure");
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function handelAlert(text) {
    setAlertText(text);
    setShowAlert(true);
  }

  function checkEmail() {
    setShowAlert(false);
    if (managerEmail.length === 0) {
      handelAlert("L'email est obligatoir");
      return;
    }
    handleNextStep();
  }
  return (
    <div className="w-full">
      <div className="flex justify-center">
        {showAlert && (
          <Alert
            color={alertColor}
            className="fixed top-20"
            onDismiss={() => setShowAlert(false)}
          >
            {alertText}
          </Alert>
        )}
      </div>
      <div className="pt-6">
        <h1 className="font-bold text-xl text-blue-950">Adresse email</h1>
      </div>
      <div className="w-full flex justify-center pt-16">
        <span className="flex justify-start w-1/3">
          <p className="text-gray-500">
            👉Nous avons besoin de votre adresse mail pour sauvegarder vos
            réponses et finaliser votre dossier. Vous pourrez modifier vos
            réponses plus tard
          </p>
        </span>
      </div>
      <div className="w-full mt-2">
        <div className="w-full">
          <input
            placeholder="Adresse email"
            type="email"
            value={managerEmail}
            onChange={(e) => {
              handleSelection("managerEmail", e.target.value);
            }}
            className="border border-gray-300  w-1/3 py-3"
          />
        </div>
        <div className="pt-12">
          <button
            onClick={checkEmail}
            className="bg-blue-500 hover:bg-blue-600 py-4 px-6 rounded-md text-white mb-2"
          >
            Continuer
          </button>
        </div>
        <div className="flex justify-center py-16">
          <div className="w-1/3">
            <div class="border-b-2 border-gray-200 ..."></div>
          </div>
        </div>
        <div className="flex justify-center mb-20">
          <div className="w-1/3 flex justify-start items-center gap-16 flex-col">
            <p className="text-left text-gray-500">
              Nous ne partagerons vos informations avec personne, ces
              informations nous sont nécessaires pour traiter votre dossier.
            </p>
            <p className="text-left text-gray-400 text-sm">
              En tant que responsable de traitement, LegalPlace collecte vos
              données à caractère personnel aux fins notamment de traitement et
              suivi de vos demandes d’information, de commandes, de gestion de
              votre compte client, d'études marketing et statistiques, de suivi
              de la qualité de nos services et de prospection commerciale. Vos
              données sont destinées aux différents services administratifs et
              supports de LegalPlace. Les données mentionnées d’un (*) sont
              obligatoires. Conformément à la Loi Informatique et Liberté Loi n°
              78-17 du 6 janvier 1978 modifiée et au Règlement Général sur la
              Protection des Données Règlement (UE) 2016/679 du Parlement
              européen et du Conseil du 27 avril 2016 dit RGPD, vous disposez
              d'un droit d'accès, de rectification, d'effacement, de limitation
              et d'opposition au traitement de vos données. Vous pouvez exercer
              vos droits en envoyant un mail à dpo@legalplace.fr ou par courrier
              à LegalPlace, 40 rue de Paradis, 75010 Paris. Pour plus
              d’informations concernant le traitement de vos données à caractère
              personnel, vous pouvez consulter notre politique en cliquant ici.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function STEP_11({
  handleNextStep,
  handleSelection,
  managerPhone,
}) {
  return (
    <div className="w-full h-full">
      <div className="pt-6">
        <h1 className="font-bold text-xl text-blue-950">Numéro de téléphone</h1>
      </div>
      <div className="w-full flex justify-center pt-16">
        <span className="flex justify-start w-1/3">
          <p className="text-gray-500">
            👉Lorsque nous avons besoin de précisions supplémentaires sur votre
            dossier, nous vous joindrons par téléphone
          </p>
        </span>
      </div>
      <div className="w-full mt-2">
        <div className="w-full">
          <input
            placeholder="Numéro de téléphone"
            type="email"
            value={managerPhone}
            onChange={(e) => {
              handleSelection("managerPhone", e.target.value);
            }}
            className="border border-gray-300  w-1/3 py-3"
          />
        </div>
        <div className="pt-12">
          <button
            onClick={() => {
              handleSelection("choicesCompleted", true);
              handleNextStep();
            }}
            className="bg-blue-500 hover:bg-blue-600 py-4 px-6 rounded-md text-white mb-2"
          >
            Continuer
          </button>
          <p
            onClick={() => {
              handleSelection("choicesCompleted", true);
              handleNextStep();
            }}
            className="cursor-pointer hover:underline text-gray-500 hover:text-gray-600"
          >
            Choisir plus tard
          </p>
        </div>
        <div className="flex justify-center py-16">
          <div className="w-1/3">
            <div class="border-b-2 border-gray-200 ..."></div>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-32">
          <div className="w-1/3 flex justify-start">
            <p className="text-left text-gray-600">
              <span className="text-gray-700 font-bold">A savoir </span>: Nous
              ne partagerons vos informations avec personne, ces informations
              nous sont nécessaires pour traiter votre dossier.
              <p className="mt-6">
                Conformément à la Loi Informatique et Libertés et Règlement
                général sur la protection des données (RGPD), vous disposez d’un
                droit d’accès, de modification, de suppression et d’opposition
                au traitement de vos données à caractère personnel.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

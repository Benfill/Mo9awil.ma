export default function STEP_2({
  handleNextStep,
  handleSelection,
  companyName,
}) {
  return (
    <div className="w-full">
      <div className="pt-6">
        <h1 className="font-bold text-xl text-blue-950">
          Quel nom choisissez-vous pour votre société ?
        </h1>
      </div>
      <div className="w-full mt-16">
        <div className="w-full">
          <input
            placeholder="Ex: Mo9awil"
            type="text"
            value={companyName}
            onChange={(e) => {
              handleSelection("companyName", e.target.value);
            }}
            className="border border-gray-300  w-1/3 py-3"
          />
          <div className="w-full flex justify-center pt-4">
            <span className="flex justify-start w-1/3">
              <p className="text-gray-500">
                💡 Vous pourrez modifier le nom plus tard
              </p>
            </span>
          </div>
        </div>
        <div className="py-12">
          <button
            onClick={handleNextStep}
            className="bg-blue-500 hover:bg-blue-600 py-4 px-6 rounded-md text-white mb-2"
          >
            Continuer
          </button>
          <p
            onClick={handleNextStep}
            className="cursor-pointer hover:underline text-gray-500 hover:text-gray-600"
          >
            Choisir plus tard
          </p>
        </div>
        <div className="flex justify-center mb-20">
          <div className="w-1/3 flex justify-start">
            <p className="text-left text-gray-600">
              <span className="text-gray-700 font-bold">A savoir </span>: Si le
              nom commercial choisi est déjà utilisé par une autre entreprise,
              cela peut entraîner des poursuites judiciaires (pour violation de
              marque, usurpation de nom commercial, concurrence déloyale, etc.).
              Il est recommandé de procéder à des recherches préliminaires
              auprès de l'Office Marocain de la Propriété Industrielle et
              Commerciale (OMPIC) ainsi que du Registre de Commerce pour
              vérifier qu'une société n'utilise pas le même nom ou une marque
              pour la même activité. Vous pouvez protéger le nom de votre
              entreprise en déposant une marque auprès de l'OMPIC. Ce dépôt sera
              valable sur tout le territoire marocain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

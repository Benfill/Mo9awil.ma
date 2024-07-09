export default function STEP_7({ handleNextStep, handleSelection, capital }) {
  return (
    <div className="w-full">
      <div className="pt-6">
        <h1 className="font-bold text-xl text-blue-950">Capital social</h1>
      </div>
      <div className="w-full mt-16">
        <div className="w-full">
          <input
            placeholder="Ex: 10,000MAD"
            type="text"
            value={capital}
            onChange={(e) => {
              handleSelection("capital", e.target.value);
            }}
            className="border border-gray-300  w-1/3 py-3"
          />
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-1/3 flex justify-start">
            <p className="text-left text-gray-600">
              <span className="text-gray-700 font-bold">A savoir </span>:
                Le montant du capital social est déterminé librement par les
                associés fondateurs. Il représente la totalité des contributions
                des associés. En contrepartie de leurs contributions, les
                associés reçoivent des actions.
              <p className="mt-2">
                Conformément à la loi, il n'existe pas de montant minimum
                obligatoire pour le capital social ; celui-ci peut être aussi
                bas que 1 dirham (1 DH).
              </p>
            </p>
          </div>
        </div>
        <div className="pb-12 pt-6">
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
      </div>
    </div>
  );
}

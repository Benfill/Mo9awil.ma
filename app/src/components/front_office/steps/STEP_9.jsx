export default function STEP_9({
  handleNextStep,
  handleSelection,
  accountant,
}) {
  return (
    <div className="w-full h-screen">
      <div className="pt-6 w-full flex justify-center">
        <h1 className="font-bold text-xl text-blue-950 w-2/6">
          Avez-vous déjà mandaté un comptable pour effectuer votre comptabilité
          annuelle ?
        </h1>
      </div>
      <div className="w-full mt-16">
        <div className="flex justify-center w-full">
          <div className="my-2 w-1/3 flex justify-center flex-col gap-2">
            <div className="cursor-pointer hover:border-blue-400 flex items-center justify-start ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-2"
                type="radio"
                value=""
                onClick={() => {
                  handleSelection("accountant", true);
                  handleNextStep();
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                defaultChecked={accountant === true}
              />
              <label
                htmlFor="bordered-radio-2"
                className="w-full flex cursor-pointer py-4 ms-2 text-lg text-gray-500"
              >
                Oui
              </label>
            </div>
            <div className="hover:border-blue-400 cursor-pointer flex items-center justify-start ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                onClick={() => {
                  handleSelection("accountant", false);
                  handleNextStep();
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                defaultChecked={accountant === false}
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full flex cursor-pointer py-4 ms-2 text-lg text-gray-500"
              >
                Non
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="w-1/3 flex justify-start">
            <p className="text-left text-gray-600">
              <span className="text-gray-700 font-bold">A savoir </span>: En
              créant une société, vous êtes désormais tenu de respecter les lois
              fiscales et la règlementation comptable. Vous avez donc
              l'obligation d'envoyer au fisc chaque année : votre bilan, votre
              compte de résultat ainsi que toutes les annexes de votre liasse
              fiscale.
              <p className="mt-2">
                La majorité des entreprises fait appel à un comptable pour se
                décharger de cette contrainte, mais également pour se faire
                conseiller fiscalement dans les premiers jours de l'entreprise
                puis tout au long de l'année, pour payer moins d'impôts. Le
                comptable vous aide aussi à vous organiser pour la gestion de
                vos factures, vos notes de frais et optimiser vos déclarations
                de TVA
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

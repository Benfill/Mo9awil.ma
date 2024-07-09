export default function STEP_5({ handleNextStep, handleSelection, structure }) {
  return (
    <div className="w-full h-screen">
      <div className="pt-6">
        <h1 className="font-bold text-xl text-blue-950">
          Combien y a-t-il d'Associés fondateurs ?
        </h1>
      </div>
      <div className="w-full mt-16">
        <div className="flex justify-center w-full">
          <div className="my-2 w-1/3 flex justify-center flex-col gap-2">
            <div className="hover:border-blue-400 cursor-pointer flex items-center justify-start ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                onClick={() => {
                  handleSelection("structure", "SARL AU");
                  handleNextStep();
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                defaultChecked={structure === "SARL AU"}
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full flex cursor-pointer py-4 ms-2 text-lg text-gray-500"
              >
                Un seul (cas d'une SARL AU)
              </label>
            </div>
            <div className="cursor-pointer hover:border-blue-400 flex items-center justify-start ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-2"
                type="radio"
                value=""
                onClick={() => {
                  handleSelection("structure", "SARL");
                  handleNextStep();
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                defaultChecked={structure === "SARL"}
              />
              <label
                htmlFor="bordered-radio-2"
                className="w-full flex cursor-pointer py-4 ms-2 text-lg text-gray-500"
              >
                Plusieurs (cas d'une SARL)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function STEP_1({
  handleNextStep,
  handleSelection,
  delai_creation,
}) {
  function handleSelected(delai) {
    return `cursor-pointer w-1/6 h-full border ${delai !== delai_creation ? 'border-gray-300' : 'bg-gray-50 border-blue-400'} hover:bg-gray-50 hover:border-blue-400 flex flex-col items-center justify-center option-content picture`;
  }
  
  return (
    <div className="h-screen">
      <div className="pt-6">
        <h1 className="font-bold text-xl text-blue-950">
          Dans quel délai souhaitez-vous créer votre société ?
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pt-16 gap-2">
        <div className="flex justify-center w-full h-[8rem] max-w-screen-lg gap-2">
          <div
            onClick={() => {
              handleSelection("delai_creation", "soon");
              handleNextStep();
            }}
            className={handleSelected('soon')}
          >
            <div className="">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/f44f24d9-5d69-494b-824a-ac01d65bc9f5.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-2/3 text-blue-950 font-semibold">
                Dès que possible
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleSelection("delai_creation", "week");
              handleNextStep();
            }}
            className={handleSelected('week')}
          >
            <div className="selector-container radio-selector">
              <span className="radio"></span>
            </div>
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/ded4b03d-6eff-40b3-b790-31d3616b650a.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-2/3 text-blue-950 font-semibold">
                Dans la semaine
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full h-[8rem] max-w-screen-lg gap-2">
          <div
            onClick={() => {
              handleSelection("delai_creation", "month");
              handleNextStep();
            }}
            className={handleSelected('month')}
          >
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/ded4b03d-6eff-40b3-b790-31d3616b650a.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-full text-blue-950 font-semibold">
                Dans le mois
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleSelection("delai_creation", "none");
              handleNextStep();
            }}
            className={handleSelected('none')}
          >
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/885402e6-acf5-4ba1-8182-a3c9e64f7971.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-2/3 text-blue-950 font-semibold">
                Je ne sais pas encore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function STEP_8({ handleNextStep, handleSelection, address }) {
  function handleSelected(checker) {
    return `cursor-pointer w-1/6 h-full border ${
      checker !== address ? "border-gray-300" : "bg-gray-50 border-blue-400"
    } hover:bg-gray-50 hover:border-blue-400 flex flex-col items-center justify-center option-content picture`;
  }

  return (
    <div className="h-screen">
      <div className="pt-6">
        <h1 className="font-bold text-xl text-blue-950">
          Où sera fixé le siège social de la Société ?
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pt-16 gap-2">
        <div className="flex justify-center w-full h-[12rem] max-w-screen-lg gap-2">
          <div
            onClick={() => {
              handleSelection("address", "Domiciliation avec Mo9awil.ma");
              handleNextStep();
            }}
            className={handleSelected("Domiciliation avec Mo9awil.ma")}
          >
            <div className="">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/96899c65-fd3a-406b-8ddf-2df1715f8c9e.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-md w-full text-blue-950 font-semibold">
                Domiciliation avec Mo9awil.ma
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleSelection("address", "Au domicile du Gérant");
              handleNextStep();
            }}
            className={handleSelected("Au domicile du Gérant")}
          >
            <div className="selector-container radio-selector">
              <span className="radio"></span>
            </div>
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/9ade59a9-a592-4525-8a3c-6f76476f7b50.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-2/3 text-blue-950 font-semibold">
                Au domicile du Gérant
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full h-[12rem] max-w-screen-lg gap-2">
          <div
            onClick={() => {
              handleSelection("address", "Dans un centre de domiciliation déjà choisi");
              handleNextStep();
            }}
            className={handleSelected("Dans un centre de domiciliation déjà choisi")}
          >
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/5f193c20-1ccc-4194-ae25-c0c313b13b84.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-md w-2/3 text-blue-950 font-semibold">
                Dans un centre de domiciliation déjà choisi
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleSelection("address", "Dans d'autres locaux");
              handleNextStep();
            }}
            className={handleSelected("Dans d'autres locaux")}
          >
            <div className="flex justify-center pt-2">
              <div className="text-lg w-2/3 text-blue-950 font-semibold">
                Dans d'autres locaux
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

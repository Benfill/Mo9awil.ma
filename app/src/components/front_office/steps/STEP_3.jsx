export default function STEP_3({ handleNextStep, handleSelection, activity }) {
  function handleSelected(elm) {
    return `cursor-pointer w-1/6 h-full border ${
      elm !== activity ? "border-gray-300" : "bg-gray-50 border-blue-400"
    } hover:bg-gray-50 hover:border-blue-400 flex flex-col items-center justify-center option-content picture`;
  }
  return (
    <div>
      <div className="pt-6">
        <h1 className="font-bold text-xl text-blue-950">
          Quel est votre domaine d'activité ?
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center py-16 gap-2">
        <div className="flex justify-center w-full h-[8rem] max-w-screen-lg gap-2">
          <div
            onClick={() => {
              handleSelection("activity", "Consultants et freelance");
              handleNextStep();
            }}
            className={handleSelected("Consultants et freelance")}
          >
            <div className="">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/ba9c4851-3631-4ae4-b0d1-8e92cc83b5aa.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-2/3 text-blue-950 font-semibold">
                Consultants et freelance
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleSelection("activity", "Informatique et web");
              handleNextStep();
            }}
            className={handleSelected("Informatique et web")}
          >
            <div className="selector-container radio-selector">
              <span className="radio"></span>
            </div>
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/76f1bdbe-fd6a-4b60-bc25-6c811f206708.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-2/3 text-blue-950 font-semibold">
                Informatique et web
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleSelection("activity", "Services aux entreprises");
              handleNextStep();
            }}
            className={handleSelected("Services aux entreprises")}
          >
            <div className="selector-container radio-selector">
              <span className="radio"></span>
            </div>
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/7bfefe9f-e2c5-4bc0-a892-53c13c15e6eb.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-2/3 text-blue-950 font-semibold">
                Services aux entreprises
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full h-[8rem] max-w-screen-lg gap-2">
          <div
            onClick={() => {
              handleSelection("activity", "Construction et travaux");
              handleNextStep();
            }}
            className={handleSelected("Construction et travaux")}
          >
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/0e0add66-295f-4f43-a9b0-65ed1e36167e.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-full text-blue-950 font-semibold">
                Construction et travaux
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleSelection("activity", "Automobile et transport");
              handleNextStep();
            }}
            className={handleSelected("Automobile et transport")}
          >
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/42ce7ce3-488d-4a72-8135-52a63d8031c8.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-3/4 text-blue-950 font-semibold">
                Automobile et transport
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleSelection("activity", "Vente en ligne");
              handleNextStep();
            }}
            className={handleSelected("Vente en ligne")}
          >
            <div className="selector-container radio-selector">
              <span className="radio"></span>
            </div>
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/210b3679-848e-497b-8daa-46dab1ded869.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-full text-blue-950 font-semibold">
                Vente en ligne
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full h-[8rem] max-w-screen-lg gap-2">
          <div
            onClick={() => {
              handleSelection("activity", "Commerce");
              handleNextStep();
            }}
            className={handleSelected("Commerce")}
          >
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/eaae982c-64bf-4a98-8691-f2fef62ae722.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lNextStep text-blue-950 font-semibold">
                Commerce
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleSelection("activity", "Achat revente");
              handleNextStep();
            }}
            className={handleSelected("Achat revente")}
          >
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/10457f92-dacb-49e3-9db4-389aa56f26d3.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-full text-blue-950 font-semibold">
                Achat revente
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              handleSelection("activity", "Autres");
              handleNextStep();
            }}
            className={handleSelected("Autres")}
          >
            <div className="selector-container radio-selector">
              <span className="radio"></span>
            </div>
            <div className="image-container">
              <img
                className="w-[80%]"
                src="https://storage.googleapis.com/builder.zenflow.de/creation-sarl-wf/www/assets/98e6bbfb-9380-457e-99d8-53038ddae553.svg"
                alt="id-b9df191d"
              />
            </div>
            <div className="flex justify-center pt-2">
              <div className="text-lg w-full text-blue-950 font-semibold">
                Autres
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

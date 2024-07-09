import { useState } from "react";

export default function Domiciliation(props) {
  const [isChecked, setIsChecked] = useState(
    props.domiciliation.duration === "monthly" ? false : true
  );

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex justify-center bg-white">
      <div className="border-2 border-gray-200 w-[73%] rounded-md flex flex-col p-[3rem]">
        <div className="flex justify-evenly gap-14">
          {/* LEFT UPPER SIDE */}
          <div className="w-2/3 flex flex-col">
            <div className="flex items-center gap-4">
              <div className="flex bg-amber-200 py-2 px-6 rounded-full gap-2">
                <div>
                  <img
                    src="https://assets-global.website-files.com/603544f36c95c822aaf84300/63c58224a048a80fc5a72c23_gift-01.svg"
                    alt=""
                  />
                </div>
                <p className="text-blue-950 font-bold">2 mois offerts</p>
              </div>
              <p className="text-blue-800">avec l'abonnement annuel</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-blue-950 text-left text-5xl font-black">
                Domiciliation à Rabat en quelques clics
              </h2>
              <ol>
                <li className="text-left font-medium text-blue-900 text-lg">
                  <span className="text-green-500 text-2xl">✔</span> Scan et tri
                  automatique du courrier
                </li>
                <li className="text-left font-medium text-blue-900 text-lg">
                  <span className="text-green-500 text-2xl">✔</span> Sans
                  paperasse ni frais annexe
                </li>
                <li className="text-left font-medium text-blue-900 text-lg">
                  <span className="text-green-500 text-2xl">✔</span> Jusqu'à
                  6000MAD d'économie sur la CFE
                </li>
              </ol>
              <p className="text-left text-lg text-blue-800">
                Faites de votre siège social un lieu d'exception et profitez de
                nos services de scan et de distribution de vos courriers, de
                bureaux à louer et du service client.
              </p>
            </div>
          </div>

          {/* RIGHT UPPER SIDE */}
          <div className="w-1/3 border rounded-md py-10">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <img
                  src="https://assets-global.website-files.com/63ecf60451f18a5c9cfd5797/641b43b55e74126824fd68cc_marker-pin-04.svg"
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <h2 className="text-blue-950 text-left text-3xl font-black">
                  Domiciliation
                </h2>
              </div>
              <div className="flex justify-center items-center gap-4 pb-4">
                <p className="text-lg text-blue-950">Mensuel</p>
                <div className="">
                  <label className=" cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <div
                      className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${
                        isChecked ? "peer-checked:bg-blue-600" : ""
                      }`}
                    ></div>
                  </label>
                </div>
                <p className="text-lg">Annuel</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-blue-950 flex justify-center gap-2">
                  <span className="font-black text-3xl">
                    {isChecked ? "299" : "249"}MAD
                  </span>{" "}
                  <span className="text-blue-800 text-sm font-sans">HT</span>{" "}
                  <span className="text-xl self-center">/ mois</span>
                </h3>
                <p className="text-blue-800">
                  Facturé {isChecked ? "annuellement" : "mensuellement"}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <button
                  onClick={() => {
                    props.handleSelection("domiciliation", {
                      withDomiciliation: true,
                      duration: isChecked ? "yearly" : "monthly",
                    });
                    props.handleNextStep();
                  }}
                  className="bg-blue-500 text-white text-lg px-16 py-3 rounded-md"
                >
                  <span className="text-xl">+</span> Ajouter
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    props.handleSelection("domiciliation", {
                      withDomiciliation: false,
                      duration: isChecked ? "yearly" : "monthly",
                    });
                    props.handleNextStep();
                  }}
                  className="border text-blue-900 text-lg px-8 py-3 rounded-md"
                >
                  Ignorer et continuer
                </button>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <div className="bg-blue-50 w-2/3 flex items-center gap-4 p-2">
                <p className="text-xl"> 💡</p>
                <p className="text-blue-900 text-left text-sm">
                  À régler au moment de la signature du contrat de domiciliation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col pt-12">
          <div className="w-2/3 pb-16">
            <h2 className="text-blue-950 text-4xl font-black">
              Vos avantages avec la domiciliation LegalPlace
            </h2>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="flex justify-center gap-4 w-full">
              <div className="border rounded-2xl border-gray-300 w-1/2 flex justify-center items-center py-6 px-8">
                <div className="w-1/3">
                  <img
                    src="https://assets-global.website-files.com/63ecf60451f18a5c9cfd5797/64198d6d98dc01479e5a368d_Coins%201.svg"
                    alt=""
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="text-left text-blue-950 font-bold text-xl">
                    Jusqu'à 600 € d'économies
                  </h3>
                  <p className="text-left text-blue-950">
                    En domiciliant votre société à Paris vous bénéficiez de la
                    cotisation foncière des entreprises la plus faible de France
                    (16,5% contre 31% en moyenne).
                  </p>
                </div>
              </div>
              <div className="border rounded-2xl border-gray-300 w-1/2 flex justify-center items-center py-6 px-8">
                <div className="w-1/3">
                  <img
                    src="https://assets-global.website-files.com/63ecf60451f18a5c9cfd5797/64198d829afb8b65d9e887c2_Scanner%201.svg"
                    alt=""
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="text-left text-blue-950 font-bold text-xl">
                    Scan et tri de vos courriers
                  </h3>
                  <p className="text-left text-blue-950">
                    Recevez en quasi instantané vos courriers et optez pour leur
                    destruction ou leur réexpédition de n'importe où grâce à
                    notre plateforme dédiée.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4 w-full">
              <div className="border rounded-2xl border-gray-300 w-1/2 flex justify-center items-center py-6 px-8">
                <div className="w-1/3">
                  <img
                    src="https://assets-global.website-files.com/63ecf60451f18a5c9cfd5797/64198d6d98dc01479e5a368d_Coins%201.svg"
                    alt=""
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="text-left text-blue-950 font-bold text-xl">
                    Jusqu'à 600 € d'économies
                  </h3>
                  <p className="text-left text-blue-950">
                    En domiciliant votre société à Paris vous bénéficiez de la
                    cotisation foncière des entreprises la plus faible de France
                    (16,5% contre 31% en moyenne).
                  </p>
                </div>
              </div>
              <div className="border rounded-2xl border-gray-300 w-1/2 flex justify-center items-center py-6 px-8">
                <div className="w-1/3">
                  <img
                    src="https://assets-global.website-files.com/63ecf60451f18a5c9cfd5797/64198d829afb8b65d9e887c2_Scanner%201.svg"
                    alt=""
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="text-left text-blue-950 font-bold text-xl">
                    Scan et tri de vos courriers
                  </h3>
                  <p className="text-left text-blue-950">
                    Recevez en quasi instantané vos courriers et optez pour leur
                    destruction ou leur réexpédition de n'importe où grâce à
                    notre plateforme dédiée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col pt-12">
          <div className="w-2/3 pb-16">
            <h2 className="text-blue-950 text-4xl font-black">
              Où sommes-nous ?
            </h2>
          </div>
          <div>location</div>
        </div>

        <div className="flex items-center flex-col pt-12">
          <div className="w-2/3 pb-16">
            <h2 className="text-blue-950 text-4xl font-black">
              Faites des économies simplement
            </h2>
          </div>
          <div>economie</div>
        </div>

        <div className="flex items-center flex-col pt-12">
          <div className="w-1/3 border rounded-md py-10">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <img
                  src="https://assets-global.website-files.com/63ecf60451f18a5c9cfd5797/641b43b55e74126824fd68cc_marker-pin-04.svg"
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <h2 className="text-blue-950 text-left text-3xl font-black">
                  Domiciliation
                </h2>
              </div>
              <div className="flex justify-center items-center gap-4 pb-4">
                <p className="text-lg text-blue-950">Mensuel</p>
                <div className="">
                  <label className=" cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <div
                      className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${
                        isChecked ? "peer-checked:bg-blue-600" : ""
                      }`}
                    ></div>
                  </label>
                </div>
                <p className="text-lg">Annuel</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-blue-950 flex justify-center gap-2">
                  <span className="font-black text-3xl">
                    {isChecked ? "299" : "249"}MAD
                  </span>{" "}
                  <span className="text-blue-800 text-sm font-sans">HT</span>{" "}
                  <span className="text-xl self-center">/ mois</span>
                </h3>
                <p className="text-blue-800">
                  Facturé {isChecked ? "mensuellement" : "annuellement"}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <button
                  onClick={() => {
                    props.handleSelection("domiciliation", {
                      withDomiciliation: true,
                      duration: isChecked ? "yearly" : "monthly",
                    });
                    props.handleNextStep();
                  }}
                  className="bg-blue-500 text-white text-lg px-16 py-3 rounded-md"
                >
                  <span className="text-xl">+</span> Ajouter
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    props.handleSelection("domiciliation", {
                      withDomiciliation: false,
                      duration: isChecked ? "yearly" : "monthly",
                    });
                    props.handleNextStep();
                  }}
                  className="border text-blue-900 text-lg px-8 py-3 rounded-md"
                >
                  Ignorer et continuer
                </button>
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <div className="bg-blue-50 w-2/3 flex items-center gap-4 p-2">
                <p className="text-xl"> 💡</p>
                <p className="text-blue-900 text-left text-sm">
                  À régler au moment de la signature du contrat de domiciliation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

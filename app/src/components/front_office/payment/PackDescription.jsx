import { useState } from "react";

export default function PackDescription() {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };
  return (
    <div className="h-full py-6 px-[13rem]">
      <div className="flex flex-col  gap-6">
        <h1 className="text-[1.5rem] font-bold  text-blue-950 pb-4">
          Tous les services suivants sont inclus dans nos packs
        </h1>
        <h2 className="text-[1.3rem] font-bold  text-blue-950">
          Documents juridiques
        </h2>
        <p className="text-blue-900 text-md">
          Constituez facilement votre dossier d’immatriculation grâce à nos
          outils en ligne.
        </p>
      </div>
      <div className="flex justify-center pt-12">
        {/* container */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* outils section */}
          <div className="flex">
            {/* outils image */}
            <div className="w-1/6 flex items-start">
              <div className="w-full flex justify-center">
                <img
                  src="https://assets-global.website-files.com/603544f36c95c822aaf84300/6346955b5432f02002f05f87_Frame%20353.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-left font-bold text-lg text-blue-900">
                Outil de rédaction de statuts en ligne facile à utiliser
              </h1>
              <p className="text-left text-blue-800">
                Nous avons construit une technologie unique vous permettant de
                générer des statuts en répondant simplement à des questions en
                ligne. L’outil est simple à prendre en main et vous permet de ne
                rien oublier ! Si vous rencontrez des difficultés, nos juristes
                sont à disponibles pour vous aider.
              </p>
            </div>
          </div>
          <div className="flex">
            {/* outils image */}
            <div className="w-1/6 flex items-start">
              <div className="w-full flex justify-center">
                <img
                  src="https://assets-global.website-files.com/603544f36c95c822aaf84300/6346953cd6b5a26470c68879_Frame%20354.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-left font-bold text-lg text-blue-900">
                Dossier complet
              </h1>
              <p className="text-left text-blue-800">
                Vous recevez vos statuts de SARL personnalisés grâce aux
                réponses renseignées dans le questionnaire. Vous recevrez
                également le formulaire M0, les pièces annexes obligatoires et
                le registre des bénéficiaires effectifs.
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://assets-global.website-files.com/603544f36c95c822aaf84300/6346947498f82cad1a45f79b_SwissKnife.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col  gap-6">
        <h2 className="text-[1.3rem] font-bold  text-blue-950">
          Formalités administratives
        </h2>
        <p className="text-blue-900 text-md">
          Toutes les formalités administratives sont effectuées par des juristes
          expérimentés.
        </p>
      </div>

      {/* card missing */}
      <div className="flex justify-center pt-12 ">
        {/* image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://assets-global.website-files.com/603544f36c95c822aaf84300/6349282ba76c453767739f34_1-validation.svg"
            alt=""
          />
        </div>

        <div className="flex h-1/5 flex-col items-center">
          <div className={`${isTextVisible ? "border border-gray-400" : ""}`}>
            <div
              className="w-[80%] flex cursor-pointer"
              onClick={toggleTextVisibility}
            >
              <div className="flex  gap-4">
                <div className="flex items-center">
                  <img
                    src="https://assets-global.website-files.com/603544f36c95c822aaf84300/63469ac5334b1d7ec5718c97_LeadIcon.svg"
                    alt=""
                  />
                </div>
                <h2 className="w-full font-bold text-lg text-blue-900">
                  Validation de votre dossier
                </h2>
              </div>
              <div className="w-[8%] flex cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 64 64"
                  viewBox="0 0 64 64"
                  id="Arrow"
                >
                  <path
                    fill="#2bccff"
                    d="m-218.7-308.6 2-2 11.7 11.8 11.7-11.8 2 2-13.7 13.7-13.7-13.7"
                    transform="translate(237 335)"
                    className="color134563 svgShape"
                  ></path>
                </svg>
              </div>
            </div>

            {isTextVisible && (
              <div
                className={`w-3/4 text-left transition-opacity duration-500`}
              >
                Votre juriste rassemble les éléments pour constituer votre
                dossier et veille à ce qu’il soit valide et conforme
              </div>
            )}
          </div>
          <div className={`${isTextVisible ? "border border-gray-400" : ""}`}>
            <div
              className="w-[80%] flex cursor-pointer"
              onClick={toggleTextVisibility}
            >
              <div className="flex w-full gap-4">
                <div className="flex items-center">
                  <img
                    src="https://assets-global.website-files.com/603544f36c95c822aaf84300/63469ac5334b1d7ec5718c97_LeadIcon.svg"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-lg text-blue-900">
                  Validation de votre dossier
                </h2>
              </div>
              <div className="w-[8%] flex cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 64 64"
                  viewBox="0 0 64 64"
                  id="Arrow"
                >
                  <path
                    fill="#2bccff"
                    d="m-218.7-308.6 2-2 11.7 11.8 11.7-11.8 2 2-13.7 13.7-13.7-13.7"
                    transform="translate(237 335)"
                    className="color134563 svgShape"
                  ></path>
                </svg>
              </div>
            </div>

            <div
              className={`w-3/4 text-left transition-opacity duration-500 ${
                isTextVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Votre juriste rassemble les éléments pour constituer votre dossier
              et veille à ce qu’il soit valide et conforme
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-6">
        <h2 className="text-[1.3rem] font-bold  text-blue-950">
          Frais administratifs obligatoires
        </h2>
        <p className="text-blue-900 text-md">
          Les démarches suivantes sont obligatoires pour obtenir le Kbis.
        </p>
      </div>
      <div className="flex justify-center pt-12">
        {/* container */}
        <div className="w-1/2 flex flex-col gap-6">
          {/* outils section */}
          <div className="flex">
            {/* outils image */}
            <div className="w-1/6 flex items-start">
              <div className="w-full flex justify-center">
                <img
                  src="https://assets-global.website-files.com/603544f36c95c822aaf84300/6346955b5432f02002f05f87_Frame%20353.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-left font-bold text-lg text-blue-900">
                Frais de greffe
              </h1>
              <p className="text-left text-blue-800">
                Au moment de déposer le dossier d’immatriculation de la SARL, il
                faut régler les frais de Greffe du Tribunal de commerce et les
                frais liés à la déclaration des bénéficiaires effectifs.
              </p>
            </div>
          </div>
          <div className="flex">
            {/* outils image */}
            <div className="w-1/6 flex items-start">
              <div className="w-full flex justify-center">
                <img
                  src="https://assets-global.website-files.com/603544f36c95c822aaf84300/6346953cd6b5a26470c68879_Frame%20354.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-left font-bold text-lg text-blue-900">
                Publication de l’annonce légale
              </h1>
              <p className="text-left text-blue-800">
                Il faudra publier un avis de constitution dans un journal
                d’annonces légales, situé dans le département du lieu du siège
                social de la SARL. Il s’agit d’une démarche obligatoire pour
                informer les tiers de la création de la SARL.
              </p>
            </div>
          </div>

          <div className="flex w-4/5 justify-center gap-4">
            <img
              src="https://assets-global.website-files.com/603544f36c95c822aaf84300/63469660abf4cb57a1f78065_alert-circle.svg"
              alt=""
            />
            <h1 className="text-left text-lg text-blue-900">
              Ces frais obligatoires s’élèvent à 246,86€ HT.
            </h1>
          </div>
        </div>
        {/* image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src="https://assets-global.website-files.com/603544f36c95c822aaf84300/6346a1e7f220f524017a2f24_Map.svg"
            alt=""
          />
        </div>
      </div>

      <div className="py-12">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="text-white bg-blue-500 py-3 font-medium rounded-md px-8"
        >
          Choisir mon pack
        </button>
      </div>
    </div>
  );
}

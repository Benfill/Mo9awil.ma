import { lazy, useEffect } from "react";
import { Carousel } from "flowbite-react";
import "../../style/App.css";
import ServicesChoice from "../../components/front_office/ServicesChoice";

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="h-full bg-slate-100 heroServices pt-20">
      <div>
        <div className="pt-20 flex justify-center">
          <h1 className="trueGray-800 text-4xl sm:text-5xl lg:text-6xl w-5/6 sm:w-4/6 lg:w-3/6 font-bold text-center">
            Toutes vos démarches simplement et rapidement
          </h1>
        </div>
        <div className="pt-8 sm:pt-12 flex justify-center">
          <p className="text-xl sm:text-2xl lg:text-3xl trueGray-500 w-5/6 sm:w-3/4 lg:w-1/2 text-center">
            La solution simple et rapide pour créer son entreprise, modifier ses
            statuts ou fermer son entreprise.
          </p>
        </div>
        <div className="pt-8 sm:pt-12 flex justify-center">
          <p className="text-lg sm:text-xl lg:text-2xl w-5/6 sm:w-3/4 lg:w-1/2 text-center">
            - 15% sur toutes vos démarches juridiques avec le code{" "}
            <span className="font-bold">MO9AWIL100</span>
          </p>
        </div>
        <ServicesChoice />
        <div className="pt-12 sm:pt-16 lg:pt-20 flex justify-center">
          <h3 className="trueGray-800 text-3xl sm:text-4xl lg:text-5xl w-5/6 sm:w-3/4 lg:w-1/2 font-bold text-center">
            Comment ça marche ?
          </h3>
        </div>
        <div className="pt-4 sm:pt-8 flex justify-center">
          <p className="text-lg sm:text-xl lg:text-2xl font-medium trueGray-500 w-5/6 sm:w-3/4 lg:w-1/2 text-center">
            Faites vos formalités en 3 étapes
          </p>
        </div>
        <div className="flex flex-col sm:flex-row py-12 sm:py-16 lg:py-20 justify-center">
          <div className="flex flex-col items-center gap-4 w-full sm:w-1/3 mb-8 sm:mb-0">
            <div>
              <img
                src="https://assets-global.website-files.com/60c3992427a0440349d4d2fd/60c3992427a0441fe9d4d3a8_Wizard-fill.svg"
                alt=""
              />
            </div>
            <p className="w-5/6 sm:w-3/4 lg:w-1/2 text-center">
              Vous remplissez notre questionnaire en 5 minutes
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full sm:w-1/3 mb-8 sm:mb-0">
            <div>
              <img
                src="https://assets-global.website-files.com/60c3992427a0440349d4d2fd/60c3992427a044035bd4d37e_Nos%20Experts.svg"
                alt=""
              />
            </div>
            <p className="w-1/3">Nos experts traitent votre dossier sous 24h</p>
          </div>
          <div className="flex flex-col items-center gap-4 w-1/3">
            <div>
              <img
                src="https://assets-global.website-files.com/60c3992427a0440349d4d2fd/60c3992427a0445cbcd4d38f_Kbis.svg"
                alt=""
              />
            </div>
            <p className="w-1/3">Vous recevez vos documents</p>
          </div>
        </div>

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-blue-600">
          <h1>Nos clients témoignent</h1>
          <Carousel leftControl="left" rightControl="right">
            <div className="bg-white max-w-[75%] min-w-1/4 max-h-[75%] p-6 ">
              <div>
                <p className="w-1/2">
                  J’avais besoin de créer mon entreprise rapidement. J’ai été
                  accompagné de bout en bout et le service client était très
                  sympathique. Je recommande à tous ceux qui ne veulent pas se
                  prendre la tête avec le juridique
                </p>
              </div>
              <div className="flex justify-end">
                <h2 className="font-bold">Sara Fellaouine - GM France Urban</h2>
              </div>
              <div className="rounded-full justify-end flex w-full">
                <img
                  className="h-full w-20 rounded-full"
                  src="https://assets-global.website-files.com/60c3992427a0440349d4d2fd/60c3992427a044baf1d4d3ae_download.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-white max-w-[75%] min-w-1/4 max-h-[75%] p-6 ">
              <div>
                <p>
                  J’avais besoin de modifier mes statuts et je ne savais pas à
                  qui m’adresser. L’équipe a été très réactive et a su traiter
                  mon dossier rapidement. Je repasserai par les services de
                  LegalPlace
                </p>
              </div>
              <div className="flex justify-end">
                <h2 className="font-bold">
                  Ahmad Chamseddine - Co-Founder at ThalerTech
                </h2>
              </div>
              <div className="rounded-full justify-end flex w-full">
                <img
                  className="h-full w-20 rounded-full"
                  src="https://assets-global.website-files.com/60c3992427a0440349d4d2fd/60c3992427a044cf37d4d3aa_Ahmad-Chamseddine.png"
                  alt=""
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </main>
  );
}

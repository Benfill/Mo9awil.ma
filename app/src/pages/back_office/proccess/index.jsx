import React, { useEffect, useState } from "react";
import NegativeCertificate from "../../../components/back_office/proccess/NegativeCertificate";
import { Manager } from "../../../components/back_office/proccess/Manager";
import { Tooltip } from "flowbite-react";
import { ProccessSteps } from "../../../components/back_office/proccess/ProccessSteps";
import { ProccessStart } from "../../../components/back_office/proccess/ProccessStart";
import { CertificateSubmited } from "../../../components/back_office/proccess/CertificateSubmited";
export const Proccess = ({ setIsSidebarOpen }) => {
  const [component, setComponent] = useState(null);
  const [stepNbr, setStepNbr] = useState(null);
  const [step, setStep] = useState(() => {
    const storedData = localStorage.getItem("proccessStep");
    return !storedData ? "start" : storedData;
  });

  useEffect(() => {
    const STEPS = [
      {
        name: "Manager",
        nbr: 1,
        component: <Manager handleStep={handleStep} />,
      },
      {
        name: "NegativeCertificate",
        nbr: 2,
        component: <NegativeCertificate handleStep={handleStep} />,
      },
      {
        name: "CertificateSubmited",
        nbr: 3,
        component: <CertificateSubmited handleStep={handleStep} />,
      },
    ];

    setComponent(STEPS.find((item) => item.name === step)?.component);
    setStepNbr(STEPS.find((item) => item.name === step)?.nbr);
    window.scrollTo(0, 0);
  }, [step]);

  function handleStep(value) {
    localStorage.setItem("proccessStep", value);
    setStep(value);
  }

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [setIsSidebarOpen]);

  return step !== "start" ? (
    <main className={`flex flex-col pt-6 items-center`}>
      <div className="flex flex-col px-6 gap-6">
        <h1 className="text-blue-950 font-bold text-2xl">
          Voici le processus de création de votre entreprise. Veuillez compléter
          les étapes pour débuter votre parcours entrepreneurial.
        </h1>

        <ProccessSteps step={stepNbr} />

        {stepNbr <= 2 && (
          <div className="flex justify-center">
            <h2 className="text-blue-950 font-bold w-2/3">
              La première étape consiste à demander votre certificat négatif.
              Cela prendra au maximum 2 jours ouvrables. Nous vous tiendrons
              informé à chaque étape du processus. Gardez votre énergie
              entrepreneuriale intacte, le début de votre aventure est imminent.
            </h2>
          </div>
        )}

        {component}
      </div>
    </main>
  ) : (
    <ProccessStart handleStep={handleStep} />
  );
};

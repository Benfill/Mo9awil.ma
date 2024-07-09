import React, { useState, useEffect } from "react";
import STEP_1 from "../../components/front_office/steps/STEP_1";
import STEP_2 from "../../components/front_office/steps/STEP_2";
import STEP_3 from "../../components/front_office/steps/STEP_3";
import STEP_4 from "../../components/front_office/steps/STEP_4";
import STEP_5 from "../../components/front_office/steps/STEP_5";
import STEP_6 from "../../components/front_office/steps/STEP_6";
import STEP_7 from "../../components/front_office/steps/STEP_7";
import STEP_8 from "../../components/front_office/steps/STEP_8";
import STEP_9 from "../../components/front_office/steps/STEP_9";
import STEP_10 from "../../components/front_office/steps/STEP_10";
import STEP_11 from "../../components/front_office/steps/STEP_11";
import STEP_12 from "../../components/front_office/steps/STEP_12";

export default function CreationSarl() {
  const [choices, setChoices] = useState(() => {
    const storedChoices = localStorage.getItem("userChoices");
    return storedChoices
      ? JSON.parse(storedChoices)
      : {
          delai_creation: "",
          companyName: "",
          activity: "",
          managerInfo: {
            firstName: "",
            lastName: "",
            gender: "",
          },
          capital: 1,
          structure: "",
          nonPartnerManager: false,
          address: "",
          accountant: false,
          managerEmail: "",
          managerPhone: "",
          needs: [],
          choicesCompleted: false,
          step: 1,
        };
  });
  const [step, setStep] = useState(choices.step);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    localStorage.setItem("userChoices", JSON.stringify(choices));
  }, [choices]);

  const handleSelection = (fieldName, value) => {
    setChoices((prevChoices) => ({
      ...prevChoices,
      [fieldName]: value,
    }));
  };

  const handleNextStep = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    handleSelection("step", step + 1);
    setStep((prevStep) => prevStep + 1);
  };

  const filledItems = Math.min(step, 12);

  const progressItems = [];
  for (let i = 0; i < 13; i++) {
    progressItems.push(
      <div
        key={i}
        className={`h-1 w-[20rem] rounded ${
          i < filledItems ? "bg-blue-500" : "bg-gray-300"
        }`}
      ></div>
    );
  }

  const steps = [
    {
      stepNumber: 1,
      component: (
        <STEP_1
          handleNextStep={handleNextStep}
          delai_creation={choices.delai_creation}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 2,
      component: (
        <STEP_2
          handleNextStep={handleNextStep}
          companyName={choices.companyName}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 3,
      component: (
        <STEP_3
          handleNextStep={handleNextStep}
          activity={choices.activity}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 4,
      component: (
        <STEP_4
          handleNextStep={handleNextStep}
          managerInfo={choices.managerInfo}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 5,
      component: (
        <STEP_5
          handleNextStep={handleNextStep}
          structure={choices.structure}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 6,
      component: (
        <STEP_6
          handleNextStep={handleNextStep}
          nonPartnerManager={choices.nonPartnerManager}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 7,
      component: (
        <STEP_7
          handleNextStep={handleNextStep}
          capital={choices.capital}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 8,
      component: (
        <STEP_8
          handleNextStep={handleNextStep}
          address={choices.address}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 9,
      component: (
        <STEP_9
          handleNextStep={handleNextStep}
          accountant={choices.accountant}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 10,
      component: (
        <STEP_10
          handleNextStep={handleNextStep}
          managerEmail={choices.managerEmail}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 11,
      component: (
        <STEP_11
          handleNextStep={handleNextStep}
          managerPhone={choices.managerPhone}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 12,
      component: (
        <STEP_12 needs={choices.needs} handleSelection={handleSelection} />
      ),
    },
  ];

  return (
    <main className="h-full pt-32 z-0 relative">
      <div className="w-full">
        <h1 className="text-lg font-bold text-gray-500">CRÉATION DE SARL</h1>
        <div
          className="flex justify-center w-full flex-col items-center gap-2 pt-8
        "
        >
          <div className="text-gray-500 flex items-center justify-start w-1/3">
            {step !== 1 && (
              <button
                onClick={() => {
                  handleSelection("step", step - 1);
                  setStep((prevStep) => prevStep - 1);
                }}
                className="flex items-center justify-start gap-2"
              >
                <div className="w-3 text-gray-500">
                  <svg
                    className="text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>arrow-left-1</title>
                    <path d="M4.5,12a2.3,2.3,0,0,1,.78-1.729L16.432.46a1.847,1.847,0,0,1,2.439,2.773L9.119,11.812a.25.25,0,0,0,0,.376l9.752,8.579a1.847,1.847,0,1,1-2.439,2.773L5.284,13.732A2.31,2.31,0,0,1,4.5,12Z"></path>
                  </svg>
                </div>
                <p>Retour</p>
              </button>
            )}
          </div>
          <div className="w-1/3 gap-2 flex justify-center ">
            {progressItems}
          </div>
        </div>
      </div>
      {steps.map((stepObj) => step === stepObj.stepNumber && stepObj.component)}
    </main>
  );
}

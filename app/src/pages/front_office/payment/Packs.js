import { useEffect, useLayoutEffect, useState } from "react";
import PaymentSteps from "../../../components/front_office/payment/PaymentSteps";
import PacksCards from "../../../components/front_office/payment/PacksCards";
import Header from "../../../components/front_office/payment/Header";
import Faq from "../../../components/front_office/Faq";
import PackDescription from "../../../components/front_office/payment/PackDescription";
import Domiciliation from "../../../components/front_office/payment/Domiciliation";
import Payement from "../../../components/front_office/payment/Payement";
import { hasAccessToPack } from "../../../utils/accessRestriction";

export default function Packs() {
  const [paymentChoices, setChoices] = useState(() => {
    const storedChoices = localStorage.getItem("paymentChoices");

    return storedChoices
      ? JSON.parse(storedChoices)
      : {
          pack: "",
          price: 999,
          total: 0,
          fees: 0,
          domiciliation: { withDomiciliation: false, duration: "monthly" },
          payTotal: false,
          step: 1,
          choicesCompleted: false,
          userInfos: {},
          userIp: null,
        };
  });

  let userInfosCheck = JSON.parse(localStorage.getItem("userChoices"));
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      handleSelection("userIp", data.ip);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  useEffect(() => {
    if (userInfosCheck) {
      setChoices((prevChoices) => ({
        ...prevChoices,
        userInfos: {
          first_name: userInfosCheck.managerInfo.firstName,
          last_name: userInfosCheck.managerInfo.lastName,
          email: userInfosCheck.managerEmail,
          phone: userInfosCheck.managerPhone,
        },
      }));
    }
  }, []);

  const [step, setStep] = useState(paymentChoices.step);

  useEffect(() => {
    localStorage.setItem("paymentChoices", JSON.stringify(paymentChoices));
  }, [paymentChoices]);

  useEffect(() => {
    hasAccessToPack();
  }, []);
  const handleSelection = (fieldName, value) => {
    setChoices((prevChoices) => ({
      ...prevChoices,
      [fieldName]: value,
    }));
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const handleNextStep = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    handleSelection("step", paymentChoices.step + 1);
    setStep((prevStep) => prevStep + 1);
  };

  const steps = [
    {
      stepNumber: 1,
      component: (
        <div>
          <PacksCards
            handleNextStep={handleNextStep}
            pack={paymentChoices.pack}
            price={paymentChoices.price}
            handleSelection={handleSelection}
          />
          <PackDescription />
          <Faq />
        </div>
      ),
    },
    {
      stepNumber: 2,
      component: (
        <Domiciliation
          handleNextStep={handleNextStep}
          domiciliation={paymentChoices.domiciliation}
          handleSelection={handleSelection}
        />
      ),
    },
    {
      stepNumber: 3,
      component: (
        <Payement
          payTotal={paymentChoices.payTotal}
          pack={paymentChoices.pack}
          total={paymentChoices.total}
          fees={paymentChoices.fees}
          price={paymentChoices.price}
          handleSelection={handleSelection}
        />
      ),
    },
  ];

  return (
    <main className="h-full main pt-20">
      <div className="py-4 px-[11rem] max-sm:p-2 max-md:p-4">
        <div className="flex justify-between max-sm:justify-center max-sm:flex-wrap max-md:justify-center max-md:flex-wrap max-md:gap-12">
          <Header
            steps={step}
            setStep={setStep}
            handleSelection={handleSelection}
            step={paymentChoices.step}
          />

          {step < 3 && <PaymentSteps steps={step} />}
        </div>
      </div>

      <div>
        {steps.map(
          (stepObj) => step === stepObj.stepNumber && stepObj.component
        )}
      </div>
    </main>
  );
}

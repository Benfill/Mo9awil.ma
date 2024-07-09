import { useState } from "react";

export default function STEP_4({
  handleNextStep,
  handleSelection,
  managerInfo,
}) {
  const [firstName, setFirstName] = useState(
    managerInfo.firstName ? managerInfo.firstName : ""
  );
  const [lastName, setLastName] = useState(
    managerInfo.lastName ? managerInfo.lastName : ""
  );

  const [gender, setGender] = useState(
    managerInfo.gender ? managerInfo.gender : "monsieur"
  );

  function handleManagerInfo(key, value) {
    if (key === "firstName") {
      setFirstName(value);
      managerInfo.firstName = value;
    } else if (key === "gender") {
      setGender(value);
      managerInfo.gender = value;
    } else {
      setLastName(value);
      managerInfo.lastName = value;
    }
    handleSelection("managerInfo", managerInfo);
  }

  return (
    <div className="w-full">
      <div className="pt-6">
        <h1 className="font-bold text-xl text-blue-950">
          Quelle est l'identité du Gérant ?
        </h1>
      </div>
      <div className="w-full mt-16">
        <div className="flex justify-center w-full">
          <div className="my-2 w-1/3 flex justify-center">
            <div className="w-1/2 hover:border-blue-400 cursor-pointer flex items-center ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                onChange={() => {
                  handleManagerInfo("gender", "madame");
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                defaultChecked={gender === "madame"}
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full flex font-bold cursor-pointer py-4 ms-2 text-md text-gray-500"
              >
                Madame
              </label>
            </div>
            <div className="w-1/2 cursor-pointer hover:border-blue-400 flex items-center justify-start ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-2"
                type="radio"
                value=""
                onChange={() => {
                  handleManagerInfo("gender", "monsieur");
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                defaultChecked={gender === "monsieur"}
              />
              <label
                htmlFor="bordered-radio-2"
                className="w-full flex font-bold cursor-pointer py-4 ms-2 text-md text-gray-500"
              >
                Monsieur
              </label>
            </div>
          </div>
        </div>
        <div className="my-2 w-full">
          <input
            placeholder="Prénom"
            type="text"
            value={firstName}
            onChange={(e) => {
              handleManagerInfo("firstName", e.target.value);
            }}
            className="border border-gray-300 w-1/3 py-3"
          />
        </div>

        <div className="my-2 w-full">
          <input
            placeholder="Nom"
            type="text"
            value={lastName}
            onChange={(e) => {
              handleManagerInfo("lastName", e.target.value);
            }}
            className="border border-gray-300  w-1/3 py-3"
          />
        </div>
        <div className="py-12">
          <button
            onClick={handleNextStep}
            className="bg-blue-500 hover:bg-blue-600 py-4 px-6 rounded-md text-white mb-2"
          >
            Continuer
          </button>
          <p
            onClick={handleNextStep}
            className="cursor-pointer hover:underline text-gray-500 hover:text-gray-600"
          >
            Saisir plus tard
          </p>
        </div>
      </div>
    </div>
  );
}

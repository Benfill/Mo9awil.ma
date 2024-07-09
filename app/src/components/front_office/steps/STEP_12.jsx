import { Alert } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function STEP_12({ handleSelection, needs }) {
  const [alertColor, setAlertColor] = useState("info");
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  function handelAlert(type, text) {
    setAlertColor(type);
    setAlertText(text);
    setShowAlert(true);
  }
  function handleNeeds(value) {
    if (!needs.includes(value)) {
      handleSelection("needs", [...needs, value]);
    } else {
      handleSelection(
        "needs",
        needs.filter((item) => item !== value)
      );
    }
  }

  function handleLead() {
    setShowAlert(false);
    setLoading(true);
    const leadData = localStorage.getItem("userChoices");

    if (leadData) {

      fetch("http://127.0.0.1:8000/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: leadData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.errors) {
            setLoading(false);
            return handelAlert("failure", data.errors.managerEmail[0]);
          }
          console.log(data);
          setLoading(false);
          localStorage.setItem("lead", JSON.stringify(data.lead))
          handelAlert("success", "your pack is ready");
          setTimeout(() => {
            window.location.href = "/services/creation_sarl/packs";
          }, 1000);
        })
        .catch((e) => {
          setLoading(false);
          return handelAlert("failure", "Something is wrong");
        });
    } else {
      handelAlert("failure", "something's wrong");
    }
  }
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center">
        {showAlert && (
          <Alert
            color={alertColor}
            className="fixed top-20"
            onDismiss={() => setShowAlert(false)}
          >
            {alertText}
          </Alert>
        )}
      </div>
      <div className="pt-6 w-full flex justify-center">
        <h1 className="font-bold text-xl text-blue-950 w-2/6">
          Que recherchez-vous ?
        </h1>
      </div>
      <div className="w-full mt-16">
        <div className="flex justify-center w-full">
          <div className="my-2 w-1/3 flex justify-center flex-col gap-2">
            <div className="cursor-pointer hover:border-blue-400 flex items-center justify-start ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-2"
                type="checkbox"
                value=""
                onClick={() => {
                  handleNeeds(
                    "Créer ma société en déléguant toutes les démarches"
                  );
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={needs.includes(
                  "Créer ma société en déléguant toutes les démarches"
                )}
              />
              <label
                htmlFor="bordered-radio-2"
                className="w-full flex cursor-pointer py-4 ms-2 text-lg text-gray-500"
              >
                Créer ma société en déléguant toutes les démarches
              </label>
            </div>
            <div className="hover:border-blue-400 cursor-pointer flex items-center justify-start ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-1"
                type="checkbox"
                value=""
                onClick={() => {
                  handleNeeds("Seulement des statuts");
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={needs.includes("Seulement des statuts")}
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full flex cursor-pointer py-4 ms-2 text-lg text-gray-500"
              >
                Seulement des statuts
              </label>
            </div>

            <div className="hover:border-blue-400 cursor-pointer flex items-center justify-start ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-3"
                type="checkbox"
                value=""
                onClick={() => {
                  handleNeeds(
                    "Une solution tout en un (création, comptabilité, banque, etc..)"
                  );
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={needs.includes(
                  "Une solution tout en un (création, comptabilité, banque, etc..)"
                )}
              />
              <label
                htmlFor="bordered-radio-3"
                className="w-full flex cursor-pointer py-4 ms-2 text-lg text-gray-500"
              >
                Une solution tout en un (création, comptabilité, banque, etc..)
              </label>
            </div>
            <div className="hover:border-blue-400 cursor-pointer flex items-center justify-start ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-4"
                type="checkbox"
                value=""
                onClick={() => {
                  handleNeeds("Du conseil juridique et fiscal avec comptable");
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={needs.includes(
                  "Du conseil juridique et fiscal avec comptable"
                )}
              />
              <label
                htmlFor="bordered-radio-4"
                className="w-full flex cursor-pointer py-4 ms-2 text-lg text-gray-500"
              >
                Du conseil juridique et fiscal avec comptable
              </label>
            </div>
            <div className="hover:border-blue-400 cursor-pointer flex items-center justify-start ps-4 border border-gray-200 rounded">
              <input
                id="bordered-radio-5"
                type="checkbox"
                value=""
                onClick={() => {
                  handleNeeds("Je me renseigne");
                }}
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={needs.includes("Je me renseigne")}
              />
              <label
                htmlFor="bordered-radio-5"
                className="w-full flex cursor-pointer py-4 ms-2 text-lg text-gray-500"
              >
                Je me renseigne
              </label>
            </div>
          </div>
        </div>
        <div className="pt-12">
          <button
            onClick={handleLead}
            className="bg-blue-500 hover:bg-blue-600 py-4 px-6 rounded-md text-white mb-2"
          >
            <span className="flex gap-2 justify-center items-center">
              Continuer
              {loading && (
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

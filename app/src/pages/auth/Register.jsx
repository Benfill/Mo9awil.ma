import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import "../../style/App.css";
import { Alert } from "flowbite-react";
import PhoneInput from "react-phone-number-input/input";
import 'react-phone-number-input/style.css'

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertColor, setAlertColor] = useState("info");
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function handelAlert(type, text) {
    setAlertColor(type);
    setAlertText(text);
    setShowAlert(true);
  }

  function handleRegister() {
    setShowAlert(false);

    if (email.length === 0) {
      handelAlert("failure", "L'emai est obligatoire");
      return;
    } else if (password.length === 0) {
      handelAlert("failure", "Le mot de passe est obligatoire");

      return;
    }
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setLoading(false);
        if (responseData.status === "failed") {
          handelAlert("failure", "Le mot de passe est incorrect");
          return;
        }

        if (responseData.errors) {
          handelAlert("failure", "L'adresse e-mail sélectionnée est invalide.");
          return;
        }
        const user = responseData.data.user;
        localStorage.setItem("token", responseData.data.token);
        localStorage.setItem("user", JSON.stringify(responseData.data.user));
        handelAlert("success", "Vous êtes connecté avec succès.");

        setTimeout(() => {
          window.location.href = "/app";
        }, 1000);
      })
      .catch((error) => {
        setLoading(false);
        handelAlert("failure", "Quelque chose ne va pas, veuillez réessayer");
        console.error("Error:", error);
      });
  }

  return (
    <main className="h-full w-full flex flex-col items-center gap-6 py-[9rem]">
      {showAlert && (
        <Alert
          color={alertColor}
          className="fixed top-20"
          onDismiss={() => setShowAlert(false)}
        >
          {alertText}
        </Alert>
      )}
      <form className="w-2/6 border pb-6 px-12">
        <div className="py-10 flex flex-col gap-3">
          <>
            <h1 className="text-center text-blue-950 font-bold text-2xl">
              Connexion
            </h1>
            <p className="text-center">
              Nous sommes ravis de vous accueillir parmi nous. Ensemble,
              réalisons de grandes choses!
            </p>
          </>
        </div>
        <div className="mb-5 flex flex-col items-start">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nom Complet *
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={name}
            onChange={(e) => {
              setShowAlert(false);
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-5 flex flex-col items-start">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={email}
            onChange={(e) => {
              setShowAlert(false);
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5 flex flex-col items-start">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Telephone <span className="text-[12px]">(facultatif)</span>
          </label>

          <PhoneInput
            placeholder="Entrez votre numéro de téléphone"
            value={phone}
            onChange={setPhone}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

          />
        </div>
        <div className="mb-5 flex flex-col items-start">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password *
          </label>
          <input
            type="password"
            autoComplete="true"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={password}
            onChange={(e) => {
              setShowAlert(false);
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-7">
          <>
            <button
              type="button"
              onClick={handleRegister}
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Créer un compte
            </button>

            <Link to="/register">
              <button
                type="button"
                className="text-blue-900 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-gray-200 hover:bg-gray-200"
              >
                Se connecter
              </button>
            </Link>
          </>
        </div>
      </form>

      {loading && <Loading />}
    </main>
  );
};

export default Register;

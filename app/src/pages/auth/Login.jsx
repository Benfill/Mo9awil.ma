import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import Loading from "../../components/Loading";
import "../../style/App.css";
import { Alert } from "flowbite-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authStep, setAuthStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [alertColor, setAlertColor] = useState("info");
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  function handelAlert(type, text) {
    setAlertColor(type);
    setAlertText(text);
    setShowAlert(true);
  }

  function handleLogin() {
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
        // console.log(user.roles[0].role_name);
        // if (user.roles[0].role_name === "admin") {
        //   localStorage.clear();
        //   window.location.href = "http://localhost:3000/";
        // }

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

  function handleFirstLogin() {
    window.location.href = '/reset';
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
      <div className="justify-center flex lg:w-[30%] ">
        {authStep !== 1 && (
          <button
            onClick={() => {
              setAuthStep(1);
            }}
            className="flex items-center justify-start gap-2 w-full"
          >
            <div className="w-3 text-gray-500">
              <svg
                className="text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>arrow-left-1</title>
                <path
                  style={{ fill: "currentColor" }}
                  d="M4.5,12a2.3,2.3,0,0,1,.78-1.729L16.432.46a1.847,1.847,0,0,1,2.439,2.773L9.119,11.812a.25.25,0,0,0,0,.376l9.752,8.579a1.847,1.847,0,1,1-2.439,2.773L5.284,13.732A2.31,2.31,0,0,1,4.5,12Z"
                ></path>
              </svg>
            </div>
            <p className="text-gray-405 text-start">Retour</p>
          </button>
        )}
      </div>
      <form className="w-2/6 border pb-6 px-12">
        <div className="py-10 flex flex-col gap-3">
          {authStep !== 3 && (
            <>
              <h1 className="text-center text-blue-950 font-bold text-2xl">
                Connexion
              </h1>
              <p className="text-center">
                Indiquez votre adresse email et votre mot de passe pour vous
                connecter
              </p>
            </>
          )}

          {authStep === 3 && (
            <>
              <h1 className="text-center text-blue-950 font-bold text-2xl">
                Mot de passe oublié ?
              </h1>
              <p className="text-center">
                Veuillez renseigner votre adresse email pour réinitialiser votre
                mot de passe
              </p>
            </>
          )}
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
        {authStep === 1 && (
          <>
            <div className="mb-5 flex flex-col items-start">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={password}
                onChange={(e) => {
                  setShowAlert(false);
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex items-end w-full mb-5">
              <Link to="/reset">
                <button
                  type="button"
                  className="ms-2 text-sm font-medium text-blue-900 hover:text-blue-950"
                >
                  Mot de passe oublié?
                </button>
              </Link>
            </div>
          </>
        )}

        <div className="flex flex-col gap-7">
          {authStep === 2 && (
            <button
              type="button"
              onClick={handleFirstLogin}
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Valider
            </button>
          )}
          {authStep === 1 && (
            <>
              <button
                type="button"
                onClick={handleLogin}
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Se connecter
              </button>

              <Link to="/reset">
              <button
                type="button"
                className="text-blue-900 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-gray-100"
              >
                Première Connexion
              </button>
              </Link>

            </>
          )}
        </div>
      </form>

      {loading && <Loading />}
    </main>
  );
}

import { Alert } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OrderConfirmed() {
  const userInfo = JSON.parse(localStorage.getItem("paymentChoices"));
  if (!userInfo) window.location.href = "/Login";
  const [email, setEmail] = useState(userInfo.userInfos.email);
  const [codeInput, setCodeInput] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [emailVerified, setEmailVerified] = useState(false);
  const [error, setError] = useState("");
  const [showLoginBtn, SetshowLoginBtn] = useState(false);
  const [step, setStep] = useState(1);
  const [alertColor, setAlertColor] = useState("info");
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  function handelAlert(type, text) {
    setAlertColor(type);
    setAlertText(text);
    setShowAlert(true);
  }

  function handleInput(value) {
    setCodeInput(value);
  }

  function handleEmail(value) {
    setEmail(value);
  }

  useEffect(() => {
    if (step === 1) {
      setShowEmailInput(true);
      setEmailVerified(false);
      setError("");
      SetshowLoginBtn(false);
    }
  }, [step]);

  function handleCodeBtn() {
    if (showEmailInput) {
      if (email.length === 0)
        return "opacity-0 transition-opacity duration-500";
      else return "opacity-100 transition-opacity duration-500";
    } else {
      if (codeInput.length === 0)
        return "opacity-0 transition-opacity duration-500";
      else return "opacity-100 transition-opacity duration-500";
    }
  }

  function handleEmailSubmit() {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/emailVerification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.errors) {
          console.log(data.errors.email[0]);
          if (data.errors.email[0] === "The email has already been taken.") {
            SetshowLoginBtn(true);
            setError(
              "Vous ne pouvez pas accéder avec cet e-mail car un compte est déjà associé. Si vous en êtes le propriétaire, veuillez vous connecter."
            );
          }
          return handelAlert("failure", data.errors.email[0]);
        }
        setStep(2);
        setShowEmailInput(false);
        handelAlert("success", "your code is ready");
        console.log(data);
      })
      .catch((e) => {
        setLoading(false);
        return handelAlert("failure", "Something is wrong");
      });
  }

  function handleCodeValidation() {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/validEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: codeInput, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        if (data.status === "error") {
          setError("Code est incorrect");
          return handelAlert("failure", data.status);
        }
        setStep(3);
        setEmailVerified(true);
      })
      .catch((e) => {
        setLoading(false);
        return handelAlert("failure", "Something is wrong");
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  }, [showAlert]);

  return (
    <section className="py-24 relative w-full">
      {" "}
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
      <div className="flex justify-center w-full flex-col items-center gap-2 pt-8">
        <div className="text-gray-500 flex items-center justify-start w-1/3">
          {step !== 1 && step !== 3 && (
            <button
              onClick={() => setStep(1)}
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
      </div>
      <div className="flex justify-center py-6">
        <p className="text-6xl">🎉</p>
      </div>
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h1 className="font-manrope font-bold text-4xl leading-10 text-blue-950 text-center">
          Paiement effectué avec succès
        </h1>
        <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
          Merci d'avoir effectué Votre achat. Vous pouvez continue sur votre
          process
        </p>

        <div className="pb-6 flex flex-col gap-6">
          <div>
            <Link to="/app/proccess">
              <button className="bg-blue-500 text-white py-2 rounded-md px-12">
                Continuer
              </button>
            </Link>
          </div>
          <p className="text-gray-500">
            Pour tout problème, n'hésitez pas à appeler au 0537******.
          </p>
        </div>

        {/* {!emailVerified && (
          <>
            <div className="pb-6 flex flex-col gap-6">
              {showEmailInput && (
                <h3 className="font-bold">
                  Entrez l'email que vous avez fourni précédemment pour
                  vérification.
                </h3>
              )}
              {!showEmailInput && (
                <h3 className="font-bold">
                  Entrez le code que vous avez reçu par e-mail pour
                  vérification.
                </h3>
              )}
              <p className="text-gray-500">
                Pour tout problème, n'hésitez pas à appeler au 0537******.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-[50%] flex justify-between border bg-white items-center">
                {!showEmailInput && (
                  <>
                    <i className="fa-solid fa-lock text-blue-500 text-lg pl-2"></i>

                    <input
                      onChange={(e) => {
                        handleInput(e.target.value);
                        setError("");
                      }}
                      type="text"
                      value={codeInput}
                      className="w-[80%] border-none focus:ring-0 placeholder:text-[12px] placeholder:font-medium placeholder:text-gray-400"
                      placeholder="Saisissez le code"
                    />
                    <div className={handleCodeBtn()}>
                      <button
                        onClick={handleCodeValidation}
                        className="bg-blue-500 self text-white"
                      >
                        <span className="text-3xl px-6">&rarr;</span>
                      </button>
                    </div>
                  </>
                )}

                {showEmailInput && (
                  <>
                    <i class="fa-regular fa-envelope text-blue-500 text-lg pl-2"></i>
                    <input
                      onChange={(e) => {
                        handleEmail(e.target.value);
                        SetshowLoginBtn();
                        setError("");
                      }}
                      type="text"
                      value={email}
                      className="w-[80%] border-none focus:ring-0 placeholder:text-[12px] placeholder:font-medium placeholder:text-gray-400"
                      placeholder="Saisissez votre email"
                      required
                    />
                    <div className={handleCodeBtn()}>
                      <button
                        onClick={handleEmailSubmit}
                        className="bg-blue-500 hover:bg-blue-600 py-4 px-6 rounded-md text-white"
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
                  </>
                )}
              </div>
            </div>
          </>
        )}

        <div>
          <p className="text-red-500 font-medium py-6">{error}</p>
        </div>

        {emailVerified && (
          <div className="pb-6 flex flex-col gap-6">
            <h3 className="font-bold text-green-500 text-xl">
              Votre code est correct. Vous pouvez maintenant vous connecter.
              <span className="text-gray-800 text-lg">
                {" "}
                (Veuillez choisir l'option Première Connexion)
              </span>
            </h3>
            <div>
              <Link to="/login">
                <button className="bg-blue-500 text-white py-2 rounded-md px-12">
                  Login
                </button>
              </Link>
            </div>
            <p className="text-gray-500">
              Pour tout problème, n'hésitez pas à appeler au 0537******.
            </p>
          </div>
        )}
        {showLoginBtn && (
          <div className="pb-6 flex flex-col gap-6">
            <div>
              <Link to="/login">
                <button className="bg-blue-500 text-white py-2 rounded-md px-12">
                  Login
                </button>
              </Link>
            </div>
            <p className="text-gray-500">
              S'il vous plaît, si vous n'êtes pas le propriétaire, veuillez
              changer l'e-mail.
            </p>
          </div>
        )} */}
      </div>
    </section>
  );
}

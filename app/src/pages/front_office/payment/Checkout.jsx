import { useEffect, useLayoutEffect, useState } from "react";
import "./style.css";
import { initializeYCPay, executePayment } from "../../../utils/YCPayService";
import { hasAccessToCheckout } from "../../../utils/accessRestriction";
import { Alert } from "flowbite-react";

export default function Checkout() {
  const [showInput, setShowInput] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [promoInput, setPromoInput] = useState("");
  let order = JSON.parse(localStorage.getItem("paymentChoices"));
  const lead = JSON.parse(localStorage.getItem("userChoices"));
  const [promoPercentage, setPromoPercentage] = useState(0);
  const [total, setTotal] = useState(0);
  const [promoCodeVerified, setPromoCodeVerified] = useState(false);
  const [alertColor, setAlertColor] = useState("info");
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [priceColor, setPriceColor] = useState("black");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  let noPromoTotal = 0;
  const adminFees = 2469;
  const [approveUrl, setApproveUrl] = useState("https://www.sandbox.paypal.com/signin");

  function handelAlert(type, text) {
    setAlertColor(type);
    setAlertText(text);
    setShowAlert(true);
  }

  if (!order || !lead) {
    window.location.href = "/";
  } else {
    noPromoTotal = order.total;
  }

  function handleShowingInput() {
    setShowInput(true);
  }

  function handleShowingForm() {
    setLoading2(true);
    const leadData = JSON.parse(localStorage.getItem("lead"));
    fetch("http://127.0.0.1:8000/api/order", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        order,
        lead: leadData,
      }), // Corrected JSON.stringify use
    })
      .then((response) => response.json()) // Corrected invocation
      .then((data) => {
        setLoading2(false);
        if (data.approveUrl) setApproveUrl(data.approveUrl);
        console.log(data);
        setShowForm(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading2(false);
      });
  }

  function handleInput(value) {
    setPromoInput(value);
  }

  function handlePromoBtn() {
    if (promoInput.length === 0)
      return "opacity-0 transition-opacity duration-500";
    else return "opacity-100 transition-opacity duration-500";
  }

  // useEffect(() => {
  //   if (showForm)
  //     initializeYCPay("pub_sandbox_0936050d-a5b6-44c7-91ec-c496d", true);

  //   return () => {
  //   };
  // }, [showForm]); // Ensure this runs only once when the component mounts

  const handlePayment = () => {
    window.location.href = approveUrl;
  };

  const successCallback = (response) => {
    // Your success callback code here
  };

  const errorCallback = (response) => {
    // Your error callback code here
  };

  function checkPromoCode() {
    setShowAlert(false);
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/checkPromoCode", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ promoCode: promoInput }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.status === "success") {
          handelAlert("success", "Votre code promo est valide");
          setPromoCodeVerified(true);
          setPriceColor("red-500");
          setPromoPercentage(data.promo.reduction_percentage);
          let actualTotal =
            order.total - order.total * (data.promo.reduction_percentage / 100);
          setTotal(actualTotal);
          order = {
            ...order,
            promoTotal: actualTotal,
            promoValid: true,
          };
          localStorage.setItem("paymentChoices", JSON.stringify(order));
        } else handelAlert("failure", "Votre code promo est incorrect");
      })
      .catch((error) => {
        setLoading(false);
        handelAlert("failure", error);
      });
  }

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }, [showAlert]);
  return (
    <main
      className="h-screen flex justify-center items-center main"
      id="paymentProcess"
    >
      {showAlert && (
        <Alert
          color={alertColor}
          className="fixed top-20"
          onDismiss={() => setShowAlert(false)}
        >
          {alertText}
        </Alert>
      )}
      <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 w-[416px]">
        <div className="flex flex-col justify-center items-center gap-2 py-6 border-b-2">
          <h1 className="font-bold text-blue-950 text-3xl font-Poppins">
            Mo9awil<span className="text-orange-500">.</span>ma
          </h1>
          <p className="text-blue-500 font-bold">Votre commande</p>
        </div>

        {!showForm && (
          <div className="h-[416px] p-6 flex flex-col justify-between bg-slate-100">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="text-blue-500 text-xl h-full">•</span>
                  <p className="text-md text-gray-500">
                    Création {lead.structure} - Pack {order.pack.pack_name}
                  </p>
                </div>
                <p>{order.price.toFixed(2)} MAD</p>
              </div>
              {order.payTotal && (
                <div className="flex justify-between items-center ">
                  <div className="flex items-center gap-1">
                    <span className="text-blue-500 text-lg h-full">•</span>
                    <p className="text-sm text-gray-500">
                      Frais Administratifs
                    </p>
                  </div>
                  <p className="text-sm">{adminFees.toFixed(2)} MAD</p>
                </div>
              )}
              <div className="flex flex-col items-end justify-center">
                <div className="border-b flex gap-6 w-[70%] justify-end pb-3">
                  <p className="text-gray-400 text-[13px]">TVA @ 20%</p>
                  <p>{order.fees.toFixed(2)} MAD</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3
                    className={`font-bold text-lg  text-right text-${priceColor}`}
                  >
                    {noPromoTotal.toFixed(2)}
                    {promoPercentage === 0 ? (
                      "MAD"
                    ) : (
                      <span className="text-sm"> - {promoPercentage}% </span>
                    )}
                  </h3>
                  {promoCodeVerified && (
                    <h3
                      className={`font-bold text-lg  text-right text-green-500`}
                    >
                      {total.toFixed(2)} MAD
                    </h3>
                  )}
                </div>
              </div>
              <div>
                {!showInput && (
                  <p
                    onClick={handleShowingInput}
                    className="text-blue-600 cursor-pointer text-[12px] px-4"
                  >
                    Ajouter un code de réduction
                  </p>
                )}

                {showInput && (
                  <div className="flex justify-center">
                    <div className="w-[90%] flex justify-between bg-white items-center">
                      <i className="fas fa-tag text-blue-500 text-lg pl-2"></i>
                      <input
                        onChange={(e) => {
                          handleInput(e.target.value);
                          setShowAlert(false);
                        }}
                        type="text"
                        value={promoInput}
                        className="w-[80%] border-none focus:ring-0 placeholder:text-[12px] placeholder:font-medium placeholder:text-gray-400"
                        placeholder="Saisissez le code de réduction"
                      />
                      <div className={handlePromoBtn()}>
                        {!promoCodeVerified &&
                          (!loading ? (
                            <button
                              onClick={checkPromoCode}
                              className="bg-blue-500 self text-white"
                            >
                              <span className="text-3xl px-6">&rarr;</span>
                            </button>
                          ) : (
                            ""
                          ))}
                        {loading && (
                          <button className="bg-blue-500 cursor-not-allowed self px-8 py-2 text-white">
                            <svg
                              aria-hidden="true"
                              class="w-5 h-5 text-gray-200 animate-spin fill-blue-600"
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
                          </button>
                        )}
                        {promoCodeVerified && !loading && (
                          <button
                            onClick={checkPromoCode}
                            className="bg-green-500 cursor-default self text-white"
                          >
                            <span className="text-3xl px-6">✔</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleShowingForm}
                className="bg-blue-500 text-white flex font-Poppins items-center justify-center gap-2 font-bold w-[70%] py-2"
              >
                Procéder au règlement
                {(loading2 && (
                  <span className="text-lg">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-200 animate-spin fill-blue-600"
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
                  </span>
                )) || <span className="text-lg">&rarr;</span>}
              </button>
            </div>
          </div>
        )}
        {showForm && (
          <div>
            <div className="h-full flex pb-6 flex-col justify-between bg-slate-100">
              {/* <div
                id="payment-container"
                className="h-full shadow-none"
                style={{ borderRadius: "0px!important" }}
              ></div> */}
              <div className="flex justify-center pt-2">
                <a href={approveUrl} className="w-[70%]">
                  <button className="bg-blue-500 rounded-lg text-white font-Poppins font-bold w-full py-2">
                    Pay With Paypal
                  </button>
                </a>
              </div>
              {/* <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-blue-500 text-xl h-full">•</span>
                    <p className="text-md text-gray-500">
                      Création SARL - Pack Standard
                    </p>
                  </div>
                  <p>99,00 €</p>
                </div>
                <div className="flex flex-col items-end justify-center">
                  <div className="border-b flex gap-6 w-[70%] justify-end pb-3">
                    <p className="text-gray-400 text-[13px]">TVA @ 20%</p>
                    <p>19,80 €</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-right">118,80 €</h3>
                  </div>
                </div>
                <div>
                  {!showInput && (
                    <p
                      onClick={handleShowingInput}
                      className="text-blue-600 cursor-pointer text-[12px] px-4"
                    >
                      Ajouter un code de réduction
                    </p>
                  )}
  
                  {showInput && (
                    <div className="flex justify-center">
                      <div className="w-[90%] flex justify-between bg-white items-center">
                        <i className="fas fa-tag text-blue-500 text-lg pl-2"></i>
                        <input
                          onChange={(e) => {
                            handleInput(e.target.value);
                          }}
                          type="text"
                          value={promoInput}
                          className="w-[80%] border-none focus:ring-0 placeholder:text-[12px] placeholder:font-medium placeholder:text-gray-400"
                          placeholder="Saisissez le code de réduction"
                        />
                        <div className={handlePromoBtn()}>
                          <button className="bg-blue-500 self text-white">
                            <span className="text-3xl px-6">&rarr;</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-blue-500 text-white  font-Poppins font-bold w-[70%] py-2">
                  Procéder au règlement <span className="text-lg">&rarr;</span>
                </button>
              </div> */}
            </div>
            <div id="error-container"></div>
          </div>
        )}
      </div>
    </main>
  );
}

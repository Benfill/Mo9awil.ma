import { Tooltip } from "react-tippy";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


export default function Payment(props) {
  const navigate = useNavigate();

  const packPrice = parseFloat(props.price);
  const ADMIN_FEES = 2469;
  const TAX_RATE = 0.2;

  const initialFees = TAX_RATE * packPrice;
  const initialTotal = packPrice + initialFees;
  const initialTotalHt = packPrice;

  const [fees, setFees] = useState(initialFees);
  const [total, setTotal] = useState(initialTotal);
  const [totalHt, setTotalHt] = useState(initialTotalHt);

  function handlePaymentMethod(method) {
    let feesValue, totalHtValue, totalValue;

    if (method === "total") {
      feesValue = TAX_RATE * (packPrice + ADMIN_FEES);
      totalHtValue = packPrice + ADMIN_FEES;
      totalValue = totalHtValue + feesValue;
    } else {
      feesValue = initialFees;
      totalHtValue = initialTotalHt;
      totalValue = packPrice + feesValue;
    }

    setFees(feesValue);
    setTotalHt(totalHtValue);
    setTotal(totalValue);

    props.handleSelection("payTotal", method === "total");
  }

  useEffect(() => {
    props.handleSelection("total", total);
    props.handleSelection("fees", fees);
  }, [fees, total]);

  useEffect(() => {
    props.handleSelection("choicesCompleted", true);
  }, []);

  function checkLogin() {
    const token = Cookies.get("token");
    if (!token) {
      localStorage.setItem('direction', "/services/creation_sarl/checkout");
      navigate("/login");
    } else navigate("/services/creation_sarl/checkout");
    return;
  }

  return (
    <div className="flex justify-center bg-white">
      <div className="w-full px-44 max-sm:px-2 max-md:px-6 max-lg:px-12 flex flex-col">
        <div className="flex max-sm:flex-wrap max-lg:flex-wrap justify-evenly max-sm:justify-center gap-7">
          {/* LEFT UPPER SIDE */}
          <div className="w-55 md:w-full lg:w-full flex flex-col">
            <div className="border-2 rounded-lg border-gray-200 p-6 px-8 flex flex-col gap-8">
              <div>
                <h1 className="text-blue-950 font-extrabold text-2xl">
                  Récapitulatif de votre commande
                </h1>
              </div>
              <div className="flex justify-between">
                <h3 className="text-blue-950 font-extrabold text-xl">
                  Création {props.pack.pack_name}
                </h3>
                <p className="text-red-400 font-extrabold text-xl">
                  {packPrice.toFixed(2)} MAD
                </p>
              </div>
              <ol className="flex flex-col gap-4">
                {props.pack.pack_features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex border-b pb-2 justify-between text-left text-blue-950 text-xl pl-2"
                  >
                    <div className="flex gap-2 w-90">
                      <span className="text-green-500 text-2xl">✔</span>
                      <span>{feature.feature}</span>
                    </div>
                    <div>
                      <Tooltip
                        title={feature.feature}
                        position="right"
                        trigger="mouseenter"
                        interactive
                      >
                        <img
                          src="https://assets-global.website-files.com/603544f36c95c822aaf84300/61124ad1b5a08dc8bd5d9ae0_Helper.svg"
                          alt="info"
                        />
                      </Tooltip>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="flex justify-between">
                <h3 className="text-blue-950 font-extrabold text-xl">
                  Frais Administratifs
                  <span className="text-white bg-blue-950 rounded-sm text-sm font-md flex items-center px-2">
                    OBLIGATOIRE
                  </span>
                </h3>
                <p className="text-red-400 font-extrabold text-xl">
                  {ADMIN_FEES.toFixed(2)} MAD
                </p>
              </div>
              <ol className="flex flex-col gap-6">
                <li className="border-b pb-2 flex justify-between font-medium text-blue-950 text-xl pl-2">
                  <div className="flex gap-2">
                    <span className="text-green-500 text-2xl">✔</span>
                    <span>Frais de greffe obligatoires</span>
                  </div>
                  <div>
                    <Tooltip
                      title="Frais indépendants de LegalPlace, reversés au Greffe"
                      position="right"
                      trigger="mouseenter"
                      interactive
                    >
                      <img
                        src="https://assets-global.website-files.com/603544f36c95c822aaf84300/61124ad1b5a08dc8bd5d9ae0_Helper.svg"
                        alt="info"
                      />
                    </Tooltip>
                  </div>
                </li>
                <li className="pb-4 flex justify-between font-medium text-blue-950 text-xl pl-2">
                  <div className="flex gap-2">
                    <span className="text-green-500 text-2xl">✔</span>
                    <span>Frais d'annonce légale obligatoires</span>
                  </div>
                  <div>
                    <Tooltip
                      title="Frais indépendants de LegalPlace, reversés au journal d'annonces légales"
                      position="right"
                      trigger="mouseenter"
                      interactive
                    >
                      <img
                        src="https://assets-global.website-files.com/603544f36c95c822aaf84300/61124ad25fdaccb2d01b3fca_PaymentMastercard.svg"
                        alt=""
                      />
                    </Tooltip>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* RIGHT UPPER SIDE */}
          <div className="flex flex-col gap-4">
            <div className="border-2 rounded-lg border-gray-200 p-6 px-8">
              <div className="border-b pb-2 gap-3 flex flex-col">
                <div className="hover:border-blue-400 py-2 cursor-pointer flex flex-col justify-start px-3 border border-gray-200 rounded-xl">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <input
                        id="bordered-radio-1"
                        type="radio"
                        onChange={() => {
                          handlePaymentMethod("half");
                        }}
                        defaultChecked={!props.payTotal}
                        name="payment-option"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="bordered-radio-1"
                        className="w-full text-left cursor-pointer ms-2 text-lg text-blue-950"
                      >
                        Payer aujourd’hui seulement
                      </label>
                    </div>
                    <label
                      htmlFor="bordered-radio-1"
                      className="cursor-pointer"
                    >
                      <h3 className="text-blue-950 flex justify-center">
                        <span className="font-black text-lg">
                          {packPrice.toFixed(2)} MAD
                        </span>{" "}
                        <span className="text-blue-800 text-sm font-sans">
                          HT
                        </span>
                      </h3>
                    </label>
                  </div>
                  <label
                    htmlFor="bordered-radio-1"
                    className="w-full flex items-start flex-col cursor-pointer ms-2 text-xl text-gray-400"
                  >
                    <p className="text-sm text-left w-90%">
                      Vous réglez les frais administratifs obligatoires (+
                      {ADMIN_FEES.toFixed(2)} MAD) lorsque votre dossier est
                      validé (maximum 20 jours).
                    </p>
                  </label>
                </div>
                <div className="hover:border-blue-400 py-2 cursor-pointer flex flex-col justify-start px-3 border border-gray-200 rounded-xl">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <input
                        id="bordered-radio-2"
                        onChange={() => {
                          handlePaymentMethod("total");
                        }}
                        defaultChecked={props.payTotal}
                        type="radio"
                        name="payment-option"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="bordered-radio-2"
                        className="w-full text-left cursor-pointer ms-2 text-lg text-blue-950"
                      >
                        Payer la totalité
                      </label>
                    </div>
                    <label
                      htmlFor="bordered-radio-2"
                      className="cursor-pointer"
                    >
                      <h3 className="text-blue-950 flex justify-center">
                        <span className="font-black text-lg">
                          {(packPrice + ADMIN_FEES).toFixed(2)} MAD
                        </span>{" "}
                        <span className="text-blue-800 text-sm font-sans">
                          HT
                        </span>
                      </h3>
                    </label>
                  </div>
                </div>
              </div>

              {/* Price section */}
              <div className="py-4">
                <div className="flex justify-between text-md">
                  <p className="text-blue-900 text-md">Montant HT</p>
                  <p className="text-blue-900 text-md">
                    {totalHt.toFixed(2)} MAD
                  </p>
                </div>
                <div className="flex justify-between text-md">
                  <p className="text-blue-900 text-md">TVA déductible</p>
                  <p className="text-blue-900 text-md">{fees.toFixed(2)} MAD</p>
                </div>
                <div className="flex justify-between text-md">
                  <p className="text-blue-950 font-black text-md">TOTAL TTC</p>
                  <p className="text-blue-900 text-md">
                    {total.toFixed(2)} MAD
                  </p>
                </div>
              </div>

              <div className="py-4 flex flex-col gap-4">
                <button
                  onClick={checkLogin}
                  className="bg-blue-500 text-white text-lg font-lg w-full py-3 rounded-md"
                >
                  Payer en toute sécurité
                </button>

                <Link to="/services/creation_sarl/checkout">
                  <p className="text-md text-blue-500">
                    Ajouter un code de réduction
                  </p>
                </Link>
                <div className="flex justify-center gap-3">
                  <Link to="/services/creation_sarl/checkout">
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/61124ad1da6c0e40ecb86ee3_PaymentCb.svg"
                      alt="CB"
                    />
                  </Link>
                  <Link to="/services/creation_sarl/checkout">
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/61124ad25fdaccb2d01b3fca_PaymentVisa.svg"
                      alt="Visa"
                    />
                  </Link>
                  <Link to="/services/creation_sarl/checkout">
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/61124ad2d4e8fb5a43211677_PaymentMastercard.svg"
                      alt="Mastercard"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-2 rounded-lg border-gray-200 p-6 px-8 flex flex-col gap-12">
              <div className="flex justify-center">
                <h3 className="text-blue-950 font-extrabold text-2xl">
                  Les étapes pour créer votre entreprise en ligne
                </h3>
              </div>
              {/* STEPS */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/64fb3e8509f1d7a380ab2149_Ellipse%2010.svg"
                      alt="Step 1"
                    />
                  </div>
                  <p className="text-blue-950 text-lg">
                    Choisissez votre pack et vos options
                  </p>
                </div>
                <div className="py-2 border-l border-blue-950 mx-2"></div>
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/64fb3e85d40dc0f450a5d667_Ellipse%2011.svg"
                      alt="Step 2"
                    />
                  </div>
                  <p className="text-blue-950 text-lg">Commandez en ligne</p>
                </div>
                <div className="py-2 border-l border-blue-950 mx-2"></div>
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/64fb3e85b2c102bb9e0ee02d_Ellipse%208.svg"
                      alt="Step 3"
                    />
                  </div>
                  <p class="text-blue-950 text-lg">
                    Finalisez votre dossier juridique
                  </p>
                </div>
                <div className="py-2 border-l border-blue-950 mx-2"></div>
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/64fb3e85b2c102bb9e0ee02d_Ellipse%208.svg"
                      alt="Step 4"
                    />
                  </div>
                  <p class="text-blue-950 text-lg">Ajoutez vos justificatifs</p>
                </div>
                <div className="py-2 border-l border-blue-950 mx-2"></div>
                <div class="flex items-center gap-4">
                  <div>
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/64fb3e85b2c102bb9e0ee02d_Ellipse%208.svg"
                      alt="Step 5"
                    />
                  </div>
                  <p class="text-blue-950 text-lg">
                    Un formaliste traite votre dossier
                  </p>
                </div>
                <div className="py-2 border-l border-blue-950 mx-2"></div>
                <div class="flex items-center gap-4">
                  <div>
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/64fb3e85b2c102bb9e0ee02d_Ellipse%208.svg"
                      alt="Step 6"
                    />
                  </div>
                  <p class="text-blue-950 text-lg">
                    Votre dossier est envoyé au Greffe
                  </p>
                </div>
                <div class="py-2 border-l border-blue-950 mx-2"></div>
                <div class="flex items-center gap-4">
                  <div>
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/64fb3e85b2c102bb9e0ee02d_Ellipse%208.svg"
                      alt="Step 7"
                    />
                  </div>
                  <p class="text-blue-950 text-lg">Vous recevez votre KBIS</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-black text-lg">Satisfaction Garantie</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

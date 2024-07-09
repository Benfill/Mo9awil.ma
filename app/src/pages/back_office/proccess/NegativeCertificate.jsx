import { Tooltip } from "flowbite-react";
import React, { useState } from "react";

export default function NegativeCertificate() {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    cardId: "",
    address: "",
    dateOfBirth: "",
    firstName: "",
    secondName: "",
    thirdName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: value ? "" : `obligatoire`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `obligatoire`;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      setShowForm(false);
      console.log("Form submitted:", formData);
    }
  };

  return (
    <main className={`flex flex-col pt-6 items-center ${!showForm ? 'h-screen' : ''}`}>
      <div className="flex flex-col px-6 gap-6">
        <h1 className="text-blue-950 font-bold text-2xl">
          Voici le processus de création de votre entreprise. Veuillez compléter
          les étapes pour débuter votre parcours entrepreneurial.
        </h1>

        <div className="flex justify-center">
          <ol className="flex items-center justify-center w-full mb-4 sm:mb-5">
            <li
              className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${
                showForm ? "after:border-gray-700" : "after:border-blue-800"
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700`}
              >
                <Tooltip
                  content="La première étape consiste à demander votre certificat négatif"
                  placement="right"
                >
                  <svg
                    className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </Tooltip>
              </div>
            </li>
            <li
              className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-gray-700`}
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <i class="fa-solid fa-check w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"></i>
              </div>
            </li>
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-gray-700">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <i class="fa-solid fa-file-import w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"></i>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg
                  className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              </div>
            </li>
          </ol>
        </div>

        <div className="flex justify-center">
          <h2 className="text-blue-950 font-bold w-2/3">
            La première étape consiste à demander votre certificat négatif. Cela
            prendra au maximum 2 jours ouvrables. Nous vous tiendrons informé à
            chaque étape du processus. Gardez votre énergie entrepreneuriale
            intacte, le début de votre aventure est imminent.
          </h2>
        </div>
        {showForm && (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">
                Informations de l'entreprise
              </h3>
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nom Complet Du Gerant
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nom complet tel qu'il apparaît sur la carte d'identité"
                  />
                  {errors.fullName && (
                    <span className="text-red-500">{errors.fullName}</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="cardId"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Identifiant de la carte
                  </label>
                  <input
                    type="text"
                    name="cardId"
                    id="cardId"
                    value={formData.cardId}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex: AB584025"
                  />
                  {errors.cardId && (
                    <span className="text-red-500">{errors.cardId}</span>
                  )}
                </div>
              </div>

              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div class="mb-5">
                  <label
                    for="large-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Veuillez entrer votre adresse
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Entrez votre adresse comme sur votre carte d'identité"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.address && (
                    <span className="text-red-500">{errors.address}</span>
                  )}
                </div>

                <div>
                  <label
                    for="birthDate"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Sélectionnez votre date de naissance (doit être exacte).
                  </label>
                  <input
                    type="date"
                    lang="fr"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    placeholder="mm/jj/aaaa"
                    id="birthDate"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.dateOfBirth && (
                    <span className="text-red-500">{errors.dateOfBirth}</span>
                  )}
                </div>

                <div>
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Sélectionnez votre ville
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Sélectionnez votre ville</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div>
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Sélectionnez l'activité de l'entreprise
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choisissez une activité</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-green-600">
                  Pour obtenir un certificat négatif et éviter le rejet, il est
                  préférable d'entrer trois noms différents pour votre
                  entreprise
                </h3>
              </div>
              <div className="flex justify-center gap-6 w-full">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="firstName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Premier nom
                  </label>
                  {errors.firstName && (
                    <span className="text-red-500">{errors.firstName}</span>
                  )}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="secondName"
                    id="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="secondName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Deuxième nom
                  </label>
                  {errors.secondName && (
                    <span className="text-red-500">{errors.secondName}</span>
                  )}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="thirdName"
                    id="thirdName"
                    value={formData.thirdName}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="thirdName"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Troisième nom
                  </label>
                  {errors.thirdName && (
                    <span className="text-red-500">{errors.thirdName}</span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Demander votre certificat négatif
              </button>
            </form>
          </>
        )}

        {!showForm && (
          <div>
            <div className="flex justify-center py-6">
              <p className="text-6xl">🎉</p>
            </div>
            <h3 className="text-green-600 text-lg">
              Félicitations, vous avez franchi la première étape. Nous vous
              informerons dès réception du certificat pour finaliser le
              processus.
            </h3>
          </div>
        )}
      </div>
    </main>
  );
}

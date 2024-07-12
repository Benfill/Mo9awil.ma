import React, { useEffect, useState } from "react";
import GET from "../../../utils/GET";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { UploadInput } from "../../UploadInput";

export default function NegativeCertificate({ handleStep }) {
  const [cities, setCities] = useState(undefined);
  const [activities, setActivities] = useState(undefined);
  const [formData, setFormData] = useState({
    activity: "",
    city: "",
    firstName: "",
    secondName: "",
    thirdName: "",
    signing: false,
    domiciliation: true
  });
  const animatedComponents = makeAnimated();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: value ? "" : "obligatoire",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (key !== "signing" && !formData[key]) {
        newErrors[key] = `obligatoire`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleStep("CertificateSubmited");
      console.log("Form submitted:", formData);
    }
  };

  async function getCitiesNActivities() {
    const r = await GET("companies/getCitiesNActivities");
    setActivities(r.activities);
    setCities(r.cities);
  }

  useEffect(() => {
    getCitiesNActivities();
  }, []);

  function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

  const activityOptions = activities
    ? activities.map((a) => ({
        value: a.id,
        label: capitalize(a.activity_name.toLowerCase()),
      }))
    : [];

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-4xl mx-auto p-4">
        <h3 className="mb-4 text-lg md:text-xl font-medium leading-none text-gray-900 dark:text-white">
          Informations de l'entreprise
        </h3>
        
        <div className="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <label
              htmlFor="activity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sélectionnez la Forme Juridique du Société
            </label>
            <select
              value={formData.activity}
              onChange={handleChange}
              name="activity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled selected>
                Sélectionnez une forme
              </option>
              <option value="SARL">SARL - Société à responsabilité limitée</option>
              <option value="SARL AU">SARL AU - Société à Responsabilité Limitée à Associé Unique</option>
              <option value="SA">SA - Société Anonyme</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sélectionnez votre ville
            </label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled selected>
                Sélectionnez votre ville
              </option>
              {cities && cities.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.city_name}
                </option>
              ))}
            </select>
          </div>
        </div>
    
        <div className="mb-4">
          <label
            htmlFor="activity"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sélectionnez l'activité de l'entreprise
          </label>
          <Select
            isMulti
            name="activity"
            placeholder="Sélectionnez votre activité"
            options={activityOptions}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg  dark:bg-gray-700 dark:text-white "
            classNamePrefix="select"
            components={animatedComponents}
          />
        </div>
    
        <div className="mb-4">
          <h3 className="text-sm font-medium text-green-600">
            Pour obtenir un certificat négatif et éviter le rejet, il est
            préférable d'entrer trois noms différents pour votre entreprise
          </h3>
        </div>
    
        <div className="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-3">
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
              <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>
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
              <span className="text-red-500 text-xs mt-1">{errors.secondName}</span>
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
              <span className="text-red-500 text-xs mt-1">{errors.thirdName}</span>
            )}
          </div>
        </div>
    
        {!formData.domiciliation && <div className="mb-4">
          <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contrat de siege social
              </label>
          <UploadInput h={"h-64"} />
        </div>}
    
        <div className="flex items-center gap-2 justify-center mb-4">
          <div>
            <input
              id="domiciliation"
              type="checkbox"
              name="domiciliation"
              checked={formData.domiciliation}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-blue-300 rounded border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="domiciliation"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Domicilation Avec Mo9awil.ma
            </label>
          </div>
          <div>
            <input
              id="signing"
              type="checkbox"
              name="signing"
              checked={formData.signing}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-blue-300 rounded border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="signing"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Gérants Conjoint Signataire
            </label>
          </div>
        </div>
    
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full sm:w-auto"
        >
          Demander votre certificat négatif
        </button>
      </form>
    );
}

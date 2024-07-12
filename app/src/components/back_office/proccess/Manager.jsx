import { Tooltip } from "flowbite-react";
import React, { useState } from "react";
import { UploadInput } from "../../UploadInput";

export const Manager = ({ handleStep }) => {
  const [managers, setManagers] = useState([
    {
      name: "",
      cardId: "",
      address: "",
      birth: "",
      isAssociate: false,
      isManager: false,
      parts: 0,
      cardFile: undefined,
    },
  ]);
  const [errors, setErrors] = useState(Array(1).fill({}));

  const handleChange = (index, e) => {
    const { name, value, type, checked, files } = e.target;
    const updatedManagers = [...managers];
    
    if (type === "file") {
      updatedManagers[index] = {
        ...updatedManagers[index],
        [name]: files[0],
      };
    } else {
      updatedManagers[index] = {
        ...updatedManagers[index],
        [name]: type === "checkbox" ? checked : value,
      };
    }
    
    setManagers(updatedManagers);
  
    const updatedErrors = [...errors];
    updatedErrors[index] = {
      ...updatedErrors[index],
      [name]: type === "file" ? (files[0] ? "" : "obligatoire") : (value ? "" : "obligatoire"),
    };
    setErrors(updatedErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = managers.map((manager) => {
      let managerErrors = {};
      Object.keys(manager).forEach((key) => {
        if (
          !manager[key] &&
          key !== "parts" &&
          key !== "isAssociate" &&
          key !== "isManager"
        ) {
          managerErrors[key] = "obligatoire";
        }
      });
      if (manager.isAssociate && !manager.parts) {
        managerErrors.parts = "obligatoire pour un associé";
      }
      if (!manager.isAssociate && !manager.isManager) {
        managerErrors.role = "Veuillez sélectionner au moins un rôle";
      }
      return managerErrors;
    });

    const hasErrors = newErrors.some((error) => Object.keys(error).length > 0);

    if (hasErrors) {
      console.log(newErrors);
      setErrors(newErrors);
    } else {
      setErrors(Array(managers.length).fill({}));
      handleStep("NegativeCertificate");
      console.log("Form submitted:", managers);
    }
  };

  const addManager = () => {
    setManagers([
      ...managers,
      {
        name: "",
        cardId: "",
        address: "",
        birth: "",
        isAssociate: false,
        isManager: false,
        parts: 0,
        cardFile: undefined,
      },
    ]);
    setErrors([...errors, {}]);
  };

  const removeManager = (index) => {
    if (managers.length > 1) {
      const updatedManagers = managers.filter((_, i) => i !== index);
      const updatedErrors = errors.filter((_, i) => i !== index);
      setManagers(updatedManagers);
      setErrors(updatedErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">
        Informations des gérants et associés
      </h3>

      {managers.map((manager, index) => (
        <React.Fragment key={index}>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor={`name-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nom Complet
              </label>
              <input
                type="text"
                name="name"
                id={`name-${index}`}
                value={manager.name}
                onChange={(e) => handleChange(index, e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nom complet tel qu'il apparaît sur la carte d'identité"
              />
              {errors[index]?.name && (
                <span className="text-red-500">{errors[index].name}</span>
              )}
            </div>
            <div>
              <label
                htmlFor={`cardId-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Identifiant de la carte
              </label>
              <input
                type="text"
                name="cardId"
                id={`cardId-${index}`}
                value={manager.cardId}
                onChange={(e) => handleChange(index, e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ex: AB584025"
              />
              {errors[index].cardId && (
                <span className="text-red-500">{errors[index].cardId}</span>
              )}
            </div>
          </div>

          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div className="mb-5">
              <label
                htmlFor={`address-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Veuillez entrer votre adresse
              </label>
              <input
                type="text"
                id={`address-${index}`}
                name="address"
                value={manager.address}
                onChange={(e) => handleChange(index, e)}
                placeholder="Entrez votre adresse comme sur votre carte d'identité"
                className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors[index].address && (
                <span className="text-red-500">{errors[index].address}</span>
              )}
            </div>

            <div>
              <label
                htmlFor={`birthDate-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Sélectionnez votre date de naissance (doit être exacte).
              </label>
              <input
                type="date"
                lang="fr"
                name="birth"
                value={manager.birth}
                onChange={(e) => handleChange(index, e)}
                placeholder="mm/jj/aaaa"
                id={`birth-${index}`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors[index].birth && (
                <span className="text-red-500">{errors[index].birth}</span>
              )}
            </div>
          </div>

          <div className="mb-4 h-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Carte National Du Associé ou Gérant
            </label>
            <UploadInput
              name="cardFile"
              id={`cardFile-${index}`}
              formatAccepted={"image/*"}
              onChangeHandler={(e) => handleChange(index, e)}
            />
            {errors[index].cardFile && (
              <span className="text-red-500">{errors[index].cardFile}</span>
            )}
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="flex items-center mb-4 space-x-4">
              <div>
                <input
                  id={`isAssociate-${index}`}
                  type="checkbox"
                  name="isAssociate"
                  checked={manager.isAssociate}
                  onChange={(e) => handleChange(index, e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={`isAssocie-${index}`}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Associé
                </label>
              </div>
              <div>
                <input
                  id={`isManager-${index}`}
                  type="checkbox"
                  name="isManager"
                  checked={manager.isManager}
                  onChange={(e) => handleChange(index, e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={`isManager-${index}`}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Gérant
                </label>
              </div>
              {errors[index].role && (
                <span className="text-red-500">{errors[index].role}</span>
              )}
            </div>
            {manager.isAssociate && (
              <div className="mb-5">
                <label
                  htmlFor={`percentage-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Pourcentage de parts (%)
                </label>
                <input
                  type="number"
                  id={`percentage-${index}`}
                  name="percentage"
                  value={manager.parts}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Entrez le pourcentage de parts"
                  min="0"
                  max="100"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors[index].parts && (
                  <span className="text-red-500">{errors[index].parts}</span>
                )}
              </div>
            )}
          </div>

          {managers.length > 1 && (
            <div className="flex justify-center align-center">
              <Tooltip content="Supprimer cet Associe ou Gerant">
                <button
                  type="button"
                  onClick={() => removeManager(index)}
                  className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  -
                </button>
              </Tooltip>
            </div>
          )}
        </React.Fragment>
      ))}

      <div className="flex justify-center align-center">
        <Tooltip content="Ajouter un Associe ou Gerant">
          <button
            type="button"
            onClick={addManager}
            className="text-white bg-gray-600 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-800"
          >
            +
          </button>
        </Tooltip>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Passer a l'Etape Suivante
      </button>
    </form>
  );
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ steps, setStep, handleSelection, step }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (steps === 1) {
      setTitle("Choisissez votre pack");
      setDescription("Faites-vous accompagner et créez votre SARL en ligne");
    } else if (steps === 2) {
      setTitle("Domiciliation");
      setDescription(
        "Profitez de nos offres pour adapter votre création de société à vos besoins"
      );
    }
  }, [steps]);

  return (





    <div className="flex flex-col items-start max-sm:w-full max-sm:items-center max-md:w-full max-md:items-center">
      {(steps === 1 && (
        <Link to="/services/creation_sarl">
          <button className="flex items-center justify-start gap-2 w-full">
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
            <p className="text-gray-405">Retour</p>
          </button>
        </Link>
      )) || (
        <div>
          <button
            onClick={() => {
              handleSelection("step", step - 1);
              setStep((prevStep) => prevStep - 1);
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
            <p className="text-gray-405">Retour</p>
          </button>
        </div>
      )}

      <h1 className="text-3xl font-bold  text-blue-950 max-sm:w-full max-sm:text-center">{title}</h1>
      <p className="text-gray-500 max-sm:w-full max-sm:text-center max-md:w-full max-md:text-center">{description}</p>
    </div>
  );
}

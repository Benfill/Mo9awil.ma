// Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/header.css";
import "../../style/App.css";
import { fetchData } from "../../utils/api";
import { setGlobalState, useGlobalState } from "../../utils/globalState";
import Faq from "../../components/front_office/Faq";
import Footer from "../../components/front_office/Footer";

const Home = () => {
  const [isShown, setIsShown] = useState(true);
  const checkForm = localStorage.getItem("userChoices");

  function storedInfo() {
    let info = localStorage.getItem("userChoices");
    if (info) {
      info = JSON.parse(info);
      return info.structure;
    }
  }

  // function handleLogout() {
  //   fetchData.post(
  //     "http://127.0.0.1:8000/api/user/logout",
  //     { token: localStorage.getItem("token") },
  //     (data) => {
  //       localStorage.removeItem("token");
  //       setIsShown(true);
  //       setGlobalState("user", []);
  //     }
  //   );
  // }

  function handleDashboard() {
    window.location.href = "/app";
  }
  const storedInfoValue = storedInfo();
  useEffect(() => {
    setIsShown(!localStorage.getItem("token") ? true : false);
    console.log(localStorage.getItem("token"));
  }, []);
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <div className="flex justify-end gap-4 bg-cyan-700 w-full px-6">
            {checkForm && (
              <div className="flex items-center gap-4">
                <p className="text-white font-medium">
                  <span className="font-bold">Heureux de vous revoir !</span>{" "}
                  Votre{" "}
                  <span className="font-bold">
                    Création de {storedInfoValue}
                  </span>{" "}
                  a été enregistré
                </p>
                <Link to="services/creation_sarl">
                  <button className="text-orange-100 hover:text-orange-300 font-medium">
                    Reprendre mon questionnaire
                  </button>
                </Link>
              </div>
            )}
            {isShown && (
              <Link to="Login" className="h-full">
                <button className="h-full px-14 text-md border-0 py-2 text-white bg-orange-300 hover:bg-orange-200 font-bold">
                  Se connecter
                </button>
              </Link>
            )}
            {!isShown && (
              <button
                onClick={handleDashboard}
                className="h-full px-14 text-sm py-2 font-medium text-bleu-600 bg-white outline-none hover:m-0 focus:m-0 border border-blue-600 hover:border-4 focus:border-4 hover:border-blue-800 hover:text-blue-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 transition-all"
              >
                Dashboard
              </button>
            )}
          </div>

          <nav
            aria-labelledby="header-navigation"
            className=" py-3 flex max-h-0 w-full items-center px-12 transition-all sm:max-h-full sm:flex-row sm:items-start"
          >
            <Link to="/" className="w-2/6">
              <div className="flex items-center">
                <h1 className="font-bold text-blue-950 text-3xl font-Poppins">
                  Mo9awil<span className="text-orange-500">.</span>ma
                </h1>
              </div>
            </Link>

            <div className="">
              <ul className="flex gap-20">
                <Link to="services/creation_sarl">
                  <li className="font-medium cursor-pointer text-[1.11rem] hover-underline">
                    <span className="font-extrabold">Créer</span> <br /> ma
                    société
                  </li>
                </Link>
                <Link to="services">
                  <li className="font-medium cursor-pointer text-[1.11rem] hover-underline">
                    <span className="font-extrabold">Explorez</span> <br /> nos
                    services
                  </li>
                </Link>
                <Link to="services">
                  <li className="font-medium cursor-pointer text-[1.11rem] hover-underline">
                    <span className="font-extrabold">Comparer</span> <br />
                    les formes juridiques
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <main className="h-full heroHome">
        <div className="h-full py-36 flex flex-col gap-32 hero-container">
          <div className="flex flex-col h-full gap-8  justify-center items-center w-full">
            <div className="flex justify-center">
              <h1 className="text-white w-3/5 text-center text-7xl font-bold">
                Tout savoir sur la création d'entreprise.
              </h1>
            </div>
            <p className="text-white">
              Mo9awil.ma vous aide à réussir votre aventure entrepreneuriale
            </p>
            <Link to="services">
              <button className="text-white bg-cyan-700 hover:bg-cyan-900 py-3 px-14 text-md rounded-md">
                En savoir plus
              </button>
            </Link>
          </div>
          <div className="flex  w-full">
            <div className="flex flex-col w-1/2 items-center">
              <div className="bg-cyan-900 w-3/5 text-white flex rounded-t-lg p-4">
                <span className="w-[15%]">
                  <i class="fa-regular text-start fa-user text-white"></i> 1
                </span>
                <h3 className="text-white  w-[70%] flex font-bold justify-center">
                  SARL AU
                </h3>
              </div>
              <div className="w-3/5 bg-white flex flex-col gap-4 justify-center items-center pb-32 pt-12">
                <p className="text-cyan-900 w-4/5 text-center text-lg">
                  Lancez-vous seul avec une structure “prête à l’emploi” d’une
                  grande simplicité.
                </p>
                <Link to="services/creation_sarl">
                  <button className="bg-cyan-700 text-white hover:bg-cyan-900 px-10 py-3 rounded-md">
                    Créer mon SARL AU
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-1/2 items-center">
              <div className="bg-cyan-900 w-3/5 text-white flex rounded-t-lg p-4">
                <span className="w-[20%]">
                  <i class="fa-regular text-start fa-user text-white"></i> 2-100
                </span>
                <h3 className="text-white  w-[60%] flex font-bold justify-center">
                  SARL
                </h3>
              </div>
              <div className="w-3/5 bg-white flex flex-col gap-4 justify-center items-center pb-32 pt-12">
                <p className="text-cyan-900 w-4/5 text-center text-lg">
                  Associez-vous et profitez d’une structure "prête à l’emploi"
                  et encadrée.
                </p>

                <Link to="services/creation_sarl">
                  <button className="bg-cyan-700 text-white hover:bg-cyan-900 px-10 py-3 rounded-md">
                    Créer mon SARL
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default Home;

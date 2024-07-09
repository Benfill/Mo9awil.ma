import { useEffect, useLayoutEffect, useState } from "react";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export default function PacksCards(props) {
  const [packs, setPacks] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    setShowSkeleton(true);
    fetch("http://127.0.0.1:8000/api/packs", {})
      .then((response) => response.json())
      .then((data) => {
        setShowSkeleton(false);
        setPacks(data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="h-full flex justify-between max-sm:flex-wrap max-md:flex-wrap my-6 px-[10rem] gap-4">
      {showSkeleton && (
        <>
          <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md rounded-lg">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md rounded-lg">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md rounded-lg">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {packs.map((pack) =>
        !showSkeleton ? (
          <div className="py-6 bg-white border-2 rounded-md border-gray-200 w-[33%] h-full">
            <div className="border-b-2 border-gray-200">
              <div className="flex flex-col items-center">
                <img
                  src="https://assets-global.website-files.com/603544f36c95c822aaf84300/644913568d7281064e3d9d83_standard%20pack%20illu.svg"
                  alt=""
                />
              </div>
              <h1 className="text-3xl font-extrabold text-blue-900">
                {pack.pack_name}
              </h1>
              <div className="flex justify-center p-4">
                <p className="text-sm w-4/5 text-gray-400">
                  {pack.pack_description}
                </p>
              </div>
            </div>
            <div className="px-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <div>
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/6421639cdd850a130aa3536c_file-check-crea.svg"
                      alt=""
                    />
                  </div>
                  <dir className="flex flex-col justify-center items-start p-0">
                    <h1 className="text-lg text-blue-500 font-bold">
                      Démarches de création
                    </h1>
                    <p className="text-sm flex gap-1">
                      + frais de greffe et d'annonce légale
                      <Tooltip
                        title="Ces frais obligatoires sont de 246,86€ HT."
                        position="top"
                        trigger="mouseenter"
                        interactive
                      >
                        <img
                          src="https://assets-global.website-files.com/603544f36c95c822aaf84300/6346896d583ce3f239308537_help-circle%20(1).svg"
                          alt=""
                        />
                      </Tooltip>
                    </p>
                  </dir>
                </div>
                <div className="flex items-center">
                  <p className="font-bold text-blue-950">
                    {pack.pack_price}MAD
                  </p>
                </div>
              </div>
              <div className="py-2">
                <ol className="flex flex-col items-start">
                  {pack.pack_features.map((elem) => (
                    <li className="pack-list-item flex gap-4 text-left text-gray-500">
                      <span>✓</span> {elem.feature}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex justify-center pt-4 pb-2">
                <button
                  onClick={() => {
                    props.handleSelection("pack", pack);
                    props.handleSelection("price", pack.pack_price);
                    props.handleNextStep();
                  }}
                  className="bg-blue-500 hover:bg-blue-600 py-3 px-6 w-[90%] rounded-md text-white mb-2"
                >
                  Choisir
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

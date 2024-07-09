import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <main className="h-screen pb-10">
      <div className="bg-white">
        <div className="relative isolate px-6 pt-1 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Complétez votre aventure entrepreneuriale
            </h1>
            <div className="flex justify-center items-center">
              <div className="w-[40%]">
                <img src="../images/sapiens.png" alt="" />
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              "La première étape est le certificat négatif, puis vos documents
              seront prêts à être soumis au tribunal marocain pour commencer le
              processus de création."
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/app/proccess">
                <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Commencer
                </button>
              </Link>
              <Link to="/services">
                <button className="text-sm font-semibold leading-6 text-gray-900">
                  En savoir plus <span aria-hidden="true">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
export default function PaymentSteps({ steps }) {
  function handleCheckSign(checker) {
    if (steps <= checker) {
      return checker;
    } else return "🗸";
  }

  function handleClass(checker) {
    if (steps < checker) return "w-6 h-6 text-gray-800 bg-gray-200 rounded-full";
    else if (steps === checker)
      return "w-6 h-6 text-white bg-blue-500 rounded-full";
    else return "w-6 h-6 text-white bg-gray-500 rounded-full";
  }

  return (
    <div className="flex max-md:w-full justify-center">
      <div className="gap-1 flex flex-col justify-center items-center px-6">
        <div className={handleClass(1)}>{handleCheckSign(1)}</div>
        <p className="text-sm font-bold text-gray-400">Création</p>
      </div>
      <div className="gap-1 flex flex-col justify-center items-center px-6">
        <div className={handleClass(2)}>{handleCheckSign(2)}</div>
        <p className="text-sm text-gray-400 font-bold">Domiciliation</p>
      </div>
      <div className="gap-1 flex flex-col justify-center items-center px-6">
        <div className={handleClass(3)}>{handleCheckSign(3)}</div>
        <p className="text-sm text-gray-400 font-bold">Récapitulatif</p>
      </div>
      <div className="gap-1 flex flex-col justify-center items-center px-6">
        <div className={handleClass(4)}>{handleCheckSign(4)}</div>
        <p className="text-sm text-gray-400 font-bold">Paiement</p>
      </div>
    </div>
  );
}

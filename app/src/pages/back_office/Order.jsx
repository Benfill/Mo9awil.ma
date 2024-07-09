export default function Order() {
let data = [];

  // fetch('http://127.0.0.1:8000/api/')
  return (
    <main className="h-screen pb-10">
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Pack Name</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Payé</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.map((person, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={person.imgSrc}
                            alt={person.name}
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">{person.name}</p>
                          <p className="text-xs text-gray-600">{person.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border text-md font-semib  old">
                      {person.age}
                    </td>
                    <td
                      className={`px-4 py-3 border text-xs ${person.statusColor}`}
                    >
                      <span className="px-2 py-1 font-semibold leading-tight rounded-sm">
                        {person.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border text-sm">{person.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <>
      <main className=" font-hankengrotesk mx-auto min-h-screen flex justify-center items-center">
        <div className=" shadow-lg shadow-lightgray-300/60 flex flex-row justify-between rounded-3xl">
          <aside className="w-80 flex flex-col items-center text-center border rounded-3xl bg-gradient-to-b from-indigo-600/90 to-blue-700">
            <h1 className="my-8 text-xl text-indigo-100/60 font-semibold">
              Your Result
            </h1>
            <span className="px-14 py-12 flex flex-col rounded-full bg-gradient-to-b from-indigo-700 to-blue-700/90">
              <h1 className="font-bold text-white text-6xl ">76</h1>
              <p className="text-gray-400/60">of 100</p>
            </span>
            <div className="flex flex-col justify-center items-center">
              <h1 className="my-3 font-semibold text-[1.75rem] text-white">
                Great
              </h1>
              <p className="mb-10 mx-12 leading-5 text-violet-200/90">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </aside>

          <aside className="w-60 flex flex-col justify-evenly my-6 mx-8">
            <h1 className="self-start font-semibold text-xl">Summary</h1>
            <ul className="font-semibold">
              <li className="my-3 rounded-lg w-full bg-red-50/80 flex flex-row justify-between p-3">
                <span className="text-red-400">Reaction</span>
                <span className="flex flex-row justify-center">
                  <h1 className="text-gray-900">80</h1>
                  <h1 className="px-2 text-gray-400">/ 100</h1>
                </span>
              </li>
              <li className="my-3 rounded-lg w-full bg-yellow-50/80 flex flex-row justify-between p-3">
                <span className="text-yellow-400">Memory</span>
                <span className="flex flex-row justify-center">
                  <h1 className="text-gray-900">92</h1>
                  <h1 className="px-2 text-gray-400">/ 100</h1>
                </span>
              </li>
              <li className="my-3 rounded-lg w-full bg-green-50/80 flex flex-row justify-between p-3">
                <span className="text-green-400">Verbal</span>
                <span className="flex flex-row justify-center">
                  <h1 className="text-gray-900">61</h1>
                  <h1 className="px-2 text-gray-400">/ 100</h1>
                </span>
              </li>
              <li className="my-3 rounded-lg w-full bg-indigo-50/80 flex flex-row justify-between p-3">
                <span className="text-indigo-700">Reaction</span>
                <span className="flex flex-row justify-center">
                  <h1 className="text-gray-900">72</h1>
                  <h1 className="px-2 text-gray-400">/ 100</h1>
                </span>
              </li>
            </ul>
            <button className="text-white bg-gray-700 py-3 rounded-full">
              Continue
            </button>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;

import Header from "../components/Header";
import React, { useEffect, useState } from "react";


const HomePage = () => {
  const [apiData, setApiData] = useState();
  const [error, setError] = useState();

  return (
    <div className="min-h-screen w-full p-8 flex flex-col bg-gray-700">
      <Header />
      <main className="flex-1 flex items-center justify-center flex-col">
        <h1 className="text-4xl text-white mb-4">Welcome to the Home Page</h1>
        {error && <div className="text-red-500">Error: {error}</div>}
        {apiData ? (
          <pre className="bg-gray-800 text-white p-4 rounded">
            {JSON.stringify(apiData, null, 2)}
          </pre>
        ) : (
          !error && <div className="text-white">TBD Get API to connect...</div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
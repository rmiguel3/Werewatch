import Header from "../components/Header";
import React, { useEffect, useState } from "react";


const HomePage = () => {

  return (
    <div className="min-h-screen w-full p-8 flex flex-col bg-black">
      <Header />
      <main className="flex-1 flex items-center justify-center flex-col">
        <h1 className="text-4xl text-white mb-4">Welcome to the Home Page</h1>
      </main>
    </div>
  );
};

export default HomePage;
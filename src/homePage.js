import React from "react";
import "./index.css";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full p-8 flex flex-col justify-center items-center bg-gray-700">
      <h1 className="text-2xl font-bold mb-20 text-white">Hello</h1>
      <p className="text-white">Welcome to the Home Page!</p>
    </div>
  );
};

export default HomePage;
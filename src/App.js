import React from "react";
import { streamingServices } from "./streamingServices";
import {useNavigate} from "react-router-dom";

const App = () => {
  const [selected, setSelected] = React.useState([]);
  const navigate = useNavigate(); // Move useNavigate here

  const toggleService = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : [...prev, name]
    );
  };

  const handleSubmit = () => {
    localStorage.setItem("selectedServices", JSON.stringify(selected));
    navigate("/homePage"); // Navigate to HomePage after submission
  };

  return (
    <div className="min-h-screen w-full p-8 flex flex-col justify-center items-center bg-gray-700">
      <h1 className="text-white text-2xl font-bold mb-20">Which Streaming Services Do You Wanna View?</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-20 mt-10">
        {streamingServices.map((service) => (
          <button
            key={service.name}
            type="button"
            onClick={() => toggleService(service.name)}
            className={`relative flex justify-center items-center group transition-transform duration-200 rounded-lg focus:outline-none border-2 border-transparent`}
            style={{ outline: "none", background: "transparent" }}
          >
            <img
              src={service.logo}
              alt={service.name + " logo"}
              className={`h-12 object-contain transition-transform duration-200 ${
                selected.includes(service.name)
                  ? "scale-110"
                  : "group-hover:scale-110 group-active:scale-95"
              }`}
              style={{ maxWidth: 180, cursor: "pointer" }}
            />
            {selected.includes(service.name) && (
              <span
                className="absolute top-2 right-2 bg-blue-500 rounded-full p-1 flex items-center justify-center"
                style={{ width: 24, height: 24 }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="white" />
                  <path
                    d="M4 8.5L7 11.5L12 6.5"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </button>
        ))}
      </div>
      <button
        className="mt-20 px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={handleSubmit}
        disabled={selected.length === 0}
      >
        Submit
      </button>
    </div>
  );
}
export default App;

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./homePage";
import "./index.css";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/homePage" element={<HomePage />} />
    </Routes>
  </BrowserRouter>,
);
export default root;
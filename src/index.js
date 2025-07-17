import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StreamSelector from "./pages/streamSelector";
import HomePage from "./pages/home";
import "./index.css";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StreamSelector />} />
      <Route path="/homePage" element={<HomePage />} />
    </Routes>
  </BrowserRouter>,
);
export default root;
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import SelectStreamers from './pages/selectStreamers';
import HomePage from './pages/home';
import MovieDetailsPage from './pages/movieDetailsPage';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SelectStreamers />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/movieDetailsPage" element={<MovieDetailsPage />} />
    </Routes>
  </BrowserRouter>,
);
export default root;
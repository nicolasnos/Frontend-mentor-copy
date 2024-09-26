import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header.jsx";
import Slider from "./Components/Slider.jsx";
import Footer from "./Components/Footer.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="app">
      <Header />
      <Slider />
      <Footer />
    </div>
  </StrictMode>
);

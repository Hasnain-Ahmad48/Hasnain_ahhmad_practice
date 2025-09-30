import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import FunctionalConponent from "./FunctionalConponent.jsx";
import LifeofFunction from "./LifeofFunction.jsx";
import RenderingForm from "./RenderingForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <FunctionalConponent />
    <LifeofFunction />
    <RenderingForm />
  </StrictMode>
);

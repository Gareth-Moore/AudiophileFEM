import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./cssReset.css";
import "./baseStyles.css";
import "./components/dependantComponents/dependantComponent.styles.css";
import "./components/sharedComponents/sharedComponent.styles.css";
import "./components/elements/elementComponents.styles.css";
import "./screen/screen.styles.css";
import App from "./App";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import CategoryScreen from "./screen/CategoryScreen";
import ProduceScreen from "./screen/ProductScreen";
import Error404Screen from "./screen/Error404Screen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/category" element={<CategoryScreen />} />
      <Route path="/product" element={<ProduceScreen />} />
      <Route path="/error-404-page" element={<Error404Screen />} />
      <Route path="*" element={<Navigate to="/error-404-page" replace />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

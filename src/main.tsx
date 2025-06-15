import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import HomePage from "./pages/home/page";
import { AnimatePresence } from "motion/react";
import UploadPage from "./pages/upload/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode>
);

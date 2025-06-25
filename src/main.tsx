import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import HomePage from "./pages/home/page";
import { AnimatePresence } from "motion/react";
import UploadPage from "./pages/upload/page";
import ModalPage from "./pages/modal/page";
import Script from "./Script";
import GuestPage from "./pages/guest/page";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route
          path="/modal"
          element={
            <Script>
              <ModalPage />
            </Script>
          }
        />
        <Route path="/guest" element={<GuestPage />} />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);

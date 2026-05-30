import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Information from "./pages/Information.jsx";
import AnnualTournament from "./pages/AnnualTournament.jsx";
import Women from "./pages/Women.jsx";
import "./styles.css";

const legacyRedirect = sessionStorage.getItem("redirect");

if (legacyRedirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", legacyRedirect);
}

function LegacyRedirect({ to }) {
  const location = useLocation();
  return <Navigate to={`${to}${location.search}${location.hash}`} replace />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="information" element={<Information />} />
          <Route path="information.html" element={<LegacyRedirect to="/information" />} />
          <Route path="annual-tournament" element={<AnnualTournament />} />
          <Route
            path="annual-tournament.html"
            element={<LegacyRedirect to="/annual-tournament" />}
          />
          <Route path="women" element={<Women />} />
          <Route path="womens.html" element={<LegacyRedirect to="/women" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

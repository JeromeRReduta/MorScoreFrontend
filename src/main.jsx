import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { JwtProvider } from "./pages/users/stores/JwtStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <JwtProvider>
        <App />
      </JwtProvider>
    </BrowserRouter>
  </StrictMode>
);

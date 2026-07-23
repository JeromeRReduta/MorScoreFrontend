import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { JwtProvider } from "./pages/users/hooks/JwtProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <JwtProvider>
                <App />
            </JwtProvider>
        </BrowserRouter>
    </StrictMode>,
);

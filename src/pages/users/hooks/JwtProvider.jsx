import { useState } from "react";
import postAccInfoAsync from "../services/postAccInfoAsync";
import JwtContext from "./JwtContext";

export function JwtProvider({ children }) {
    const [response, setResponse] = useState(null);

    async function loginAsync({ email, password }) {
        const apiResponse = await postAccInfoAsync({
            accInfo: { email, password },
            endpoint: "/login",
        });
        setResponse(apiResponse);
    }

    async function registerAsync({ email, name, password }) {
        const response = await postAccInfoAsync({
            accInfo: { email, name, password },
            endpoint: "/register",
        });
        setResponse(response);
    }

    function logout() {
        setResponse(null);
    }

    const value = { response, loginAsync, registerAsync, logout };
    return <JwtContext.Provider value={value}>{children}</JwtContext.Provider>;
}

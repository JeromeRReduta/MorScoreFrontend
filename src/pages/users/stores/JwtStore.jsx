import { createContext, useContext, useState } from "react";
import postAccInfoAsync from "../services/postAccInfoAsync";

const JwtContext = createContext();

export function JwtProvider({ children }) {
  const [response, setResponse] = useState(null);

  const loginAsync = async ({ email, password }) => {
    const apiResponse = await postAccInfoAsync({
      accInfo: { email, password },
      endpoint: "/login",
    });
    console.log("done");
    console.log("response should become", apiResponse);
    setResponse(apiResponse);
  };

  const registerAsync = async ({ email, name, password }) => {
    const response = await postAccInfoAsync({
      accInfo: { email, name, password },
      endpoint: "/register",
    });
    setResponse(response);
  };

  const logout = () => setResponse(null);

  const value = { response, loginAsync, registerAsync, logout };
  return <JwtContext.Provider value={value}>{children}</JwtContext.Provider>;
}

export default function useJwt() {
  const context = useContext(JwtContext);
  if (!context) {
    throw Error("No provider given for useJwt!");
  }
  return context;
}

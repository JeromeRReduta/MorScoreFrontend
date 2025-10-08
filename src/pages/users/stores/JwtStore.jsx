import { useState } from "react";
import postAccInfoAsync from "../services/postAccInfoAsync";
import ApiResponse from "../../../shared/entities/ApiResponse";

export default function JwtStore() {
  const [response, setResponse] = useState(null);

  const loginAsync = async ({ email, password }) => {
    const response = await postAccInfoAsync({
      accInfo: { email, password },
      endpoint: "/login",
    });
    setResponse(response);
  };

  const registerAsync = async ({ email, name, password }) => {
    const response = await postAccInfoAsync({
      accInfo: { email, name, password },
      endpoint: "/register",
    });
    setResponse(response);
  };

  const logout = () => setResponse(null);

  return { response, loginAsync, registerAsync, logout };
}

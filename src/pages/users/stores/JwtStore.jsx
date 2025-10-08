import { useState } from "react";
import postAccInfoAsync from "../services/postAccInfoAsync";
import ApiResponse from "../../../shared/entities/ApiResponse";

export default function JwtStore() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginAsync = async ({ email, password }) => {
    setLoading(true);
    let response;
    try {
      const data = await postAccInfoAsync({
        accInfo: { email, password },
        endpoint: "/login",
      });
      response = new ApiResponse({ success: true, data, error: null });
    } catch (e) {
      response = new ApiResponse({ success: false, data: null, error: e });
    }
    setResponse(response);
    setLoading(false);
  };

  const registerAsync = async ({ email, name, password }) => {
    setLoading(true);
    let response;
    try {
      const data = await postAccInfoAsync({
        accInfo: { email, name, password },
        endpoint: "/register",
      });
      response = new ApiResponse({ success: true, data, error: null });
    } catch (e) {
      response = new ApiResponse({ success: false, data: null, error: e });
    }
    setResponse(response);
    setLoading(false);
  };

  const logout = () => setResponse(null);

  return { response, loading, loginAsync, registerAsync, logout };
}

import { useState } from "react";
import postTextFileForScoringAsync from "../services/postTextFileForScoringAsync";
import ApiResponse from "../../../shared/entities/ApiResponse";

export default function MorScoreResultStore() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  async function scoreTextFileAsync(e) {
    setLoading(true);
    const text = e.target.result;
    const algorithm = "ORIGINAL_PURITAN";
    let response;
    try {
      const data = await postTextFileForScoringAsync({ algorithm, text });
      response = new ApiResponse({ success: true, data, error: null });
    } catch (e) {
      response = new ApiResponse({ success: false, data: null, error: e });
    }
    setResponse(response);
    setLoading(false);
  }

  return { response, loading, scoreTextFileAsync };
}

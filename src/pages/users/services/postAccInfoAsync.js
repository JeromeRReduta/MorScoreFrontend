import ApiResponse from "../../../shared/entities/ApiResponse";

export default async function postAccInfoAsync({ accInfo, endpoint }) {
  const port = "http://mor-score-api.onrender.com";
  //   const port = "https://mor-score-api.onrender.com"; // TODO: make this configurable
  const url = new URL(port + "/users" + endpoint);
  const request = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(accInfo),
  };
  console.log("request is", request);

  const response = await fetch(url, request);
  if (!response.ok) {
    const error = new Error(await response.text());
    return new ApiResponse({
      success: false,
      data: null,
      error,
    });
  }
  const data = await response.text();
  return new ApiResponse({ success: true, data, error: null });
}

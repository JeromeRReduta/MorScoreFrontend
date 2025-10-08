export default async function postAccInfoAsync({ accInfo, endpoint }) {
  const port = "http://localhost:3000"; // TODO: make this configurable
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
  console.log("response is", response);
  if (!response.ok) {
    throw new Error("error in request!");
  }
  const content = await response.text();
  return content.length > 0 ? JSON.parse(response) : null;
}

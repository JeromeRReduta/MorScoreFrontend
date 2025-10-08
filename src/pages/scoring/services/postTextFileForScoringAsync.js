export default async function postTextFileForScoringAsync({ algorithm, text }) {
  const port = "http://localhost:3000";
  const url = new URL(`${port}/get-your-morscore`);
  const request = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      algorithm,
      text,
    }),
  };
  console.log("request is", request);

  const response = await fetch(url, request);
  if (!response.ok) {
    throw new Error("Error in request");
  }
  const content = await response.text();
  return content.length > 0 ? JSON.parse(content) : {};
}

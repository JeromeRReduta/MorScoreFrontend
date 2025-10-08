export default async function postTextFileForScoringAsync({ algorithm, text }) {
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
  const data = await fetch("/get-your-morscore", request);

  return data;
}

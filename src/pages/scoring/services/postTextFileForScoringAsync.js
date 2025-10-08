import createMorScoreResultDTO from "../entities/MorScoreResult";

export default async function postTextFileForScoringAsync({ algorithm, text }) {
  const port = "https://mor-score-api.onrender.com"; // TODO: make this configurable
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
  const response = await fetch(url, request);
  if (!response.ok) {
    console.log("response is", response);
    throw new Error(response);
  }
  const content = await response.text();
  const { category, score, offenses } =
    content.length > 0 ? JSON.parse(content) : {};
  return createMorScoreResultDTO({ category, score, offenses });
}

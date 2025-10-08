import createMorScoreResultDTO from "../entities/MorScoreResult";
import MorScoreResult from "../entities/MorScoreResult";

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
  console.log("content", content);
  console.log("parsed", JSON.parse(content));
  const { category, score, offenses } =
    content.length > 0 ? JSON.parse(content) : {};

  return createMorScoreResultDTO({ category, score, offenses });
}

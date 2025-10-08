import createMorScoreResultDTO from "../entities/MorScoreResult";

export default async function postTextFileToDb({ algorithm, text, isPublic }) {
  const port = "http://localhost:3000"; // TODO: make this configurable
  const url = new URL(`${port}/save-your-text`);
  const request = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      algorithm,
      text,
      isPublic,
    }),
  };
  console.log("request", request);
  const response = await fetch(url, request);
  if (!response.ok) {
    throw new Error("error in request!");
  }
  const content = await response.text();
  const { category, score, offenses } =
    content.length > 0 ? JSON.parse(content) : {};
  return createMorScoreResultDTO({ category, score, offenses });
}

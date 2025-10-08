import createMorScoreResultDTO from "../entities/MorScoreResult";

export default async function postTextFileToDb({
  algorithm,
  text,
  isPublic,
  token,
  title,
}) {
  const port = "https://mor-score-api.onrender.com"; // TODO: make this configurable
  const url = new URL(`${port}/save-your-text`);
  const request = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      algorithm,
      text,
      is_public: isPublic,
      title,
    }),
  };
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, request);
  if (!response.ok) {
    console.log("response is", await response.text());

    throw new Error(await response.text());
  }
  const content = await response.text();
  const { category, score, offenses } =
    content.length > 0 ? JSON.parse(content) : {};
  return createMorScoreResultDTO({ category, score, offenses });
}

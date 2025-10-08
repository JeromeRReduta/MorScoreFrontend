class MorScoreResultDTO {
  category;

  score;

  offenses;

  constructor({ category, score, offenses }) {
    this.category = category;
    this.score = score;
    this.offenses = offenses;
  }
}

export default function createMorScoreResultDTO({ category, score, offenses }) {
  return new MorScoreResultDTO({ category, score, offenses });
}

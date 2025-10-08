class MorScoreResultDTO {
  #category;

  #score;

  #offenses;

  constructor({ category, score, offenses }) {
    this.#category = category;
    this.#score = score;
    this.#offenses = offenses;
  }

  get category() {
    return this.#category;
  }

  get score() {
    return this.#score;
  }

  get offenses() {
    return this.#offenses;
  }
}

export default function createMorScoreResultDTO({ category, score, offenses }) {
  return new MorScoreResultDTO({ category, score, offenses });
}

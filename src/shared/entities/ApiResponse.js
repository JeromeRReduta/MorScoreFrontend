export default class ApiResponse {
  #success;

  #data;

  #error;

  constructor({ success, data, error }) {
    this.#success = success;
    this.#data = data;
    this.#error = error;
  }

  get success() {
    return this.#success;
  }

  get data() {
    return this.#data;
  }

  get error() {
    return this.#error;
  }
}

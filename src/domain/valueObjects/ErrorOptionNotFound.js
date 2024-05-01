class ErrorOptionNotFound extends Error {
  /** @param {string} name */
  constructor(name) {
    super(`[Option] ${name} not found`);
  }
}

module.exports = {
  ErrorOptionNotFound,
};

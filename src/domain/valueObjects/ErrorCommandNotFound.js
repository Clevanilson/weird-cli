class ErrorCommandNotFound extends Error {
  constructor() {
    super("[Command] Not found");
  }
}

module.exports = {
  ErrorCommandNotFound,
};

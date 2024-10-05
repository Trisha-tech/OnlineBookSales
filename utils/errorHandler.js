const errorHandler = (status, title, detail) => {
    return {
      response: {},
      errors: {
        status: status || 500,
        title: title || "Internal Server Error",
        detail: detail || "Error in processing request! Please try again later.",
      },
    };
  };

module.exports = {
    errorHandler
}

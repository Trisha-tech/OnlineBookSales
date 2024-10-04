const responseHandler = (res, options) => {
    return res.status(options?.status ? options.status : 200).send({
      response: {
        data: options.data || {},
        title: options.title || "Request Processed",
        message: options.message || "The request was successful",
        status: options.status || 200,
      },
      errors: {},
    });
  };
  
  module.exports = { responseHandler };
class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;


    //write as it is 
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructer);
    }
  }
  // write as it is
}

export { ApiError };

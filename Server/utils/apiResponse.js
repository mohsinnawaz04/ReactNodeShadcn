export const apiResponse = {
  success: (
    res,
    message = "Success",
    data = null,
    statusCode = 200,
    cookie = null
  ) => {
    if (cookie) {
      res.cookie("token", cookie, {
        httpOnly: true,
      });
    }
    res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  },

  error: (
    res,
    message = "An error occurred",
    errors = null,
    statusCode = 500
  ) => {
    res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  },
};

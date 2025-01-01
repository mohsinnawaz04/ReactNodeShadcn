const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error); // Pass the error to Express's error-handling middleware
    }
  };
};

export { asyncHandler };

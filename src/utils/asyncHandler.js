const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      console.log("err asyncHandler", err);
      next(err);
    });
  };
};

export { asyncHandler };

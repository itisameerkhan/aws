export const errorHandler = async (err, req, res, next) => {
  res.json({
    success: false,
    message: err.message || "no error found",
    error: err,
  });
};

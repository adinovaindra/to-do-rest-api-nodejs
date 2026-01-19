export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  res.status(statusCode);
  res.json({
    status: "error",
    message: err.message,
    errors: err.errors ?? null,
  });
}
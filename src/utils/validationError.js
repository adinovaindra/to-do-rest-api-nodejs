export function validationError(errors, statusCode) {
  const err = new Error("Something Went Wrong!");
  err.statusCode = statusCode || 400;
  err.errors = errors;
  return err;
}

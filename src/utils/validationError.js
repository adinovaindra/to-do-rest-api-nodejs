export function validationError(errors) {
  const err = new Error("Something Went Wrong!");
  err.statusCode = 400;
  err.errors = errors;
  return err;
}
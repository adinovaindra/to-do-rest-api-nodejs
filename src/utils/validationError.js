export function validationError(errors) {
  const err = new Error("Validation Failed!");
  err.statusCode = 400;
  err.errors = errors;
  return err;
}
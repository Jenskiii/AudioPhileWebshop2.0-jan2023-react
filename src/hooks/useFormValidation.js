export function useFormValidation(
  isAfterSubmit,
  errors,
  showError,
  showSucces
) {
  const errorClass = errors.length > 0 ? showError : "";
  const succesClass = errors.length === 0 && isAfterSubmit ? showSucces : "";

  return `${errorClass} , ${succesClass}`
}

// name
export function checkName(name) {
  const errors = [];
  if (name.length === 0) {
    errors.push("Required");
  }

  if (name.length > 0 && name.match(/[0-9]/)) {
    errors.push("Wrong Format");
  }
  return errors;
}

// email
export function checkEmail(email) {
  const errors = [];
  if (email.length === 0) {
    errors.push("Required");
  }

  if (
    email.length > 0 &&
    !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  ) {
    errors.push("invalid email address");
  }
  return errors;
}

// phone
export function checkPhone(phone) {
  const errors = [];
  if (phone.length === 0) {
    errors.push("Required");
  }

  if (phone.length > 0 && !phone.match(/^\+(?:[0-9]●?){6,14}[0-9]$/)) {
    errors.push("Wrong format");
  }
  return errors;
}

// address
export function checkAddress(address) {
  const errors = [];
  if (address.length === 0) {
    errors.push("Required");
  }

  if (address.length > 0 && !address.match(/[A-Za-z0-9'\.\-\s\,]/)) {
    errors.push("Wrong format");
  }
  return errors;
}
// zipcode
export function checkZipcode(zipcode) {
  const errors = [];
  if (zipcode.length === 0) {
    errors.push("Required");
  }
  if (zipcode.length > 0 && zipcode.match(/^\d{5}(?:[-\s]\d{4})?$/)) {
    errors.push("Wrong format");
  }
  return errors;
}
// city
export function checkCity(city) {
  const errors = [];
  if (city.length === 0) {
    errors.push("Required");
  }
  if (city.length > 0 && !city.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)) {
    errors.push("Wrong format");
  }
  return errors;
}
// country
export function checkCountry(country) {
  const errors = [];
  if (country.length === 0) {
    errors.push("Required");
  }
  if (country.length > 0 && !country.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)) {
    errors.push("Wrong format");
  }
  return errors;
}

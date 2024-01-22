export function checkEMoneyNumber(number) {
  const errors = [];
  if (number.length === 0) {
    errors.push("Required");
  }

  if(number.length > 0 && number.length !== 9){
    errors.push("Insert 9 digits");
  }

  if(number.length > 0 && number.match(/[a-zA-Z]/)){
    errors.push("Wrong format");
  }
  
  return errors;
}

export function checkEMoneyPin(pin) {
  const errors = [];
  if (pin.length === 0) {
    errors.push("Required");
  }

  if(pin.length > 0 && pin.length !== 4){
    errors.push("Insert 4 digits");
  }

  if(pin.length > 0 && pin.match(/[a-zA-Z]/)){
    errors.push("Wrong format");
  }
  return errors;
}

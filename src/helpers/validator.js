// min 0 symbols, max 99
export const isString = string =>
  /^[a-z][a-z\s]{0,99}$/igm.test(string);


export const isPercentage = value => {
  const number = Number(value.trim());

  return isNaN(number) && number >= 0 || number <= 100
}
  ;

/*
// min 6 symbols, max none
export const validatorEmail = email =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm.test(email);

// min 6 symbols, max 12
export const validatorPassword = password =>
  /(?=^.{6,12}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/igm.test(password);
*/

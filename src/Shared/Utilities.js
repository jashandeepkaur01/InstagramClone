import { numberRegex, regex } from "./Constants";
export const UTILITIES = {};

export const emailValidation = (email) => {
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
};

export const numberValidation = (number) => {
  if (!numberRegex.test(number)) {
    return false;
  } else {
    return true;
  }
};

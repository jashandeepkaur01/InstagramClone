import { Reactions } from "Shared/Constants";
import { numberRegex, regex } from "./Constants";
export const UTILITIES = {};

export const emailValidationV2 = (email) => regex.test(email);
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

export const isValidFileUploaded = (file) => {
  const validExtensions = ["png", "JPEG", "jpg"];

  let fileExtension = file?.split(".");
  fileExtension = fileExtension[1];
  return validExtensions.includes(fileExtension);
};

export const reactFunction = (data) => {
  const keys = Object.keys(data);
  const reactionCounterArr = [];
  keys
    .map((key) => {
      return Reactions.find((reaction) => {
        return reaction.key === key;
      });
    })
    .forEach((object) => {
      const val = data[object.key];
      for (let i = 0; i < val; i++) {
        reactionCounterArr.push({ ...object });
      }
    });
  return reactionCounterArr;
};

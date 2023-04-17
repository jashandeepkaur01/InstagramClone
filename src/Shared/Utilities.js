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

// export const unflatten = (arr) => {
//   var tree = [],
//     mappedArr = {},
//     arrElem,
//     mappedElem;

//   for (var i = 0; i < arr.length; i++) {
//     arrElem = arr[i];
//     mappedArr[arrElem.post_id] = arrElem;
//     mappedArr[arrElem.post_id]["children"] = [];
//   }

//   for (var id in mappedArr) {
//     if (mappedArr.hasOwnProperty(id)) {
//       mappedElem = mappedArr[id];

//       if (mappedElem.parent_id) {
//         mappedArr[mappedElem["parent_id"]]["children"].push(mappedElem);
//       } else {
//         tree.push(mappedElem);
//       }
//     }
//   }

//   return tree;
// };
export const isValidFileUploaded = (file) => {
  const validExtensions = ["png", "jpeg", "jpg"];

  let fileExtension = file.split(".");
  fileExtension = fileExtension[1];
  return validExtensions.includes(fileExtension);
};

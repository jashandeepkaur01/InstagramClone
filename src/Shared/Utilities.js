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
  const validExtensions = ["png", "JPEG", "jpg"];

  let fileExtension = file?.split(".");
  fileExtension = fileExtension[1];
  return validExtensions.includes(fileExtension);
};

export const reactFunction = (data) => {
  const keys = Object.keys(data);
  const reactionCounterArr = [];
  debugger;
  keys.forEach((key) => {
    const val = data[key];
    for (let i = 0; i < val; i++) {
      if (key === "2") {
        reactionCounterArr.push({
          label: "haha",
          node: <div>😄</div>,
        });
      } else if (key === "3") {
        reactionCounterArr.push({
          label: "angry",
          node: <div>😡</div>,
        });
      } else if (key === "4") {
        reactionCounterArr.push({
          label: "cute",
          node: <div>🥰</div>,
        });
      } else if (key === "5") {
        reactionCounterArr.push({
          label: "lovely",
          node: <div>😍</div>,
        });
      } else if (key === "6") {
        reactionCounterArr.push({
          label: "thumbsUp",
          node: <div>👍</div>,
        });
      }
    }
  });
  return reactionCounterArr;
};

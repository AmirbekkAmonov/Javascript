// 1-masala...

function arrayOfMultiples(num, length) {
  let multiples = [];
  for (let i = 1; i <= length; i++) {
    multiples.push(num * i);
  }
  return multiples;
}
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));





//   2-masala...

function reverseWords(str) {
  let words = str.trim().split(/\s+/);
  let reversedWords = words.reverse();
  let reversedString = reversedWords.join(' ');
  return reversedString;
}
console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("hello world! "));
console.log(reverseWords("a good example"));




//  3-masala...

function calculateTotalLosses(stolenItems) {
  let totalLosses = 0;
  if (Object.keys(stolenItems).length === 0) {
    return "Lucky you!";
  }
  for (let item in stolenItems) {
    totalLosses += stolenItems[item];
  }
  return totalLosses;
}
let stolenItems1 = { tv: 30, skate: 20, stereo: 50 };
console.log(calculateTotalLosses(stolenItems1));
let stolenItems2 = { painting: 20000 };
console.log(calculateTotalLosses(stolenItems2));
let stolenItems3 = {};
console.log(calculateTotalLosses(stolenItems3));






//    4-masala...

function removeABC(str) {
  if (!/[abc]/i.test(str))
    return null;
  let modifiedStr = str.replace(/[abc]/gi, '');
  return modifiedStr;
}
console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));
console.log(removeABC(""));





//  5-masala...

function capMe(names) {
  let capitalizedNames = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    capitalizedNames.push(capitalized);
  }
  return capitalizedNames;
}
console.log(capMe(["mavis", "senaida", "letty"]));
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]));





//    6-masala...


function uniqueArr(arr) {
  let uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > 0 && uniqueNumbers.indexOf(num) === -1) {
      uniqueNumbers.push(num);
    }
  }
  return uniqueNumbers;
}
console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]));
console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]));
console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]));







//    7-masala...


function doubleFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * doubleFactorial(num - 2);
}
console.log(doubleFactorial(0));
console.log(doubleFactorial(2));
console.log(doubleFactorial(9));
console.log(doubleFactorial(14));





//       8-masala...


function multiplyNums(nums) {
  let numArr = nums.split(", ");
  let product = 1;
  for (let i = 0; i < numArr.length; i++) {
    product *= Number(numArr[i]);
  }
  return product;
}
console.log(multiplyNums("2, 3"));
console.log(multiplyNums("1, 2, 3, 4"));
console.log(multiplyNums("54, 75, 453, 0"));
console.log(multiplyNums("10, -2"));





//    9-masala...


function reversibleInclusiveList(start, end) {
  let result = [];
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
  } else {
    for (let j = start; j >= end; j--) {
      result.push(j);
    }
  }
  return result;
}
console.log(reversibleInclusiveList(1, 5));
console.log(reversibleInclusiveList(2, 8));
console.log(reversibleInclusiveList(10, 20));
console.log(reversibleInclusiveList(24, 17));






//    10-masala...


function factorize(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}
console.log(factorize(12));
console.log(factorize(4));
console.log(factorize(15));
console.log(factorize(17));














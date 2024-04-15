//     1-masala...


function difference(arr1, arr2) {
    let combinedArray = arr1.concat(arr2);
    let uniqueElements = combinedArray.filter(function (item, index) {
        return combinedArray.indexOf(item) === index;
    });
    uniqueElements.sort(function (a, b) {
        return a - b;
    });
    let stringElements = uniqueElements.map(function (item) {
        return item.toString();
    });
    return stringElements;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));








//    2-masala...


function move(arr, fromIndex, toIndex) {
    let element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, element);
    return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));






//    3-masala...


function findUniqueValues(arr) {
    var uniqueValues = [];
    for (var i = 0; i < arr.length; i++) {
        if (!uniqueValues.includes(arr[i])) {
            uniqueValues.push(arr[i]);
        }
    }
    return uniqueValues;
}
console.log(findUniqueValues([1, 2, 2, 3, 4, 4, 5]));
console.log(findUniqueValues([1, 2, 3, 4, 5]));
console.log(findUniqueValues([1, -2, -2, 3, 4, -5, -6, -5]));







//     4-masala...



function calculateExpression(a, b, c, d) {
    const modul = 1000000007;
    const result = (a * b * c * d) % modul;
    return result;
}
const a = 1;
const b = 1;
const c = 1;
const d = 1;
console.log(calculateExpression(a, b, c, d));






//   5-masala...



function largestEven(nums) {
    let largestEvenNumber = -1;
  
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (num % 2 === 0 && num > largestEvenNumber) {
        largestEvenNumber = num;
      }
    }
    return largestEvenNumber;
  }
  console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13])); 
  console.log(largestEven([1, 3, 5, 7])); 
  console.log(largestEven([0, 19, 18973623])); 









//    Bonus...


function minRemoveToMakeValid(s) {
    let openCount = 0;
    let validString = '';
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(') {
            openCount++;
        } else if (c === ')') {
            if (openCount === 0) {
                continue;
            }
            openCount--;
        }
        validString += c;
    }
    if (openCount === 0) {
        return validString;
    }
    let finalString = '';
    for (let i = validString.length - 1; i >= 0; i--) {
        const c = validString[i];
        if (c === '(' && openCount > 0) {
            openCount--;
            continue;
        }
        finalString = c + finalString;
    }

    return finalString;
}

const s1 = "lee(t(c)o)de)";
console.log(minRemoveToMakeValid(s1));
const s2 = "a)b(c)d";
console.log(minRemoveToMakeValid(s2));
const s3 = "))((";
console.log(minRemoveToMakeValid(s3));
const s4 = "(((abc))";
console.log(minRemoveToMakeValid(s4));






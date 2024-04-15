//    1-masala...


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







//    2-masala...


function solveEquation(equation) {
    let [left, right] = equation.split('=');
    let [leftX, leftNum] = evaluateExpression(left);
    let [rightX, rightNum] = evaluateExpression(right);
    let xCoeff = leftX - rightX;
    let numCoeff = rightNum - leftNum;
    if (xCoeff === 0 && numCoeff === 0) {
        return "Infinite solutions";
    } else if (xCoeff === 0 && numCoeff !== 0) {
        return "No solution";
    } else {
        let xValue = numCoeff / xCoeff;
        return `x=${xValue}`;
    }
}
function evaluateExpression(expression) {
    let xCoeff = 0;
    let numCoeff = 0;
    let currentNum = '';
    let positive = true;
    for (let i = 0; i < expression.length; i++) {
        let char = expression.charAt(i);
        if (char === '+' || char === '-') {
            if (currentNum !== '') {
                let num = parseInt(currentNum);
                if (positive) {
                    numCoeff += num;
                } else {
                    numCoeff -= num;
                }
                currentNum = '';
            }
            positive = char === '+';
        } else if (char === 'x') {
            if (currentNum === '') {
                xCoeff += positive ? 1 : -1;
            } else {
                let num = parseInt(currentNum);
                xCoeff += positive ? num : -num;
                currentNum = '';
            }
        } else {
            currentNum += char;
        }
    }
    if (currentNum !== '') {
        let num = parseInt(currentNum);
        if (positive) {
            numCoeff += num;
        } else {
            numCoeff -= num;
        }
    }
    return [xCoeff, numCoeff];
}
const equation1 = "x+5-3+x=6+x-2";
console.log(solveEquation(equation1));
const equation2 = "x=x";
console.log(solveEquation(equation2));
const equation3 = "2x=x";
console.log(solveEquation(equation3));







//   3-masala...


function romanToInt(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const current = romanValues[s[i]];
        const next = romanValues[s[i + 1]];
        if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
}
const S1 = "III";
console.log(romanToInt(S1));
const S2 = "LVIII";
console.log(romanToInt(S2));
const S3 = "MCMXCIV";
console.log(romanToInt(S3));








//   4-masala...



function containsNearbyDuplicate(nums, k) {
    const numIndices = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num in numIndices && i - numIndices[num] <= k) {
            return true;
        }
        numIndices[num] = i;
    }
    return false;
}
const nums1 = [1, 2, 3, 1];
const k1 = 3;
console.log(containsNearbyDuplicate(nums1, k1));
const nums2 = [1, 0, 1, 1];
const k2 = 1;
console.log(containsNearbyDuplicate(nums2, k2));
const nums3 = [1, 2, 3, 1, 2, 3];
const k3 = 2;
console.log(containsNearbyDuplicate(nums3, k3));








//    5-masala...


function calculateExpression(a, b, c, d) {
    const modul = 1000000007;
    const result = (a * b * c * d) % modul;
    return result;
}
const a = 10;
const b = 144;
const c = 12;
const d = 1098;
console.log(calculateExpression(a, b, c, d));







//   6-masala...


function insertDash(str) {
    const words = str.split(' ');
    const result = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 10) {
            const middleIndex = Math.floor(word.length / 2);
            const dashedWord = word.slice(0, middleIndex) + '-' + word.slice(middleIndex);
            result.push(dashedWord);
        } else {
            result.push(word);
        }
    }
    return result.join(' ');
}
const input1 = 'Assalomu Alaykum Javohir';
console.log(insertDash(input1));
const input2 = 'Robocontest contest';
console.log(insertDash(input2));
const input3 = ' Bilmasvoyta\'tilda';
console.log(insertDash(input3));







//    7-masala...


function getAsciiCode(input) {
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        const asciiCode = char.charCodeAt(0);
        console.log(`ASCII code for '${char}' is ${asciiCode}`);
    }
}
getAsciiCode('Hello');






//   8-masala...


function largestEven(nums) {
    let largestEvenNumber = -1;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 === 0 && num > largestEvenNumber) {
            largestEvenNumber = num;
        }
    }
    return largestEvenNumber;
}
console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13]));
console.log(largestEven([1, 3, 5, 7]));
console.log(largestEven([0, 19, 18973623]));







//    9-masala...


function drawChessboard() {
    const size = 8;
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}
drawChessboard();







//   10-masala...

function calculateFormula(n, k) {
    const numerator = n + Math.pow(2, k - 1);
    const denominator = Math.pow(2, k);
    const result = numerator / denominator;
    return result;
}
const n = 5;
const k = 2;
const formulaResult = calculateFormula(n, k);
console.log(formulaResult);






//  Bonus...



function insertWhitespace(str) {
    let result = '';
    let previousChar = '';
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (/[A-Z]/.test(currentChar) && /[a-z]/.test(previousChar)) {
            result += ' ';
        }
        result += currentChar;
        previousChar = currentChar;
    }
    return result;
}
console.log(insertWhitespace("SheWalksToTheBeach"));
console.log(insertWhitespace("MarvinTalksTooMuch"));
console.log(insertWhitespace("TheGreatestUpsetInHistory"));

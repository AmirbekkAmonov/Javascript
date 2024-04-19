//   1-masala...


function getLevel(n) {
    let result = [];
    let base = this.base;

    for (let i = 1; i <= n; i++) {
        result.push(Math.pow(base, i));
    }
    return result;
}

let base = 2;
let boundGetLevel = getLevel.bind({ base });
let n = 4;
let result = getLevel.call({ base }, n);
console.log(result);
n = 5;
result = getLevel.apply({ base }, [n]);
console.log(result);








//    2-masala...

function findShortestWord(sentence) {
    let words = sentence.split(' ');
    let shortestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    return shortestWord;
}
let boundFindShortestWord = findShortestWord.bind(null);

let sentence = "Salom Dunyo!";
let result1 = findShortestWord.call(null, sentence);
console.log(result1);
sentence = "Uyga vazifa bajarildi :)";
result1 = findShortestWord.apply(null, [sentence]);
console.log(result1);






//        3-masala...



function multiplyValues(n) {
    for (let key in this) {
        if (typeof this[key] === 'number') {
            this[key] *= n1;
        }
    }
    return this;
}
let n1 = 5;
let obj = { a: 2, b: 3, c: 4 };

let boundMultiplyValues = multiplyValues.bind(obj, n1);
let result2 = boundMultiplyValues();
console.log(result2);










//    4-masala...


function countDigits() {
    let count = 0;

    for (let i = 0; i < this.length; i++) {
        if (!isNaN(parseInt(this[i]))) {
            count++;
        }
    }
    return count;
}
let boundCountDigits = countDigits.bind("");

// call blan ishlatish
let str = "012Hello123World456";
let result3 = countDigits.call(str);
console.log(`Call: ${result3}`);

// apply bilan ishlatish
result3 = countDigits.apply(str);
console.log(`Apply: ${result3}`);









//      5-masala...



const sumDigits = (...numbers) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return Array.from(String(sum), Number);
};

const boundSumDigits = sumDigits.bind(null);

// call bilan ishlatish
const numbers = [1, 22, 30];
const result4 = sumDigits.call(null, ...numbers);
console.log(result4);
console.log("--------");
// apply bilan ishlatish
const resul = sumDigits.apply(null, numbers);
console.log(resul);








//   6-masala...



function countWordsWithLetterA(str) {
    var words = str.split(" ");
    var count = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].includes("a") || words[i].includes("A")) {
            count++;
        }
    }

    return count;
}

var sentence1 = "Salom Dunyo.Bugun havo juda zo'r";
var result5 = countWordsWithLetterA(sentence1);
console.log(result5); 









//   7-masala...


function findExponent(n2) {
    let exponent = 0;
    
    while (n2 % 2 === 0) {
        n2 = n2 / 2;
      exponent++;
    }
    
    if (n2 !== 1) {
      return "Son 2 ning darajasi emas!";
    } else {
      return exponent;
    }
  }
  
  let n2 = 8;
  let exponent = findExponent(n2);
  if (typeof exponent === "number") {
    console.log("k =", exponent); 
  } else {
    console.log(exponent);
  }


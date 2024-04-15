//   1-masala...

function numberSplit(number) {
    let half = Math.floor(number / 2);
    let otherHalf = Math.ceil(number / 2);
    if (number % 2 !== 0) {
        half = Math.floor(number / 2);
        otherHalf = Math.ceil(number / 2);
    }
    return [half, otherHalf];
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));






//   2-masala...


function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    return sum;
}
console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));
console.log(sumOfCubes([]));






//   3-masala...


function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max];
}
console.log(minMax([1, 2, 3, 4, 5, 6]));



//   4-masala...


function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function findPrimeNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && isPrime(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}
console.log(findPrimeNumber([1, 4, 9, 12, 11, 3]));
console.log(findPrimeNumber([123, 42, 93, 21, 7, 11]));







//   5-masala...

function multiplyElements(arr) {
    let result = arr[0] * arr[1];
    return result;
}
console.log(multiplyElements([3, 4]));
console.log(multiplyElements([2, 4]));





//   6-masala...


function getVowels(arr) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase();
        let vowelWord = '';

        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (vowels.includes(char)) {
                vowelWord += char;
            }
        }
        result.push(vowelWord);
    }
    return result;
}
console.log(getVowels(["Assalomu alaykum", "salom", "Najot ta'lim"]));
console.log(getVowels(["Toshkent"]));





//   7-masala...


function formatPhoneNumber(numbers) {
    let areaCode = numbers.slice(0, 3).join('');
    let firstPart = numbers.slice(3, 6).join('');
    let secondPart = numbers.slice(6).join('');
    return `(${areaCode}) ${firstPart}-${secondPart}`;
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));






//   8-masala...

function spelling(word) {
    let result = [];
    let currentWord = '';

    for (let i = 0; i < word.length; i++) {
        currentWord += word[i];
        result.push(currentWord);
    }
    return result;
}
console.log(spelling("bee"));
console.log(spelling("happy"));
console.log(spelling("eagerly"));





//   9-masala...


function chatroomStatus(users) {
    let count = users.length;

    if (count === 0) {
        return "no one online";
    } else if (count === 1) {
        return users[0] + " online";
    } else if (count === 2) {
        return users[0] + " and " + users[1] + " online";
    } else {
        let moreCount = count - 2;
        return users[0] + ", " + users[1] + " and " + moreCount + " more online";
    }
}
console.log(chatroomStatus([]));
console.log(chatroomStatus(["paRIE_to"]));
console.log(chatroomStatus(["s234f", "mailbox2"]));
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));






//   10-masala...


function countTrue(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));








// BONUS  1-masala...


function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function getPrimeNumbers(arr) {
    let primeNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeNumbers.push(arr[i]);
        }
    }
    return primeNumbers;
}
console.log(getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9]));







// BONUS  2-masala...


function multiply(arr) {
    function multiplyByNumber(number) {
        if (arr.length === 0) {
            return [];
        }
        let multipliedArray = [];
        for (let i = 0; i < arr.length; i++) {
            multipliedArray.push(arr[i] * number);
        }
        return multipliedArray;
    }
    return multiplyByNumber;
}
console.log(multiply([1, 2, 3])(2));
console.log(multiply([4, 6, 5])(10));
console.log(multiply([1, 2, 3])(0));







// BONUS  3-masala...


function findMissingNumbers(nums) {
    let n = nums.length;
    let missingNumbers = [];
    for (let i = 0; i <= n; i++) {
        if (!nums.includes(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
}
console.log(findMissingNumbers([3, 0, 1]));
console.log(findMissingNumbers([9, 6, 4, 2, 3, 5, 7, 0, 1]));
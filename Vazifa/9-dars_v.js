//    1-masala...


function calc(n) {
    return function (m) {
        let result = 0;
        for (let i = 1; i <= n; i++) {
            result += Math.pow(i, m);
        }
        return result;
    }
}
console.log(calc(3)(2));







//   2-masala...


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
function calc(n) {
    return function (m) {
        let result = 0;
        for (let i = n; i <= m; i++) {
            if (isPrime(i)) {
                result += i;
            }
        }
        return result;
    };
}
console.log(calc(1)(10));





//   3-masala...


function isEqual(str1) {
    return function (str2) {
        if (str1.length !== str2.length) {
            return false;
        }
        const charCount = {};
        for (let char of str1) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        for (let char of str2) {
            if (!charCount[char]) {
                return false;
            }
            charCount[char]--;
        }

        return true;
    };
}
console.log(isEqual("abc")("bac"));
console.log(isEqual("apple")("elppaa"));
console.log(isEqual("abcde")("abode"));







//   4-masala...


function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const sequence = fibonacci(n - 1);
        const length = sequence.length;
        sequence.push(sequence[length - 1] + sequence[length - 2]);
        return sequence;
    }
}
const result = fibonacci(14);
console.log(result);





//   5-masala...


function findClosestNumber(arr, m) {
    let closest = null;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (closest === null || Math.abs(num - m) < Math.abs(closest - m)) {
            closest = num;
        }
    }
    return closest;
}
const result1 = findClosestNumber([16, 8, 2, 1, 5, 9, 3], 6);
console.log(result1);
const result2 = findClosestNumber([1, 12, 32, 2, 10, 5, 4], 30);
console.log(result2);




// bonusli misol...

const magic = {
    length(data) {
        return data.length;
    },
    toUpperCase(str) {
        return str.split('').map(char => char.toUpperCase()).join('');
    },
    repeat(data, n) {
        return data.repeat(n);
    },
    count(str) {
        const countMap = {};
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (countMap[char]) {
                countMap[char]++;
            } else {
                countMap[char] = 1;
            }
        }
        return countMap;
    }
};
const result20 = magic.length("Hello, World!");
console.log(result20);
const result30 = magic.toUpperCase("Hello");
console.log(result30);
const result40 = magic.repeat("Hello", 3);
console.log(result40);
const result50 = magic.count("hello world");
console.log(result50);

// bonusli misolni bazi joylarida kamchiliklar bor.
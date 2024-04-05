// 1-masala...


// function getFirstValue(arr) {
//     return arr[0];
//   }
//   console.log(getFirstValue([1, 2, 3]));
//   console.log(getFirstValue([80, 5, 100]));
//   console.log(getFirstValue([-500, 0, 50])); 





//  2-masala... 

// function getOddValue(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(getOddValue([1, 2, 3, 6])); 






//  3-masala...

// function incrementItems(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] + 1);
//     }
//     return result;
// }
// console.log(incrementItems([0, 1, 2, 3]));
// console.log(incrementItems([2, 4, 6, 8])); 







//  4-masala...


// function getLastItem(arr) {
//     return arr[arr.length - 1];
// }
// console.log(getLastItem([1, 2, 3, 5]));





// 5-masala...

// function search(array, target) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] === target) {
//         return i;
//       }
//     }
//     return -1;
//   }
//   console.log(search([1, 5, 3], 5)); 
//   console.log(search([1, 2, 3], 4)); 





//  6-masala...


// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));




// 7-masala...


// function fiftyThirtyTwenty(number) {
//     let expenses = {
//         ilm: number * 0.5,
//         harajat: number * 0.3,
//         kelajak: number * 0.2
//     };
//     return expenses;
// }
// console.log(fiftyThirtyTwenty(10000));





// 8-masala...


// function arrBetween(num1, num2, array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > num1 && array[i] < num2) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])); 




//  9-masala...


// function check(array, num) {
//     return array.includes(num);
// }
// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3)); 



// 10-masala...


// function arrayValuesTypes(array) {
//     let types = [];
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             types.push("array");
//         } else {
//             types.push(typeof array[i]);
//         }
//     }
//     return types;
// }
// console.log(arrayValuesTypes([1, 2, "salom"])); 







//  Qo'shimcha topshiriq. Faktorial...


// function trailingZeros(n) {
//     let count = 0;
//     let i = 5;
//     while (n / i >= 1) {
//         count += Math.floor(n / i);
//         i *= 5;
//     }
//     return count;
// }
// console.log(trailingZeros(0));     
// console.log(trailingZeros(81));     
// console.log(trailingZeros(1000));  




//  Qo'shimcha topshiriq. Tub sonlar...

// function primeNumbers(n) {
//     const primes = [];

//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) {
//             primes.push(i);
//         }
//     }

//     return primes;
// }
// function isPrime(num) {
//     for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return num > 1;
// }
// console.log(primeNumbers(10));  
// console.log(primeNumbers(20)); 
// console.log(primeNumbers(30)); 
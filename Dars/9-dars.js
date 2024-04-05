// function arrayOfMultiples(num) {
//     function a(num1) {
//         let arr = [];
//         for (let i = 1; i < num1; i++) {
//             arr.push(i * num);
//         }
//         return arr
//     }
//     return a;
// }
// let num = 7;
// let num1 = 5;
// console.log(arrayOfMultiples(num)(num1));





// function func(arr) {
//     function name(num) {
//         for (let i = 0; i < arr.length; i++) {
//             arr[i] *= num
//         }
//         return arr;
//     }
//     return name
// }
// let arr = [1, 2, 3, 4, 5];
// let num = 4;
// console.log(func(arr)(num));








// function polindrom(str) {
//     function a(str1) {
//         let len = str1.length;
//         for (let i = 0; i < str; i++) {
//             if (str[i] == str1[len - 1 - 1]) {
//                 continue;
//             } else {
//                 return false;
//             }
//         }
//         return true;
//     }
//     return a;
// }
// let str = 'aplle';
// let str1 = 'ellpa'
// console.log(polindrom(str)(str1));





// function Harf(str) {
//     function katta(str1) {
//         function a(str2) {
//             for (let i = 0; i < str.length; i++) {
//                 if (str[i]= str1) {
//                     str[i]= str2;
//                 }
//             }
//             return str;
//         }
//         return a;
//     }
//     return katta;
// }
// let str = 'salom dunyo nimadur';
// let str1 = 'a';
// let str2 = 'A';
// console.log(Harf(str)(str1)(str2));








// function salomat(str) {
//     let str1 = "";
//     for (let i = 0; i < Math.floor(str.length / 2); i++) {
//         str1 += str[i];
//         str1 += str[str.length - 1 - i];
//     }
//     if (str.length % 2) {
//         str1 += str[Math.floor(str.length / 2)];
//     }
//     return str1;
// }
// let str = 'salomat';
// console.log(salomat(str));



















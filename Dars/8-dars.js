// function recurse(num) {
//     if (num < 1) {
//         return 1;
//     }
//     else {
//         return num * recurse(num - 1);
//     }
// }
// let num = 5;
// console.log(recurse(num));




// function max(array) {
//     let minelement = Number.MAX_SAFE_INTEGER;
//     let maxelement = Number.MIN_SAFE_INTEGER;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < minelement) {
//             minelement = array[i];
//         }
//         if (array[i] > maxelement) {
//             maxelement = array[i];
//         }
//     }
//     return `Min:${minelement}\nMax:${maxelement}`
// }
// let array = [1, 2, 3, 4, 5, 7, 5, 3, 5, 8, 2345, 765]
// console.log(max(array));





// function yigindi(num) {
//     let array = String(num).split('');
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (num >= 0) {
//             sum += Number(array[i]);
//         } else {
//             console.log("Xato");
//             break;
//         }
//     }
//     return sum;
// }
// let num = -901;
// console.log(yigindi(num));







// function yosh(ota, bola) {
//     let yil = 0;
//     if (bola * 2 > ota) {
//         while (true) {
//             if (bola * 2 == ota) {
//                 return yil;
//             }
//             bola--;
//             yil--;
//             ota--;
//         }
//     } else {
//         while (true) {
//             if (bola * 2 == ota) {
//                 return yil;
//             }
//             bola++;
//             yil++;
//             ota++;
//         }
//     }
// }
// let ota = 39;
// let bola = 20;
// console.log(yosh(ota, bola));











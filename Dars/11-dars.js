// function detectWord(str) {
//     let str1 = ''
//     for (let i = 0; i < str.length; i++) {
//         if (97 <= str[i].charCodeAt(0) && str[i].charCodeAt(0) <= 122) {
//             str1 += str[i];
//         }
//     }
//     return str1;
// }
// let str = "UFUDFNdfdfIRGNVssSDFVdsfFSDFDad";
// console.log(detectWord(str));







// function fixImport(str) {
//     str = str.split(" ")
//     str1 = '';
//     str1 = str1 + str[2] + ' ',
//         str1 = str1 + str[3] + ' ',
//         str1 = str1 + str[0] + ' ',
//         str1 = str1 + str[1]
//     return str1
// }
// let str = "import object from module_name"
// console.log(fixImport(str));







// function truncate(str, maxlength) {
//     if (str.lenght <= maxlength) {
//         return str;
//     }
//     else {
//         return str.slice(0, maxlength) + '...';
//     }
// }
// let str = "Salom dunyo!";
// let maxlength = 7;
// console.log(truncate(str, maxlength));







// function defineCritics(...args) {
//     console.log(Math.max(...args));
//     console.log(Math.min(...args));
// }

// defineCritics(1, 2, 3, 4, 5, 3, 7, 5, 9, 7, 3);








function rondInt(start, end) {
    if (start == end) {
        return null
    }
    while (true) {
        let sum = Math.random();
        let kop = String(end).length;
        sum = Math.floor(sum * (10 ** kop));
        if (sum > start && sum < end) {
            return sum;
        } else {
            if (end - start == 1 && (sum == start || end)) {
                return null
            }
        }
    }
}
console.log(rondInt(9354, 3087654));




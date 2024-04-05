//    1-masala...


function yigindi(num) {
    let array = String(num).split('');
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (num >= 0) {
            sum += Number(array[i]);
        } else {
            console.log("Xato");
            break;
        }
    }
    return sum;
}
let num = 901;
console.log(yigindi(num));





//    2-masala...


function yosh(ota, bola) {
    let yil = 0;
    if (bola * 2 > ota) {
        while (true) {
            if (bola * 2 == ota) {
                return yil;
            }
            bola--;
            yil--;
            ota--;
        }
    } else {
        while (true) {
            if (bola * 2 == ota) {
                return yil;
            }
            bola++;
            yil++;
            ota++;
        }
    }
}
let ota = 39;
let bola = 20;
console.log(yosh(ota, bola));







//   3-masala...


function decimalToBinary(decimal) {
    let binary = "";

    while (decimal > 0) {
        let remainder = decimal % 2;
        binary = remainder + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}
console.log(decimalToBinary(5));
console.log(decimalToBinary(14));






//   4-masala...


function mergeAndSortArrays(arr1, arr2) {
    var mergedArray = arr1.concat(arr2);
    mergedArray.sort(function (a, b) {
        return a - b;
    });
    return mergedArray;
}
console.log(mergeAndSortArrays([8, 3, 6], [1, 10]));
console.log(mergeAndSortArrays([100], [11, 9, 16, 30, 19]));






//   5-masala...


function hasSwearWords(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.includes(arr1[i])) {
            return true;
        }
    }
    return false;
}
console.log(hasSwearWords(["salom", "dunyo", "yaramas"]));
console.log(hasSwearWords(["ablah", "yaramas"]));




//   6-masala...



function encryptWord(word) {
    //So'zni teskari qilish
    let reversedWord = word.split('').reverse().join('');
    //Unlilarni almashtirish
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let encryptedWord = '';

    for (let i = 0; i < reversedWord.length; i++) {
        let char = reversedWord[i];
        if (vowels.includes(char.toLowerCase())) {
            encryptedWord += '0';
        } else {
            encryptedWord += char;
        }
    }
    //"eca" qo'shish
    encryptedWord += 'eca';
    return encryptedWord;
}
console.log(encryptWord('banana'));
console.log(encryptWord('burak'));










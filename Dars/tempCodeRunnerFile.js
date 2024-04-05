
function salomat(str) {
    let str1 = '';
    let num = 0;
    for (let i = 0; i < str.length / 2; i++) {
        str1 += str[i];
        str1 += str1[str1 - 1 - num];
        num++;
    }
    return str1;
}
let str = 'salomat';
console.log(salomat(str));
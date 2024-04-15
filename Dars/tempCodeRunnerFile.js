
function Indeks(str) {
    if (str.length > 3) {
        const [,,,a] = str
        return a
    } else {
        return "Null"
    }
}
let str = "salom";
console.log(Indeks(str));
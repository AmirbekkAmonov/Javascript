let abc = {
    a: 1,
    b: 2,
    c: 3
}
let a = JSON.stringify(abc)
console.log(a);
const b = JSON.parse(a)
console.log(b);





const obj = { name: "Holiq", age: 18, location: "Buxoro" }
const { name, age, location } = obj
console.log(name, age, location);







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


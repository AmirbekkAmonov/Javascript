//   1-masala...


function sortObjectsByPrice(drinks) {
    let narxlar = [];
    for (let i = 0; i < drinks.length; i++) {
        narxlar.push(drinks[i].price);
    }
    narxlar.sort(function (a, b) {
        return a - b
    });
    let newDrinks = [];
    for (let i = 0; i < narxlar.length; i++) {
        for (let j = 0; j < drinks.length; j++) {
            if (narxlar[i] === drinks[j].price) {
                newDrinks.push(drinks[j])
            }
        }
    }
    return newDrinks;
}
let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
];
console.log("Natija:", sortObjectsByPrice(drinks));






//   2-masala...


function objectToArray(obj) {
    return Object.entries(obj);
}
let obj1 = {
    A: 1,
    B: 2,
    C: 3
};
let obj2 = {
    likes: 2,
    dislikes: 3,
    followers: 10
};
console.log(objectToArray(obj1));
console.log(objectToArray(obj2));






//    3-masala...


let names = [];
let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
];
for (let { name } of users) {
    names.push(name);
}
console.log(names);






//   4-masala...



function afterYears(obj, yil) {
    for (let key in obj) {
        obj[key] = obj[key] + yil;
    }
    return obj;
}
let obj = {
    Akmal: 29,
    Ahror: 36,
    Vali: 29,
    Qosim: 59,
    Laziz: 13,
};
let yil = 2;
console.log("Natija:", afterYears(obj, yil));
console.log(
);
let obj1 = {
    Joel: 43,
    Fred: 35,
    Reginald: 56,
    Susan: 36,
    Julian: 24,
};
let year = 2;
console.log("Natija:", afterYears(obj1, year));






// let obj = {
//     firstName: "Azizbek",
//     lastName: "Valiyev",
//     fullName(age) {
//         console.log(`${this.firstName} ${this.lastName} ${age}`);
//     },
//     logThis() {
//         console.log(this);
//     }
// }
// let obj2 = {
//     firstName: "Behruz",
//     lastName: "Azamov",
// }

// console.log(obj.logThis());
// console.log("####################################");

// obj.fullName.call(obj2, 12)
// obj.logThis.call(obj2)









let Person = {
    name: "Ali",
    age: 19,
    lastName: "Aliyev",

    fullName(gender) {
        console.log(`${this.name} ${this.lastName} ${this.age} ${gender}`);
    }
}
Person.fullName.call(Person, 12)









let abortController = new AbortController();

setTimeout(() => {
    abortController.abort();
}, 100);

async function loadData() {
    try {
        let data = await fetch("https://lsonplaceholder.typicode.com/todos/", {
            signal: abortController.signal
        });


    } catch (err) {
        console.log(err);
    }
}
loadData();

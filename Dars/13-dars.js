// const Contact = {
//     contacts: new Map(),
//     cread(personData) {
//         const id = this.contacts.size + 1
//         this.contacts.set(id, personData)
//         return id
//     },
//     read(id) {
//         if (this.contacts.has(id)) {
//             return this.contacts.get(id)
//         } else {
//             ("Mvjud bo'lmagan raqam")
//         }
//     },
//     update(id, personData) {
//         if (this.contacts.has(id)) {
//             new Set(this.contacts.set(id, personData));
//             return this.contacts
//         }
//     },
//     delete(id) {
//         if (this.contacts.has(id)) {
//             this.contacts.delete(id)
//             return this.contacts.delete.id
//         }

//     }
// }

// Contact.cread({
//     ism: "Vali",
//     tel: "998777777777",
//     mail: "Vali@gmail.com"
// })
// Contact.cread({
//     ism: "Ali",
//     tel: "998999999999",
//     mail: " Ali@gmail.com"
// })
// // console.log(Contact.contacts);


// // console.log(Contact.read(1));


// // console.log(Contact.update(1, {
// //     ism: "G'ali",
// //     tel: "99877666667",
// //     mail: "G'ali@gmail.com"
// // }));

// console.log(Contact.delete(1));








// let map = new Map([
//     ["price1", 12],
//     ["price2", 2],
//     ["price3", 22],
//     ["price4", 123],
//     ["price5", 123]
// ]);

// let sum = 0;
// for (let key of map) {
//     sum += key[1];
// }
// console.log(sum);








// let map = new Map([
//     ["price1", ["Salom", "Dunyo"]],
//     ["price2", ["Assalomu", "Alaykum"]],
//     ["price3", ["Polov", "Osh"]],
// ])
// for (let key of map) {
//     let arr = [key[0], key[1][0][0] + key[1][1][0]]
//     console.log(arr);
// }






function array1(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        let array = []
        arr.push(i)
        for (let j = i; j < num; j++) {
            array.push(j + i)
        }
        return array
    }
}
console.log(array1(5));

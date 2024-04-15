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
        const [, , , a] = str
        return a
    } else {
        return "Null"
    }
}
let str = "salom";
console.log(Indeks(str));






const users = [
    {
        intro: {
            fistname: "Solih",
            lastname: "Abdullayev",
        },
        age: 24,
        addess: ["Toshkent, Yashnabod", "Samarqand, Mikrayon"],
        contact: {
            email: "samad@gmail.com",
            social: {
                telegram: "@samad001",
                instagram: "@samad1k",
            },
            phone: ["+99 899 811 22 10", "+99 899 811 22 12"],
        },
        extra_info: {
            father: "Halim Abdullayev",
        },
    },
    {
        intro: {
            fistname: "Jamol",
        },
        contact: {
            email: "jamol@gmail.com",
            phone: ["+99 890 500 11 11"],
        },
        addess: ["Toshkent, Yunusobod"],
    },
];
for (let i = 0; i < users.length; i++) {
    console.log(users[i].addess[1]);
}

for (let i = 0; i < users.length; i++) {
    console.log(users[i].contact.social?.telegram);  
}







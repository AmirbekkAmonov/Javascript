//     1-masala...


const URL = "https://handlers.education.launchcode.org/static/planets.json"

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Xatolik yuz berdi:', error);
    });







//      2-masala...


const people = [
    { name: "Ali", birthYear: 1900, deathYear: 1980 },
    { name: "Vali", birthYear: 1920, deathYear: 1995 },
    { name: "Hasan", birthYear: 1915, deathYear: 2005 },
    { name: "Husan", birthYear: 1905, deathYear: 1960 }
];

function findOldestPerson(people) {
    let oldestPerson = null;
    let maxAge = -Infinity;
    for (let person of people) {
        const age = person.deathYear - person.birthYear;

        if (age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
}
const oldestPerson = findOldestPerson(people);
console.log(oldestPerson);






//   3-masala...



async function getAuthorData(userId) {
    try {
        const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await responseUser.json();

        const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await responsePosts.json();

        console.log(`Author: ${user.name}`);
        console.log(`City: ${user.address.city}`);
        console.log(`Company: ${user.company.name}`);

        console.log("Titles of Posts:");
        posts.forEach(post => {
            console.log(post.title);
        });
    } catch (error) {
        console.log('Xatolik yuz berdi:', error);
    }
}
const userId = 1;
getAuthorData(userId);







//     4-masala...




fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {
        const justIdTodos = todos.filter(todo => todo.id === 4);
        console.log(justIdTodos);
    })
    .catch(error => {
        console.log('Xatolik yuz berdi:', error);
    });








//    5-masala...



class Product {
    constructor(nomi, miqdori, narxi) {
        this.nomi = nomi;
        this.miqdori = miqdori;
        this.narxi = narxi;
    }
    get productInfo() {
        return `Product nomi: ${this.nomi}, miqdori: ${this.miqdori}, narxi: ${this.narxi}`;
    }
    set setPrice(narx) {
        this.narxi = narx;
    }
}


function FindAllMethods(obj) {
    const methods = [];
    for (let key in obj) {
        if (typeof obj[key] === "function") {
            methods.push(key);
        }
    }
    return methods;
}


function InvertKeyValue(obj) {
    const invertedObj = {};
    for (let key in obj) {
        invertedObj[obj[key]] = key;
    }
    return invertedObj;
}


const product = new Product("Telefon", 1, 1000);

console.log(product.productInfo);

product.setPrice = 1500;

console.log(product.productInfo);

console.log(FindAllMethods(product));

console.log(InvertKeyValue({ red: "qizil", green: "yashil" }));

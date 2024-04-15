//    1-masala...


function transformString(input) {
    const words = input.split(" ");
    const transformedWords = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let transformedWord = word;
        if (word.length >= 3) {
            const firstChar = word[0];
            const lastChar = word[word.length - 1];
            const middleChars = word.slice(1, -1);
            const transformedMiddle = middleChars.length;
            transformedWord = `${firstChar}${transformedMiddle}${lastChar}`;
        }
        transformedWords.push(transformedWord);
    }
    return transformedWords.join(" ");
}
const input = "Every developer likes to mix kubernetes and javascript";
const result = transformString(input);
console.log(result);









//    2-masala...


function calculateAverage(scores) {
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}
function findTopStudents(students) {
    let topAverage = 0;
    const topStudents = [];
    students.forEach((student) => {
        const average = calculateAverage(student.scores);
        if (average > topAverage) {
            topAverage = average;
            topStudents.length = 0;
            topStudents.push({ name: student.name, average: average });
        } else if (average === topAverage) {
            topStudents.push({ name: student.name, average: average });
        }
    });
    return topStudents;
}
const students = new Set([
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
]);
const topStudents = findTopStudents(students);
console.log(topStudents);






//    3-masala...


function calculate(employees) {
    if (employees.length === 0) {
        return 0;
    }
    let totalSalary = 0;
    employees.forEach((employee) => {
        totalSalary += employee.salary;
    });
    return totalSalary / employees.length;
}
function SalaryDepartment(employees) {
    if (employees.size === 0) {
        console.log("Xodimlar to'plami bo'sh.");
        return [];
    }
    const departmentSalaries = new Map();
    employees.forEach((employee) => {
        if (!departmentSalaries.has(employee.department)) {
            departmentSalaries.set(employee.department, []);
        }
        departmentSalaries.get(employee.department).push(employee);
    });
    let highestAverage = 0;
    let highestDepartment = "";
    departmentSalaries.forEach((employees, department) => {
        const averageSalary = calculate(employees);
        if (averageSalary > highestAverage) {
            highestAverage = averageSalary;
            highestDepartment = department;
        }
    });
    return [{ department: highestDepartment, average: highestAverage }];
}
const employees = new Set([
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" }
]);
const AverageSalaryDepartment = SalaryDepartment(employees);
console.log(AverageSalaryDepartment);







//    4-masala...



function Languages(countries, numLanguages) {
    const languageArray = Array.from(countries);
    languageArray.sort((a, b) => b[Object.keys(b)[0]] - a[Object.keys(a)[0]]);
    const topLanguages = languageArray.slice(0, numLanguages);
    return topLanguages;
}
const countries = new Set([
    { Russian: 9 },
    { English: 91 },
    { French: 45 },
    { Spanish: 24 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Arabic: 25 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
]);
console.log(Languages(countries, 3));







//    5-masala...


function Book() {
    const books = new Map();
    return {
        create: function (title, author, read) {
            const id = Symbol();
            books.set(id, { title, author, read });
            return id;
        },
        findOne: function (id) {
            return books.get(id) || null;
        },
        findAll: function () {
            return Array.from(books.values());
        },
        filterByAuthor: function (author) {
            return Array.from(books.values()).filter((book) => book.author === author);
        },
        filterByReadStatus: function (read) {
            return Array.from(books.values()).filter((book) => book.read === read);
        },
        deleteOne: function (id) {
            return books.delete(id);
        },
        deleteMany: function () {
            books.clear();
            return Array.from(books.values());

        },
    };
}
const collection = Book();

const book1 = collection.create('The Hobbit', 'J.R.R. Tolkien', false);
const book2 = collection.create('Harry Potter', 'J.K. Rowling', true);
const book3 = collection.create('1984', 'George Orwell', true);

console.log(collection.findOne(book1));                       // id orqali qidirish

console.log(collection.findAll());                            // Barcha ma'lumotlarni chiqarish

console.log(collection.filterByAuthor('J.K. Rowling'));       // Aftor bo'yicha izlash

console.log(collection.filterByReadStatus(true));             // O'qilgan kitoblar ro'yxati

console.log(collection.deleteOne(book2));                     // Id bo'yicha O'chirish

console.log(collection.deleteMany());                         // Barcha ma'lumotni o'chirish








//    6-masala...


function afterNYears(people, n) {
    const updatedPeople = {};

    for (let person in people) {
        if (people.hasOwnProperty(person)) {
            updatedPeople[person] = people[person] + Math.abs(n);
        }
    }
    return updatedPeople;
}
const people = {
    John: 30,
    Jane: 25,
    Bob: 40
};

console.log(afterNYears(people, 5));

console.log(afterNYears(people, -3));








//     7-masala...


function removeEntry(items, itemToRemove) {
    var updatedItems = { ...items };
    delete updatedItems[itemToRemove];
    return updatedItems;
}
console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));

console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"));









//    8-masala...


const scores = new Map([
    ["A", 100],
    ["B", 14],
    ["C", 9],
    ["D", 28],
    ["E", 145],
    ["F", 12],
    ["G", 3],
    ["H", 10],
    ["I", 200],
    ["J", 100],
    ["K", 114],
    ["L", 100],
    ["M", 25],
    ["N", 450],
    ["O", 80],
    ["P", 2],
    ["Q", 12],
    ["R", 400],
    ["S", 113],
    ["T", 405],
    ["U", 11],
    ["V", 10],
    ["W", 10],
    ["X", 3],
    ["Y", 210],
    ["Z", 23]
]);

function nameScore(name) {
    let totalScore = 0;
    for (let i = 0; i < name.length; i++) {
        let letter = name[i].toUpperCase();
        if (scores.has(letter)) {
            totalScore += scores.get(letter);
        }
    }
    if (totalScore <= 60) {
        return "NOT TOO GOOD";
    } else if (totalScore <= 300) {
        return "PRETTY GOOD";
    } else if (totalScore <= 599) {
        return "VERY GOOD";
    } else {
        return "THE BEST";
    }
}

console.log(nameScore("MUBASHIR"));

console.log(nameScore("YOU"));

console.log(nameScore("MATT"));

console.log(nameScore("PUBG"));










//      BONUS...


function determineWinnerOfFight(rounds) {
    let myScore = 0;
    let spouseScore = 0;

    for (let [round, scores] of rounds) {
        myScore += scores.me;
        spouseScore += scores.spouse;
    }
    if (myScore > spouseScore) {
        if (myScore > rounds.size / 2) {
            return "MEN!";
        } else {
            return "HECH KIM!";
        }
    } else if (spouseScore > myScore) {
        if (spouseScore > rounds.size / 2) {
            return "TURMUSH O'RTOG'IM!";
        } else {
            return "HECH KIM!";
        }
    } else {
        return "HECH KIM!";
    }
}

let map1 = new Map([
    ["round1", { me: 10, spouse: 5, }],
    ["round2", { me: 5, spouse: 20, }],
    ["round3", { me: 10, spouse: 10, }],
]);

let map2 = new Map([
    ["round1", { me: 40, spouse: 5 }],
    ["round2", { me: 9, spouse: 10 }],
    ["round3", { me: 9, spouse: 10 }],
]);

let map3 = new Map([
    ["round1", { me: 40, spouse: 5 }],
    ["round2", { me: 9, spouse: 40 }],
    ["round3", { me: 1, spouse: 5 }],
]);

console.log(determineWinnerOfFight(map1));            // "TURMUSH O'RTOG'IM!"
console.log(determineWinnerOfFight(map2));            // "MEN!"
console.log(determineWinnerOfFight(map3));            // "HECH KIM!"










//     1-masala...


class BookList {
    constructor() {
        this.books = [];
        this.favoriteBook = "";
    }
    addBook(title, author) {
        const book = { title, author };
        this.books.push(book);
    }
    setFavoriteBook(title) {
        this.favoriteBook = title;
    }
    getBooksList() {
        this.books.forEach(book => {
            console.log(`Kitob nomi, muallif: ${book.title}, ${book.author}`);
        });
    }
    getFavoriteBook() {
        console.log(this.favoriteBook);
    }
}
const bookList = new BookList();

bookList.addBook("To Kill a Mockingbird", "Harper Lee");
bookList.addBook("1984", "George Orwell");

bookList.getBooksList();

bookList.setFavoriteBook("1984");
bookList.getFavoriteBook();






//    2-masala...


class PascalTriangle {
    static getRow(n) {
        let row = [1];
        for (let i = 1; i < n; i++) {
            const nextRow = [];
            nextRow.push(1);
            for (let j = 1; j < i; j++) {
                nextRow.push(row[j - 1] + row[j]);
            }
            nextRow.push(1);
            row = nextRow;
        }
        return row;
    }
    static printTriangle(n) {
        for (let i = 0; i < n; i++) {
            const row = PascalTriangle.getRow(i + 1);
            const spaces = ' '.repeat(n - i - 1);
            const rowString = spaces + row.join(' ');
            console.log(rowString);
        }
    }
}
const n = 5;
PascalTriangle.printTriangle(n);











//      3-masala...


class Magic {
    replace(a, b) {
        return a.replace(a, b);
    }
    length(data) {
        return data.length;
    }
    toUpperCase(str) {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            result += char.toUpperCase();
        }
        return result;
    }
    repeat(data, n) {
        return data.repeat(n);
    }
    count(str) {
        const counts = {};
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (counts[char]) {
                counts[char]++;
            } else {
                counts[char] = 1;
            }
        }
        return counts;
    }
}
const magic = new Magic();
console.log(magic.replace("Hello", "Hi"));
console.log(magic.length("Hello"));
console.log(magic.toUpperCase("Hello"));
console.log(magic.repeat("Hello", 3));
console.log(magic.count("hello world"));









//     4-masala...


class BankAccount {
    constructor(ownerName, accountNumber) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} to ${this.accountNumber}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log(`insufficient funds ${this.accountNumber}`);
        }
    }
    showBalance() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ${this.balance}`);
    }
}

const account1 = new BankAccount("Jek", "1234567890");
const account2 = new BankAccount("Smit", "0987654321");

account1.deposit(1000);
account1.withdraw(500);
account1.showBalance();

account2.deposit(2000);
account2.withdraw(3000);
account2.showBalance();










//       5-masala...


class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        const area = Math.PI * Math.pow(this.radius, 2);
        return area;
    }
    getPerimeter() {
        const perimeter = 2 * Math.PI * this.radius;
        return perimeter;
    }
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log("Circle 1");
console.log("Area:", circle1.getArea());
console.log("Perimeter:", circle1.getPerimeter());

console.log("Circle 2");
console.log("Area:", circle2.getArea());
console.log("Perimeter:", circle2.getPerimeter());











//    7-masala...



class Box {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    getVolume() {
        return this.length * this.width * this.height;
    }
}
function totalVolume(boxes) {
    let total = 0;
    for (let i = 0; i < boxes.length; i++) {
        total += boxes[i].getVolume();
    }
    return total;
}

const box1 = new Box(2, 3, 4);
const box2 = new Box(1, 2, 3);
const box3 = new Box(3, 4, 5);
const boxes = [box1, box2, box3];
console.log(totalVolume(boxes));
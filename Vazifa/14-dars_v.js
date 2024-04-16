// 1-masala...:  To-Do List Loyihas

let TodoList = {
    tasks: [],
    addTask: function (task) {
        this.tasks.push(task);
    },
    removeTask: function (index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    },
    printTasks: function () {
        this.tasks.forEach(function (task, index) {
            console.log(index + 1 + ". " + task);
        });
    }
};
TodoList.addTask("Buy groceries");
TodoList.addTask("Do laundry");
TodoList.addTask("Call a friend");

TodoList.printTasks();

TodoList.removeTask(1);

TodoList.printTasks();









// 2-masala... : Kirim va Chiqimlar

let Expenses = {
    water: 0,
    gas: 0,
    electricity: 0,
    addExpense: function (type, amount) {
        this[type] += amount;
    },
    removeExpense: function (type, amount) {
        this[type] -= amount;
        if (this[type] < 0) {
            this[type] = 0;
        }
    },
    printMonthlyReport: function () {
        console.log("Monthly Report:");
        console.log("Water: $" + this.water);
        console.log("Gas: $" + this.gas);
        console.log("Electricity: $" + this.electricity);
    }
};

Expenses.addExpense("water", 50);
Expenses.addExpense("gas", 30);
Expenses.addExpense("electricity", 40);

Expenses.printMonthlyReport();

Expenses.removeExpense("gas", 10);

Expenses.printMonthlyReport();






// 3-masala...: Oylik Hisobot


let Expen = {
    water: 0,
    gas: 0,
    electricity: 0,
    addExpense: function (type, amount) {
        this[type] += amount;
    },
    removeExpense: function (type, amount) {
        this[type] -= amount;
        if (this[type] < 0) {
            this[type] = 0;
        }
    },
    printMonthlyReport: function () {
        console.log("Monthly Report:");
        console.log(`Suv uchun oylik xarajat: $${this.water}`);
        console.log(`Gaz uchun oylik xarajat: $${this.gas}`);
        console.log(`Elektr energiyasi uchun oylik xarajat: $${this.electricity}`);

        let total = this.water + this.gas + this.electricity;
        console.log("Umumiy oylik xarajat: $" + total);
    }
};
Expen.addExpense("water", 50);
Expen.addExpense("gas", 30);
Expen.addExpense("electricity", 40);

Expen.printMonthlyReport();




//    4-masala...:  Harflar va Raqamlarni Hisoblash


function countAll(text) {
    let result = {
        "HARFLAR": 0,
        "RAQAMLAR": 0
    };

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (/[a-zA-Z]/.test(char)) {
            result["HARFLAR"]++;
        } else if (/[0-9]/.test(char)) {
            result["RAQAMLAR"]++;
        }
    }
    return result;
}
console.log(countAll("Hello World"));
console.log(countAll("H3ll0 Wor1d"));
console.log(countAll("149990"));






//    5-masala...:  Memorial Day uchun xarid qilish!


function checkout(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let itemTotal = item.prc * item.qty;
        if (item.taxable) {
            itemTotal += itemTotal * 0.06;
        }
        total += itemTotal;
    }
    return total;
}
console.log(
    checkout([
        { desc: "kartoshka chipslari", prc: 2, qty: 2, taxable: false },
        { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
        { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
    ])
);





//    6-masala...:  Raqam va Harf!


function numInStr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        if (/\d/.test(str)) {
            result.push(str);
        }
    }
    return result;
}
console.log(numInStr(["1a", "a", "2b", "b"])); 
console.log(numInStr(["abc", "abc10"])); 
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); 
console.log(numInStr(["this is a test", "test1"]));
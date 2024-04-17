// function Salomlash(a) {
//     a()
// }
// function b() {
//     console.log("Hello!");
// }
// Salomlash(b)











let  shopMIxin = {
    getName(){
        return this.name;
    },
    getPrice(){
        return this.price; 
    },
    getWeight(){
        return this.weight;
    },
};

class Fruits {
    constructor (name,price,weight){
        this.name = name;
        this.price = price;
        this.weight = weight;
    }
}

class vegetable {
    constructor (name,price,weight){
        this.name = name;
        this.price = price;
        this.weight = weight;
    }
}
Object.assign(vegetable.prototype, shopMIxin);
const sabzi = new vegetable("Sabzi", 5000,"15 kg");


Object.assign(Fruits.prototype, shopMIxin);
const olma = new Fruits("Olma", 15000,"5 kg");
console.log(olma.getWeight());










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


  // Key va value larni almashtiruvchi funksiya
  console.log(InvertKeyValue({ red: "qizil", green: "yashil" }));
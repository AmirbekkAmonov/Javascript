
function findExponent(n2) {
    let exponent = 0;
    
    while (n2 % 2 === 0) {
        n2 = n2 / 2;
      exponent++;
    }
    
    if (n2 !== 1) {
      return "Son 2 ning darajasi emas";
    } else {
      return exponent;
    }
  }
  
  let n2 = 10;
  let exponent = findExponent(n2);
  if (typeof exponent === "number") {
    console.log("k =", exponent); 
  } else {
    console.log(exponent);
  }


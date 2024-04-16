


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
  
  // Box obyektlarini yaratish
  const box1 = new Box(2, 3, 4);
  const box2 = new Box(1, 2, 3);
  const box3 = new Box(3, 4, 5);
  
  // totalVolume funktsiyasini testlash
  const boxes = [box1, box2, box3];
  console.log(totalVolume(boxes)); // 74
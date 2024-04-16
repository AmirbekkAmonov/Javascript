class Math {
    add(a, b) {
        return a + b
    }
    sub(a, b) {
        return a - b
    }
    multply(a, b) {
        return a * b
    }
    div(a, b) {
        return a / b
    }
    pow(a, b) {
        return a ** b
    }
}
const math = new Math()
console.log(math.pow(5, 6));







class Employee {
    constructor(ism,familya,yosh,email){
    this.ism = ism
    this.familya = familya
    this.yosh = yosh
    this.email = email
    }
    tostring(){
        return `${this.familya} ${this.ism} ${this.yosh} \nEmail:${this.email}`
    }
    getInfo(){
        
    }
}
const employee = new Employee("Amirbek","Amonov",19,"amirbek@gamil.com")
console.log(employee.tostring());


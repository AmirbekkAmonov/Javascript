
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
}
const employee = new Employee("Amirbek","Amonov",19,"amirbek@gamil.com")
console.log(employee.tostring());
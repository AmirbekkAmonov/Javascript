


let Person = {
    name: "Ali",
    age: 19,
    lastName:"Aliyev",

    fullName(gender){
        console.log(`${this.name} ${this.lastName} ${this.age} ${gender}` );
    }
}
Person.fullName.call(Person, 12 )


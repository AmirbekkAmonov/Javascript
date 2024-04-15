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

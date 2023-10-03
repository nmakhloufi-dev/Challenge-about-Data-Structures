let person1 ={
    name: "Jason",
    age : 35,
    email: "jason@jsfor.com"
}
let person2 ={
    name: "Alicia",
    age : 55,
    email: "Alice@outlook.com"
}
let person3 ={
    name: "Carrie",
    age : 29,
    email: "carrie@dupont.com"
}
let people = [person1, person2, person3];
function filterPeopleOver30(peopleArr) {
  return peopleArr.filter(person => person.age > 30);
}

let peopleOver30 = filterPeopleOver30(people);

console.log(peopleOver30);
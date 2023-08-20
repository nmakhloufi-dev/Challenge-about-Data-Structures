//1
//function evenNumbers (array){
  //  return array.filter(number => number % 2 ===0)
//}
//let numbersArray = [1,2,3,4,5,6,7,8]
//let evenArray = evenNumbers(numbersArray)
//console.log(evenArray)


//2
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


//function filterPeopleOver30(peopleArray) {
 //   let filteredPeople = [];

  //  for (let i = 0; i < peopleArray.length; i++) {
    //    if (peopleArray[i].age > 30) {
    //        filteredPeople.push(peopleArray[i]);
    //    }
    //}

    //return filteredPeople;
//}

//let peopleOver30 = filterPeopleOver30(people);
//console.log(peopleOver30);

//3
//let stack = [];

//stack.push(person1);
//stack.push(person2);
//stack.push(person3);

//let peopleOver30 = [];
//while (stack.length > 0) {
 //   let person = stack.pop();
   // if (person.age > 25) {
    //    peopleOver30.push(person);
   // }
//}
//console.log(peopleOver30);

//4
//let queue = [];

//queue.push(person1);
//queue.push(person2);
//queue.push(person3);

//let peopleOver30 = [];
//while (queue.length > 0) {
//    let person = queue.shift();  // Retirer l'élément de l'avant
//    if (person.age > 30) {
//        peopleOver30.push(person);
//    }
//}

//console.log(peopleOver30);

 //5
 //function removeVowels(str) {
  //  const vowels = "aeiouAEIOU";
  //  let result = "";

   // for (let i = 0; i < str.length; i++) {
   //     if (vowels.indexOf(str[i]) === -1) {
     //       result += str[i];
       // }
    //}

    //return result;
//}

//let filteredPeople = people.map(person => ({
  //  ...person,
  //  name: removeVowels(person.name),
  //  email: removeVowels(person.email)
//}));
//console.log(filteredPeople);

//6
//function uniqueElementsFromArray(arr1, arr2) {
  // const combinedArray = arr1.concat(arr2);

  // const uniqueArray = [...new Set(combinedArray)];

  //  return uniqueArray;
//}

//let array1 = [1, 2, 3, 4];
//let array2 = [3, 4, 5, 6];

//let uniqueResult = uniqueElementsFromArray(array1, array2);
//console.log(uniqueResult);

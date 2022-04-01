///////////////////////////////////////////////
//               JS WAY: ARRAYS              //
///////////////////////////////////////////////

// /*
// =============================
// MUSKETEERS
// =============================
// */

// let musketeers = ['Athos', 'Porthos', 'Aramis']

// for (i = 0; i < musketeers.length; i++) {
//   console.log(musketeers[i])
// }

// musketeers.push('D\'Artagnan')

// musketeers.forEach(element => console.log(element))

// musketeers.splice(2,1)

// for (const musketeer of musketeers) {
//   console.log(musketeer)
// }

// /*
// =============================
// SUM OF VALUES
// =============================
// */

// const values = [3, 11, 7, 2, 9, 10]

// console.log(values.reduce((p,a) => p + a, 0))

// /*
// =============================
// LIST OF WORDS
// =============================
// */

// let newWord = prompt('What is the word?')
// let wordArray = []

// while (newWord.toLowerCase() !== 'stop') {
//   wordArray.push(newWord)
//   newWord = prompt('What is the word?')
// }

// console.log(wordArray)

///////////////////////////////////////////////
//       JAVASCRIPT.INFO: ARRAY METHODS      //
///////////////////////////////////////////////

// /*
// ===========================================
// TRANSLATE BORDER-LEFT-WIDTH TO borderLeftWidth
// ===========================================
// */

// function camelize(str) {
//   let arr = str.split('-')
//   let newArr = arr.map(e => e !== arr[0] ? e.charAt(0).toUpperCase() + e.slice(1) : e)
//   let newArrNo2 = newArr.filter(e => e !== '')
//   let camelCasedWord = newArrNo2.reduce((p,a) => p + a)
//   return camelCasedWord
// }

// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))

// /*
// ===========================
// FILTER RANGE
// ===========================
// */

// function filterRange(arr,a,b) {
//   let newArr = []
//   arr.forEach(e => {
//     if (e >= a && e <= b) {
//       newArr.push(e)
//     }
//   })
//   return newArr
// }

// console.log(filterRange([1,2,3,4,5],2,4))

// /*
// ===========================
// FILTER RANGE
// ===========================
// */

// function filterRangeInPlace(arr,a,b) {
//   for (i=0; i<arr.length; i++){
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i,1)
//       i--
//     }
//   }
//   return arr
// }

// console.log(filterRangeInPlace([1,2,3,4,5,6,7,8],2,6))

// /*
// ===========================
// SORT IN DECREASING ORDER
// ===========================
// */

// function sortDecreasing (arr) {
//   arr.sort((a,b) => b - a)
//   return arr
// }

// console.log(sortDecreasing([5,2,1,-10,8]))

// /*
// ===========================
// COPY AND SORT ARRAY
// ===========================
// */

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// function copySorted(arrInput) {
//   return arrInput.slice().sort((a,b) => a.localeCompare(b))
// }

// console.log(sorted);
// console.log(arr);

// /*
// ===========================
// CREATE AN EXTENDABLE CALCULATOR (PARTIALLY SOLVED)
// ===========================
// */

// class Calculator {
//   calculate (str) {
//     let arr = str.split(' ');
//     let a = Number(arr[0]);
//     let op = arr[1];
//     let b = Number(arr[2]);
//     if (op === '+') {return a + b}
//     else if (op === '-') {return a - b};
//   }
//   addMethod (name, func) {

//   }
// }

// let calc = new Calculator;
// console.log( calc.calculate("3 - 7") ); // 10

// /*
// ===========================
// MAP TO NAMES
// ===========================
// */

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(e => e.name)

// console.log( names ); // John, Pete, Mary

// /*
// ===========================
// MAP TO OBJECTS
// ===========================
// */

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map((e,i) => {
//   let user = {
//     fullName: `${e.name} ${e.surname}`,
//     id: i + 1
//   }
//   return user
// })

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

// /*
// ===========================
// SORT USERS BY AGE
// ===========================
// */

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(arr) {
//   arr.sort((a,b) => a.age - b.age)
// }

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

// /*
// ===========================
// SHUFFLE AN ARRAY
// ===========================
// */

// let arr = [1, 2, 3];

// function shuffle(arr) {
//   let newArr = []
//   arr.map(e => {
//     let randomAssign = Number(Math.random())
//     if (randomAssign >= .5) {
//       newArr.push(e)
//     } else if (randomAssign < .5) {
//       newArr.unshift(e)
//     }
//   })
//   return newArr
// }

// console.log(shuffle(arr))
// // arr = [3, 2, 1]

// console.log(shuffle(arr))
// // arr = [2, 1, 3]

// console.log(shuffle(arr))
// // arr = [3, 1, 2]

// /*
// ===========================
// GET AVERAGE AGE
// ===========================
// */

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(users) {
//   return users.reduce((p,a) => p + a.age, 0) / users.length
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// /*
// ===========================
// FILTER UNIQUE ARRAY MEMBERS
// ===========================
// */

// function unique(arr) {
//   let newArr = []
//   arr.map(e => !newArr.includes(e) ? newArr.push(e) : null)
//   return newArr
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O

/*
===========================
CREATE KEYED OBJECT FROM ARRAY (NOT SOLVED)
===========================
*/

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// console.log(users[1]);
// function groupById(arr) {
//   let newObj = {}
//   let userIds = arr.map(e => e.id)
//   for (let i = 0; i <= arr.length; i++) {
//     let user = {
//       userIds[i]: arr[i]
//     }
//     return user
//   }
//   // Object.assign(newObj, arr) 
//   return newObj
// }

// let usersById = groupById(users);
// console.log(usersById)

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

///////////////////////////////////////////////
//              JS WAY: OBJECTS              //
///////////////////////////////////////////////

// /*
// ===========================
// ADDING CHARACTER EXPERIENCE
// ===========================
// */

// const aurora = {
//   name: "Aurora",
//   health: 150,
//   strength: 25,
//   xp: 0,

//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points and ${this.strength} as strength and ${this.xp} XP points`;
//   }
// };

// // Aurora is harmed by an arrow
// aurora.health -= 20;

// // Aurora equips a strength necklace
// aurora.strength += 10;

// // Aurora learn a new skill
// aurora.xp += 15;

// console.log(aurora.describe());

// /*
// ===========================
// MODELING A DOG
// ===========================
// */

// const dog = {
//   name: 'Fang',
//   species: 'boarhound',
//   size: 75,
//   bark() {
//     return 'Grrr! Grrr!'
//   }
// }

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// /*
// ===========================
// MODELING A CIRCLE
// ===========================
// */

// const r = Number(prompt("Enter the circle radius:"));

// const circle = {
//   circumference() {
//     return Math.PI * 2 * r
//   },
//   area() {
//     return Math.PI * r * r
//   }
// }

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

// /*
// ===========================
// MODELING A BANK ACCOUNT
// ===========================
// */

// const account = {
//   name: 'Alex',
//   balance: 0,
//   credit(value) {
//     this.balance -= value
//   },
//   describe(){
//     return `owner: ${this.name}, balance: ${this.balance}`
//   }
// }

// console.log(account.describe())

// // Credit 250
// account.credit(250)

// // Debit 80
// account.credit(-80)

// console.log(account.describe())

///////////////////////////////////////////////
//         ELOQUENT JAVASCRIPT: CH 4         //
///////////////////////////////////////////////

// /*
// ===========================
// SUM OF A RANGE
// ===========================
// */

// function range(a,b,c) {
//   let arr = []
//   if (a < b) {
//     for (a; a <= b; c > 0 || c < 0 ? a += c : a++) {
//       arr.push(a)
//     }
//   } else if (a > b) {
//     for (a; a >= b; c > 0 || c < 0 ? a += c : a--) {
//       arr.push(a)
//     }
//   } else {
//       arr.push(a)
//   }
//   return arr
// }

// function sum(arr) {
//   return arr.reduce((a,b) => a + b, 0)
// }

// console.log(range(5,2,-1))
// console.log(sum(range(1,10,2)))

// /*
// ===========================
// REVERSING AN ARRAY
// ===========================
// */

// function reverseArray(arr) {
//   let newArr = []
//   arr.forEach((e) => newArr.unshift(e))
//   return newArr
// }
// console.log(reverseArray([1,2,3,4,5]))

// function reverseArrayInPlace(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr.push(arr[i])
//   }
//   arr.splice(0,arr.length / 2)
//   return arr
// }
// console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8]))

/*
===========================
A LIST (NOT SOLVED)
===========================
*/

// function arrayToList(arr) {

// }

// function listToArray(list) {

// }

// function prepend(e, list) {

// }

/*
===========================
DEEP COMPARISON (NOT SOLVED)
===========================
*/

// function deepEqual(a,b) {
//   if (a !== b) {
//     return false
//   } else if (a === b) {
//     if (typeof a === 'object' && a !== null) {
//       // if (a.isArray() && b.isArray()) {
//       //   for (i = 0; i < a.length; i++) {
//       //     let compareArr = []
//       //     if (a[i] === b[i]) {
//       //       compareArr.push(true)
//       //     }
//       //   }
//       //   return !compareArr.includes(false)
//       if (a.keys !== b.keys) {
//         return false
//       } else {
//         return true
//       }
//     }
//   // if (a === null || b === null) {
//   //   a === b ? true : false
//   // } else {
//   //   if (typeof a === typeof b) {
//   //     if (typeof a === 'object' || typeof b === 'object'){
//   //       if (a.keys === b.keys) {
//   //         return true
//   //       }
//   //     } else {
//   //       return true
//   //     }
//   //   } else {
//   //     return false
//   }
// }

// a = {one: 1, two: 2, three: 3} // [1,2,3]
// b = {one: 1, two: 2, three: 3} // [1,2,3]

// console.log(deepEqual(a,b), a, b)
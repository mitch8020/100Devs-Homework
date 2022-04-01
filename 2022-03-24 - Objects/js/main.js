//////////////////////////////////////////
//        JAVASRIPT.INFO: OBJECTS       //
//////////////////////////////////////////

// /*
// ===============================
// HELLO, OBJECT
// ===============================
// */

// let user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name

// /*
// ===============================
// CHECK FOR EMPTINESS
// ===============================
// */

// function isEmpty(obj) {
//   return Object.keys(obj).length === 0
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// /*
// ===============================
// SUM OBJECT PROPERTIES
// ===============================
// */

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sumArr = []
// for (let key in salaries) {
//   Object.keys(salaries).length === 0 ? 0 : sumArr.push(salaries[key])
// }

// console.log(sumArr.reduce((p,a) => p + a, 0));

// /*
// ===============================
// MULTIPLY NUMERIC PROPERTY VALUES BY 2
// ===============================
// */

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2
//     }
//   }
// }

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu"
// // };

// console.log(menu)
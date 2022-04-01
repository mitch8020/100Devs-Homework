// *Variables*
// Create a variable and console log the value

const potato = 3;

console.log(potato)

// Create a variable, add 10 to it, and alert the value

let tomato = 5;
let addTen = tomato + 10;

alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNumbers(mainNum, num1, num2, num3, num4) {
  let result = mainNum - num1 - num2 - num3 - num4;

  alert(result);
}

subtractFourNumbers(100,5,3,2, 10);

// Create a function that divides one number by another and returns the remainder

function divide(numerator,denominator) {
  let remainder = numerator % denominator;

  return remainder;
}

divide(10,4);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

let sumTwoNumbers = (add1, add2) => {
  let sumSub50 = add1 + add2 > 50 ? "Jumanji" : add1 + add2;

  console.log(sumSub50);
}

sumTwoNumbers(45,10);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

let multiplyThreeNumbers = (fac1, fac2, fac3) => {

  let divisibleByThree = fac1 * fac2 * fac3 % 3 === 0 ? "ZEBRA" : fac1 * fac2 * fac3;

  console.log(divisibleByThree)
}

multiplyThreeNumbers(2,3,4);
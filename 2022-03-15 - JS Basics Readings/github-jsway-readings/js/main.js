// /*
// ===============================
// VARIABLES
// ===============================
// */

  // // IMPROVED HELLO

    let firstNamed = prompt('What is your first name?')
    let lastNamed = prompt('What is your last name?')

    console.log(`${firstName} ${lastName}`)

  // // FINAL VALUES

    let a = 2; // 2
    a -= 1; // 1
    a++; // 2
    let b = 8; // 8
    b += 2; // 10
    const c = a + b * b; // 102
    const d = a * b + b; // 30
    const e = a * (b + b); // 40
    const f = a * b / a; // 10
    const g = b / a * a; // 10
    console.log(a, b, c, d, e, f, g); // 2 10 102 30 40 10 10

  // // VAT CALCULATION

    let rawPrice = prompt('What is the raw price of your item?')

    vatPrice = Number(rawPrice) * 1.206

    console.log(vatPrice)

  // // FROM CELSIUS TO FAHRENHEIT DEGREES

    let celsiusInput = prompt('What is the temperature in Celsius?')

    let fahrenheitOutput = celsiusInput * 9/5 + 32

    console.log(fahrenheitOutput)

  // // VARIABLE SWAPPING

    let number1 = 5;
    let number2 = 3;

    let storeNumber1 = number1
    number1 = number2
    number2 = storeNumber1

    // console.log(number1); // Should show 3
    // console.log(number2); // Should show 5

// /*
// ===============================
// CONDITIONALS
// ===============================
// */

  // // FOLLOWING DAY

    let day = prompt('What is today?').toLowerCase()

    if (day === 'monday') {
      console.log('Tomorrow is Tuesday')
    } else if (day === 'tuesday') {
      console.log('Tomorrow is Wednesday')
    } else if (day === 'wednesday') {
      console.log('Tomorrow is Thursday')
    } else if (day === 'thursday') {
      console.log('Tomorrow is Friday')
    } else if (day === 'friday') {
      console.log('Tomorrow is Saturday')
    } else if (day === 'saturday') {
      console.log('Tomorrow is Sunday')
    } else if (day === 'sunday') {
      console.log('Tomorrow is Monday')
    } else {
      console.log('Enter a valid day')
    }

  // // NUMBER COMPARISON

    let num1 = Number(prompt('Give a number'))
    let num2 = Number(prompt('Give a second number'))

    if (num1 === num2) {
      console.log('The numbers provided are equal to each other')
    } else if (num1 > num2) {
      console.log('The first number is greater than the second number')
    } else if (num1 < num2) {
      console.log('The first number is less than the second number')
    } else {
      console.log('Make sure to type in a number')
    }

  // // FINAL VALUES

    let nb1 = Number(prompt("Enter nb1:"));
    let nb2 = Number(prompt("Enter nb2:"));
    let nb3 = Number(prompt("Enter nb3:"));

    if (nb1 > nb2) {
      nb1 = nb3 * 2;
    } else {
      nb1++;
      if (nb2 > nb3) {
        nb1 += nb3 * 3;
      } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
      }
    }
    console.log(nb1, nb2, nb3);

    // Initial Values: nb1=nb2=nb3=4 // Final Values: nb1=0 nb2=4 nb3=12
    // Initial Values: nb1=4,nb2=3,nb3=2 // Final Values: nb1=4 nb2=3 nb3=2
    // Initial Values: nb1=2,nb2=4,nb3=0  // Final Values: nb1=3 nb2=4 nb3=0

  // // NUMBER OF DAYS IN A MONTH

    let monthNumber = Number(prompt('Give a number between 1 and 12 to denote the month (i.e. 4 = April'))

    if (monthNumber === 1) {
      console.log('The number of days in January is 31')
    } else if (monthNumber === 2) {
      console.log('The number of days in February is 28')
    } else if (monthNumber === 3) {
      console.log('The number of days in March is 31')
    } else if (monthNumber === 4) {
      console.log('The number of days in April is 30')
    } else if (monthNumber === 5) {
      console.log('The number of days in May is 31')
    } else if (monthNumber === 6) {
      console.log('The number of days in June is 30')
    } else if (monthNumber === 7) {
      console.log('The number of days in July is 31')
    } else if (monthNumber === 8) {
      console.log('The number of days in August is 31')
    } else if (monthNumber === 9) {
      console.log('The number of days in September is 30')
    } else if (monthNumber === 10) {
      console.log('The number of days in October is 31')
    } else if (monthNumber === 11) {
      console.log('The number of days in November is 30')
    } else if (monthNumber === 12) {
      console.log('The number of days in December is 31')
    } else {
      console.log('Type in a valid input')
    }

  // // FOLLOWING SECOND

    let timeInput = prompt('Give a time in the following format: 00h00m00s')

    let hour = Number(timeInput.slice(0,2))
    let minute = Number(timeInput.slice(3,5))
    let second = Number(timeInput.slice(6,8))

    second = second + 1
    minute = String(minute + second / 60)
    minute = Number(minute.slice(0,2))
    hour = String(hour + minute / 60)
    hour = Number(hour.slice(0,2))

    hour = hour % 24
    minute = minute % 60
    second = second % 60

    let timeOutput = `The time 1 second later is ${hour}h${minute}m${second}s`

    if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
      console.log('Type in a correct time format')
    } else {
      console.log(timeOutput)
    }

    // TEST TIME: 45d89h32m21s

// /*
// ============================
// LOOPS
// ============================
// */

  // // CAROUSEL (SOLVED)

    document.querySelector('#carousel-button').addEventListener('click', carousel)
    let turnCount = prompt('How many turns do you need?')
    let carouselCounter = 0

    if (isNaN(turnCount)) {
      console.log('Type in a valid number')
    } else {
      carousel()
    }

    function carousel () {
      if (carouselCounter < turnCount) { 
        carouselCounter++
        console.log(carouselCounter)
      } else {
        carouselCounter = 0
        console.log(carouselCounter)
      }
    }

  // // PARITY (SOLVED)

    let parity = () => {
      let numX = Number(prompt('Give me a number'))
      for (i = numX; i <= numX + 10; i++) {
        console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
      }
    }
    parity()

  // // INPUT VALIDATION (SOLVED)

    let inputD = null;

    while (+input <= 50 || +input >= 100) {
      input = prompt('Type a number between 50 and 100')
    }

  // // MULTIPLICATION TABLE (SOLVED)

    let multiplier = prompt('Type a number');
    let i = 1;

    while (multiplier >= 2 && multiplier <= 9) {
      while (i <= 10) {
        console.log(i * multiplier)
        i++
      }
    }

  // // NEITHER YES NOR NO (SOLVED)

    let input = null;

    while (input !== 'yes' && input !== 'no') {
      input = prompt('Type a word')
    }

  // // FIZZBUZZ (SOLVED)

    for (i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      } else if (i % 3 === 0) {
        console.log('fizz')
      } else if (i % 5 === 0) {
        console.log('buzz')
      } else {
        console.log(i)
      }
    }

// /*
// ============================
// FUNCTIONS
// ============================
// */

  // // IMPROVED HELLO

    // Say hello to the user
      function sayHello(firstName, lastName) {
        const message = `Hello, ${firstName} ${lastName}!`;
        return message;
      }

    // TODO: ask user for first and last name
      const firstName = prompt('What is your first name?')
      const lastName = prompt('What is your last name?')

    // TODO: call sayHello() and show its result

      console.log(sayHello(firstName, lastName))

  // // NUMBER SQUARING

    // Square the given number x
      function square1(x) {
    // TODO: complete the function code
        let squaredNum = x * x
        return squaredNum
      }

    // Square the given number x
      const square2 = x => squaredNum = x * x// TODO: complete the function code

      console.log(square1(0)); // Must show 0
      console.log(square1(2)); // Must show 4
      console.log(square1(5)); // Must show 25

      console.log(square2(0)); // Must show 0
      console.log(square2(2)); // Must show 4
      console.log(square2(5)); // Must show 25
      
    // Square every number between 0 and 10
      for (i = 1; i <= 10; i++) {
        console.log(square1(i))
      }

  // // MINIMUM OF TWO NUMBERS

    // TODO: write the min() function
      function min (a,b) {
        if (a > b) {
          return b
        } else if (a < b) {
          return a
        } else if (a = b) {
          return a
        } else {
          return 'Enter valid inputs'
        }
      }

      console.log(min(4.5, 5)); // Must show 4.5
      console.log(min(19, 9));  // Must show 9
      console.log(min(1, 1));   // Must show 1

  // // CALCULATOR

    // TODO: complete program
      function calculate (a,operator,b) {
        if (operator === "+") {
          return a + b
        } else if (operator === "-") {
          return a - b
        } else if (operator === "*") {
          return a * b
        } else if (operator === "/") {
          return a / b
        } else {
          return 'Enter valid inputs'
        }
      }

      console.log(calculate(4, "+", 6));  // Must show 10
      console.log(calculate(4, "-", 6));  // Must show -2
      console.log(calculate(2, "*", 0));  // Must show 0
      console.log(calculate(12, "/", 0)); // Must show Infinity

  // // CIRCUMFERENCE AND AREA OF A CIRCLE

    function calcCircumference (r) {
      return Math.PI * r * r
    }

    function calcCircleArea (r) {
      return 2 * Math.PI * r
    }

    console.log(calcCircumference(4))
    console.log(calcCircleArea(4))

/*
==========================
LOOPING A TRIANGLE
==========================
*/

let width = '#'
for (let i = 1; i < 8; i++) {
  console.log(width)
  width += '#'
}

/*
==========================
FIZZBUZZ
==========================
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else if (i % 3 === 0) {
    console.log('Fizz')
  } else if (i % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

/*
==========================
CHESSBOARD
==========================
*/

let rowSize = 8
let columnSize = 8
let board = ''

// loop through each row to see if it's even or odd
for (i = 1; i <= rowSize; i++) { 
  // if the new row is odd
  if (i % 2 !== 0) { 
    // loop through the row to see if each column is a space or #
    for (j = 1; j <= columnSize; j++) { 
      // if the column is odd
      if (j % 2 !== 0) { 
        // add a space to the row
        board += ' ' 
      // if the column is even
      } else if (j % 2 === 0) { 
        // add a # to the row
        board += '#' 
      }
    }
    // add a newline at the end of the loop to create a new row
    board += '\n' 
  // if the new row is even
  } else if (i % 2 === 0) { 
    // loop through the row to see if each column is a space or #
    for (j = 1; j <= columnSize; j++) { 
      // if the column is odd
      if (j % 2 !== 0) { 
        // add a # to the row
        board += '#' 
      // if the column is even
      } else if (j % 2 === 0) { 
        // add a space to the row
        board += ' ' 
      }
    }
    // add a newline at the end of the loop to create a new row
    board += '\n' 
  }
}

console.log(board)

/*
==========================
MINIMUM
==========================
*/

let findMin = (a,b) => {
  if (a > b) {
    return b
  } else if (a < b) {
    return a
  } else {
    return undefined
  }
}

console.log(findMin(0,10))
console.log(findMin(0,-10))

/*
==========================
RECURSION
==========================
*/

function isEven (a) {
  if (a === 0) {
    return true
  } else if (a === 1) {
    return false
  }
  return isEven (a - 2)
}

console.log(isEven(50))

/*
==========================
BEAN COUNTING
==========================
*/

// function countBs (string) {
//   let bCount = 0
//   for (i = 1; i <= string.length; i++) {
//     if (string[i - 1] === "B") {
//       bCount++
//     }
//   }
//   return bCount
// }

function countBs (string) {
  return countChar(string, "B")
}

function countChar (string, letterToCount) {
  letterCount = 0
  for (i = 1; i <= string.length; i++) {
    if (string[i - 1] === String(letterToCount)) {
      letterCount++
    }
  }
  return letterCount
}

console.log(countBs("BBC"))
console.log(countChar("kakkerlak", "e"))
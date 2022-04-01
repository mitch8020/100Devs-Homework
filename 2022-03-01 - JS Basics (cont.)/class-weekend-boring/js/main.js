//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("Its The Weekend")
//   }else{
//     console.log("BORING")
//   }

// }

// // Pull out value from input
// document.querySelector('#check').addEventListener('click', check)

// //Set function for picking output

// function check() {
  
//   const day = document.querySelector('#day').value.toLowerCase()

// //Set if/else statement for output

//   if(day === "tuesday" || day === "thursday"){
//     document.querySelector('#placeToSee').innerHTML = "CLASS DAY!!!"
//   } else if(day === "saturday" || day === "sunday") {
//     document.querySelector('#placeToSee').innerHTML = "IT\'S THE WEEKEND BABBBBBBYYY!"
//   } else if(day === "monday" || day === "wednesday" || day === "friday"){
//     document.querySelector('#placeToSee').innerHTML = "BORING DAY"
//   } else {
//     document.querySelector('#placeToSee').innerHTML = "NOT A DAY"
//   }

// }

document.querySelector('#check').addEventListener('click', check)

const placeToSee = document.querySelector('#placeToSee')

function check() {
  const day = document.querySelector('#day').value.toLowerCase()

  if (day === 'tuesday' || day === 'thursday') {

    placeToSee.innerHTML = 'CLASS DAY!!!'

  } else if (day === 'saturday' || day === 'sunday') {

    placeToSee.innerHTML = 'WEEKEND DAY!!!'

  } else if (day === 'monday' || day === 'wednesday' || day === 'friday') {

    placeToSee.innerHTML = 'BORING DAY'

  } else {

    placeToSee.innerHTML = 'NOT A DAY'

  }
}
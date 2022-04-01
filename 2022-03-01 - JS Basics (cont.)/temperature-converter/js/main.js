// //Write your pseduo code first! 

// document.querySelector('#convert').addEventListener('click', convert)
// document.addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//     convert();
//   }
// });

// function convert() {

//   const temp = document.querySelector('#temp').value;

//   result = temp * 9/5 + 32;

//   document.querySelector('strong').innerHTML = result;
// }

document.querySelector('#convert').addEventListener('click', convert)

function convert() {
  const input = document.querySelector('#temp').value;

  output = input * 9/5 + 32;

  document.querySelector('strong').innerHTML = output;
}
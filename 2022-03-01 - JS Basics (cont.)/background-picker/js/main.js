// document.getElementById("purple").onclick = partyPurple
// document.getElementById("green").onclick = partyGreen
// document.getElementById("cyan").onclick = partyCyan
// document.getElementById("red").onclick = partyRed

// function partyPurple() {
//     document.querySelector('body').style.background = 'purple';
//     document.querySelector('body').style.color = 'white';
// }

// function partyGreen() {
//     document.querySelector('body').style.background = 'green';
//     document.querySelector('body').style.color = 'red';
// }

// function partyCyan() {
//     document.querySelector('body').style.background = 'cyan';
//     document.querySelector('body').style.color = 'blue';
// }

// function partyRed() {
//     document.querySelector('body').style.background = 'red';
//     document.querySelector('body').style.color = 'green';
// }

const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

Array.from(buttons).forEach(element => element.addEventListener('click', run))

function run(click) {
  if (click.target.classList.contains('purple')) {
    body.style.background = 'purple';
    body.style.color = 'pink';
  } else if (click.target.classList.contains('green')) {
    body.style.background = 'green';
    body.style.color = 'blue';
  } else if (click.target.classList.contains('cyan')) {
    body.style.background = 'cyan';
    body.style.color = 'blue';
  } else if (click.target.classList.contains('red')) {
    body.style.background = 'red';
    body.style.color = 'pink';
  } else {
    alert('No button')  
  }
}
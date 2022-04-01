// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', andiNext)
// document.querySelector('#claireNext').addEventListener('click', claireNext)
// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// function andiNext(){
// 	claire.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	andi.classList.toggle('hidden')
// }

// function claireNext(){
// 	sharleen.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }

// function sharleenNext(){
// 	claire.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }

// Create variables for images

// const claire = document.querySelector('#claire')
// const andi = document.querySelector('#andi')
// const sharleen = document.querySelector('#sharleen')

// // Add event listeners for clicking names

// document.querySelector('#andiNext').addEventListener('click',andiNext)
// document.querySelector('#claireNext').addEventListener('click',claireNext)
// document.querySelector('#sharleenNext').addEventListener('click',sharleenNext)

// // Add function to change display of other two images

// function andiNext() {
// 	claire.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	andi.classList.toggle('hidden')
// }

// function claireNext() {
// 	andi.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }

// function sharleenNext() {
// 	claire.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }

// // Add in function to toggle display of clicked Bachelorette

// Create variables for images

const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

// Add event listeners for Bachelorette clicks

document.getElementById('andiNext').addEventListener('click', andiNext)
document.getElementById('claireNext').addEventListener('click', claireNext)
document.getElementById('sharleenNext').addEventListener('click', sharleenNext)

// Create functions to toggle & remove Bachelorette images

function andiNext() {
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

function claireNext() {
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext() {
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}
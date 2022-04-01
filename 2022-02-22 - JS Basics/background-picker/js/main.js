document.getElementById("purple").onclick = partyPurple
document.getElementById("green").onclick = partyGreen
document.getElementById("cyan").onclick = partyCyan
document.getElementById("red").onclick = partyRed

function partyPurple() {
    document.querySelector('body').style.background = 'purple';
    document.querySelector('body').style.color = 'white';
}

function partyGreen() {
    document.querySelector('body').style.background = 'green';
    document.querySelector('body').style.color = 'red';
}

function partyCyan() {
    document.querySelector('body').style.background = 'cyan';
    document.querySelector('body').style.color = 'blue';
}

function partyRed() {
    document.querySelector('body').style.background = 'red';
    document.querySelector('body').style.color = 'green';
}
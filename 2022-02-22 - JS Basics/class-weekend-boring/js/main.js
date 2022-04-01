document.querySelector('#check').addEventListener('click', check)

function check() {

  let day = document.querySelector('#day').value

  let daySub = day.toLowerCase();

  let result = "";

  //Conditionals go here

  if(daySub === "tuesday" || daySub === "thursday") {
    result = "Class Day";
  }else if(daySub === "saturday" || daySub === "sunday") {
    result = "Weekend Day";
  }else if(daySub === "monday" || daySub === "wednesday" || day === "friday") {
    result = "Boring Day";
  }else {
    result = "That is NOT a day";
  }

  document.querySelector('#placeToSee').innerHTML = result;
}


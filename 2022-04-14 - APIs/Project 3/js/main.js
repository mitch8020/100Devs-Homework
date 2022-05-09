let today = new Date()
let localDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`

document.querySelector('#get-image').addEventListener('click', determineDate)

function getFetch() {
  const url = '/* REMOVED NASA API LINK -- ADD BACK BEFORE USE */' + localDate

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      if (data.media_type === 'image') {
        document.querySelector('img').src = data.url
        document.querySelector('iframe').src = ""
      } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url
        document.querySelector('img').src = ""
      }
      
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.date
      document.querySelector('p').innerText = data.explanation
      document.querySelector('small').innerText = data.copyright
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

getFetch()

function determineDate() {
  localDate = document.querySelector('input').value
  getFetch()
}

document.querySelector('#previous').addEventListener('click', previousImage)

function previousImage() {
  let tempDate = new Date(localDate)
  localDate = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate() - 1}`
  console.log(tempDate)
  getFetch()
}

document.querySelector('#next').addEventListener('click', nextImage)

function nextImage() {
  let tempDate = new Date(localDate)
  localDate = `${tempDate.getFullYear()}-${tempDate.getMonth() + 1}-${tempDate.getDate() + 1}`
  getFetch()
}
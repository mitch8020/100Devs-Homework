//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value
  const url = 'https://animechan.vercel.app/api/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('.anime').innerText = data.anime
        document.querySelector('.character').innerText = data.character
        document.querySelector('.quote').innerText = data.quote
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getFetch()
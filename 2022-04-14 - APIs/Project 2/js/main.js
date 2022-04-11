//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/' + choice
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.name').innerText = data.species.name
        document.querySelector('img').src = data.sprites.front_default
        document.querySelector('.types').innerText = data.types[0].type.name + ', ' + (data.types[1] === undefined ? '' : data.types[1].type.name)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getFetch()
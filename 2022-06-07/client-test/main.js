document.querySelector('button').addEventListener('click',getVillain)

async function getVillain() {
  const villainName = document.querySelector('#villain-name').value
  try {
    const res = await fetch(`https://marvel-villains.herokuapp.com/villains/${villainName}`)
    const data = await res.json()
    console.log(data)

    document.querySelector('img').src = data.image
    
  }
  catch (error) {
    console.log(error)
  }
}
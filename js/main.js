const BREEDS_URL = "https://dog.ceo/api/breeds/list/all"

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
  .then(res =>{
      return res.json();
  })
  .then(data =>{
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject) // turns object into array
    for ( let i = 0; i<breedsArray.length;i++){
        const option = document.createElement('option')
        option.value = breedsArray[i]
        option.innerText = breedsArray[i]
        select.appendChild(option) // adds current option tag to the select box list of options

  }
  })
  select.addEventListener('change', event =>{
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    getDoggoImg(url)
  })

  const img = document.querySelector(".dogi-img")
  const getDoggoImg =url => {
    fetch(url) // going to api url above
      .then( res =>{
        return res.json();
      })
      .then(data =>{
        img.src = data.message//extract message from json and attatch to img tag as new source
      })
  }

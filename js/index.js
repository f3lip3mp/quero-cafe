const inputSearch = document.getElementById('search-input')


async function getUserByName(url) {
  const response = await fetch(url);
  return await response.json()
}

inputSearch.addEventListener('input', async function (eventInput) {
  console.log(eventInput.target.value)
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${eventInput.target.value}&key=`
  console.log(url)
  getUserByName(url).then(function (data) {
    console.log(data)
  })
})


window.addEventListener('load', () => {
  const MapIstance = new Map(document.getElementById("mapid"), {
    coord: { lat: -30.038348, lng: -51.21600 },
    zoom: 16,
  })
  MapIstance.newMarker()
  console.log(MapIstance)
  window.localStorage.setItem("cachorro", "salsichinha")
})
window.addEventListener('load', alert('Insira a chave da API do Google'))

//criar classe controlar interface


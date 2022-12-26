let lat = ''
let long = ''

fetch(
  'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=landscape'
)
  .then((resp) => resp.json())
  .then((data) => {
    populateUnsplashData(data)
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
    document.body.style.backgroundImage = `url(https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
  })

function populateUnsplashData(data) {
  const authorInfo = document.querySelector('.author-name')
  const authorName = `${data.user.first_name} ${data.user.last_name} / Unsplash`

  document.body.style.backgroundImage = `url(${data.urls.full})`
  authorInfo.textContent = authorName
  authorInfo.href = data.links.html

  if (data.location.name !== null) {
    document.querySelector(
      '.location-info'
    ).textContent = `${data.location.name}`
  }
}

function getCurrentDateAndTime() {
  const date = new Date()

  const currentTime = date.toLocaleTimeString('en-us', { timeStyle: 'short' })
  const currentDate = date.toLocaleDateString('en-US')

  document.querySelector('.time-info').textContent = currentTime
  document.querySelector('.date-info').textContent = currentDate
}

function getUserLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude
    long = position.coords.longitude
    
    console.log(position.coords.latitude, position.coords.longitude);
  });
}


getCurrentDateAndTime()
getUserLocation()

window.setInterval(function(){
  getCurrentDateAndTime()
}, 1000);
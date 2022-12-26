function getCurrentDateAndTime() {
  const date = new Date()

  const currentTime = date.toLocaleTimeString('en-us', { timeStyle: 'short' })
  const currentDate = date.toLocaleDateString('en-US')

  document.querySelector('.time-info').textContent = currentTime
  document.querySelector('.date-info').textContent = currentDate
}

function getUserLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude
    const long = position.coords.longitude
    fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial`
    )
      .then((resp) => {
        if (!resp.ok) {
          throw Error('Weather data not available')
        }
        return resp.json()
      })
      .then((data) => {
        console.log(data)
        const temp = Math.round(data.main.temp)
        const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        document.querySelector('.weather-wrapper').innerHTML = `
        <img src=${icon} alt='weather icon' />
        <p class='temp-info'>${temp}&#176</p>
        <p class='city-info'>${data.name}</p>
      `
      })
  })
}

export { getCurrentDateAndTime, getUserLocation }

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(resp => resp.json())
  .then(data => getUnsplashData(data))


  function getUnsplashData(data) {
    const authorName = `${data.user.first_name} ${data.user.last_name}`

    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.querySelector(".author-name").textContent = authorName

    if (data.location.name !== null) {
      document.querySelector(".location-info").textContent = `${data.location.name}`
    }
  }



fetch("/api/foryou")
  .then(r => r.json())
  .then(d => {
    console.log("API RESPONSE:", d)

    if (!d.data) {
      document.body.innerHTML += "<p style='color:red'>DATA KOSONG</p>"
      return
    }

    const grid = document.getElementById("grid")

    d.data.forEach(item => {
      const card = document.createElement("div")
      card.className = "card"
      card.innerHTML = `
        <img src="${item.cover}">
        <div class="title">${item.bookName}</div>
      `
      grid.appendChild(card)
    })
  })
  .catch(err => {
    document.body.innerHTML += "<p style='color:red'>ERROR FETCH</p>"
    console.error(err)
  })

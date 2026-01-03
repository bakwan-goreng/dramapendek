fetch("/api/foryou")
  .then(r => r.json())
  .then(d => {
    const grid = document.getElementById("grid")
    d.data.forEach(item => {
      const card = document.createElement("div")
      card.className = "card"
      card.innerHTML = `
        <img src="${item.cover}">
        <div class="title">${item.bookName}</div>
      `
      card.onclick = () => {
        location.href = `/app.html?bookId=${item.bookId}`
      }
      grid.appendChild(card)
    })
  })

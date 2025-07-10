const guests = [
    "Maria Santos",
    "Juan Dela Cruz",
    "Ana Rodriguez",
    "Carlos Mendoza",
    "Sofia Reyes",
    "Miguel Torres",
    "Isabella Garcia",
    "Diego Martinez",
    "Camila Lopez",
    "Sebastian Morales",
    "Valentina Herrera",
    "Mateo Jimenez",
    "Lucia Vargas",
    "Gabriel Castillo",
    "Emma Ruiz",
    "Nicolas Flores",
    "Olivia Gutierrez",
    "Santiago Diaz",
    "Mia Fernandez",
    "Leonardo Aguilar",
  ]
  
  let selectedGuest = ""
  
  function initializeGuestList() {
    const guestGrid = document.getElementById("guestGrid")
  
    guests.forEach((guest, index) => {
      const guestCard = document.createElement("div")
      guestCard.className = "guest-card"
      guestCard.style.animationDelay = `${index * 0.1}s`
      guestCard.onclick = () => selectGuest(guest)
  
      guestCard.innerHTML = `
              <div class="guest-number">${index + 1}</div>
              <div class="guest-name">${guest}</div>
          `
  
      guestGrid.appendChild(guestCard)
    })
  
    document.addEventListener("DOMContentLoaded", () => {
      const noButtons = document.querySelectorAll(".btn-no")
      noButtons.forEach((button) => {
        button.addEventListener("click", handleNoClick)
      })
    })
  }
  
  function selectGuest(guest) {
    selectedGuest = guest
    document.getElementById("welcomeName").textContent = `Welcome, ${guest}!`
    document.getElementById("thankYouName").textContent = `Thank You, ${guest}!`
    showScreen("welcome")
  }
  
  function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen")
    screens.forEach((screen) => {
      screen.classList.remove("active")
    })
  
    document.getElementById(screenId).classList.add("active")
  
    if (screenId === "invitation") {
      createConfetti()
    }
  }
  
  function createConfetti() {
    const confettiContainer = document.getElementById("confettiContainer")
    confettiContainer.innerHTML = ""
  
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div")
      confetti.className = "confetti"
      confetti.style.left = Math.random() * 100 + "%"
      confetti.style.animationDelay = Math.random() * 3 + "s"
      confetti.style.animationDuration = Math.random() * 2 + 2 + "s"
      confettiContainer.appendChild(confetti)
    }
  
    setTimeout(() => {
      confettiContainer.innerHTML = ""
    }, 5000)
  }
  
  function handleNoClick(event) {
    event.preventDefault()
  
    const button = event.target
    button.classList.add("moving")
  
    const positions = [
      { x: Math.random() * 200 - 100, y: Math.random() * 100 - 50 },
      { x: Math.random() * 150 - 75, y: Math.random() * 80 - 40 },
      { x: Math.random() * 180 - 90, y: Math.random() * 120 - 60 },
    ]
  
    const randomPosition = positions[Math.floor(Math.random() * positions.length)]
  
    button.style.transform = `translate(${randomPosition.x}px, ${randomPosition.y}px)`
    button.style.transition = "transform 0.5s ease-in-out"
  
    setTimeout(() => {
      const newPosition = positions[Math.floor(Math.random() * positions.length)]
      button.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`
    }, 600)
  
    setTimeout(() => {
      button.classList.remove("moving")
      button.style.transform = "translate(0, 0)"
    }, 1200)
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    initializeGuestList()
  })
  
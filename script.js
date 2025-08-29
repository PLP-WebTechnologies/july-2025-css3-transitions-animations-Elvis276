let count = 0

// Function with parameters and return value
function updateCounter(change) {
  count += change
  document.getElementById("count").textContent = count
  return count
}

// Event handling and CSS animation trigger
document.getElementById("animatedBox").addEventListener("click", function () {
  this.classList.add("animate")
  setTimeout(() => this.classList.remove("animate"), 500)
})

// Form validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault()
  const name = document.getElementById("name").value
  const message = document.getElementById("message")

  if (name.length < 2) {
    message.textContent = "Name too short!"
    message.style.color = "red"
  } else {
    message.textContent = "Success!"
    message.style.color = "green"
  }
})

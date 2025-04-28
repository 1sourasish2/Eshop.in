function toggleLike(element) {
    element.classList.toggle("liked");
    element.classList.toggle("fa-solid"); // Toggles between solid and outline
    element.classList.toggle("fa-regular");

   
    element.classList.add("spark");

    // Remove animation class after the animation completes (0.5s)
    setTimeout(() => {
        element.classList.remove("spark");
    }, 400);
}
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        button.innerText = button.innerText === "Add to Cart" ? "✔ Added to Cart" : "Add to Cart";
    });
});
document.getElementById('toggle-dark').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

// Function to toggle the visibility of the mobile menu

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Optional: Smooth scroll to top when footer links clicked
document.querySelectorAll(".footer-container a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

  function openChatbot() {
    document.getElementById("chatbot-container").style.display = "block";
  }

  function closeChatbot() {
    document.getElementById("chatbot-container").style.display = "none";
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      const input = document.getElementById("user-input");
      const message = input.value.trim();
      if (message) {
        const messages = document.querySelector(".messages");
        messages.innerHTML += `<div class="message user-message">${message}</div>`;
        input.value = "";
        setTimeout(() => {
          messages.innerHTML += `<div class="message bot-message">You said: ${message}</div>`;
          messages.scrollTop = messages.scrollHeight;
        }, 400);
      }
    }
  }
  
  function updateLocation() {
    const newLocation = prompt("Enter your delivery location or PIN code:");
    if (newLocation) {
      document.getElementById("location").textContent = newLocation;
    }
  }
  
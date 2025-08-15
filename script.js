document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.getElementById("book");
  if (bookBtn) {
    bookBtn.addEventListener("click", () => {
      alert("Starting your booking process! Choose a destination below.");
    });
  }

  const searchInput = document.getElementById("search");
  const searchBtn = document.getElementById("search-btn");
  const clearBtn = document.getElementById("clear-btn");
  const sections = document.querySelectorAll("section");

  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const val = searchInput.value.toLowerCase().trim();
      sections.forEach((sec) => {
        sec.style.display = "none";
      });
      if ("beach".includes(val) && val) {
        document.getElementById("beach").style.display = "block";
      }
      if ("temple".includes(val) && val) {
        document.getElementById("temple").style.display = "block";
      }
      if ("country".includes(val) && val) {
        document.getElementById("country").style.display = "block";
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      sections.forEach((sec) => {
        sec.style.display = "block";
      });
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
      } else {
        alert("Please fill all fields.");
      }
    });
  }
});

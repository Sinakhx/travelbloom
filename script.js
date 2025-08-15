document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.getElementById("book");
  if (bookBtn) {
    bookBtn.addEventListener("click", () => {
      alert("Starting your booking process! Choose a destination below.");
    });
  }

  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const val = e.target.value.toLowerCase();
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        sec.style.display = "none";
      });
      if (val.includes("beach"))
        document.getElementById("beach").style.display = "block";
      if (val.includes("temple"))
        document.getElementById("temple").style.display = "block";
      if (val.includes("japan") || val.includes("country"))
        document.getElementById("country").style.display = "block";
      if (!val) sections.forEach((sec) => (sec.style.display = "block"));
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

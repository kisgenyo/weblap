document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = sessionStorage.getItem("theme");

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      toggleButton.textContent = "🌙 Sötét mód";
      sessionStorage.setItem("theme", "light");
    } else {
      toggleButton.textContent = "☀️ Világos mód";
      sessionStorage.setItem("theme", "dark");
    }
  });
  
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    toggleButton.textContent = "🌙 Sötét mód";
  } else {
    body.classList.remove("light-mode");
    toggleButton.textContent = "☀️ Világos mód";
  }

  

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");

  if (lightbox && lightboxImg && closeBtn) {
    document.querySelectorAll(".kepgaleria a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const fullImg = link.getAttribute("href");
        lightboxImg.src = fullImg;
        lightbox.classList.add("active");
      });
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });

    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lightbox.classList.remove("active");
      }
    });
  }
});

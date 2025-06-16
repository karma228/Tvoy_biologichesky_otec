document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav");

  mobileMenuBtn.addEventListener("click", function () {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
  });

  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 767) {
        nav.style.display = "none";
      }
    });
  });

  const buyButton = document.querySelector(".btn-primary");
  if (buyButton) {
    buyButton.addEventListener("click", function (e) {
      e.preventDefault();

      const modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.backgroundColor = "rgba(0,0,0,0.8)";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      modal.style.zIndex = "2000";

      const imgContainer = document.createElement("div");
      imgContainer.style.position = "relative";
      imgContainer.style.maxWidth = "90%";
      imgContainer.style.maxHeight = "90%";

      const img = document.createElement("img");
      img.src = "img/legenda/legenda.jpg";
      img.style.maxWidth = "100%";
      img.style.maxHeight = "100%";
      img.style.borderRadius = "10px";

      const closeBtn = document.createElement("button");
      closeBtn.innerHTML = "&times;";
      closeBtn.style.position = "absolute";
      closeBtn.style.top = "-15px";
      closeBtn.style.right = "-15px";
      closeBtn.style.width = "40px";
      closeBtn.style.height = "40px";
      closeBtn.style.borderRadius = "50%";
      closeBtn.style.backgroundColor = "var(--accent-color)";
      closeBtn.style.color = "white";
      closeBtn.style.border = "none";
      closeBtn.style.fontSize = "1.5rem";
      closeBtn.style.cursor = "pointer";
      closeBtn.style.display = "flex";
      closeBtn.style.justifyContent = "center";
      closeBtn.style.alignItems = "center";

      closeBtn.addEventListener("click", function () {
        document.body.removeChild(modal);
      });
      imgContainer.appendChild(img);
      imgContainer.appendChild(closeBtn);
      modal.appendChild(imgContainer);
      document.body.appendChild(modal);
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          document.body.removeChild(modal);
        }
      });
    });
  }
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      console.log("Form submitted:", { name, email, message });

      alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");

      contactForm.reset();
    });
  }
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    }
  });
});

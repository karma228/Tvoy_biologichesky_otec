// js.js
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav");

  function toggleMenu() {
    nav.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  }

  mobileMenuBtn.addEventListener("click", toggleMenu);

  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 767) {
        nav.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 767) {
      nav.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
    }
  });

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

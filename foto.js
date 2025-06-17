document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".gallery-thumbs img");
  const mainImage = document.querySelector(".product-gallery > img");

  if (thumbnails.length > 0) {
    thumbnails[0].classList.add("active-thumbnail");
  }

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const newSrc = this.src;

      mainImage.src = newSrc;

      mainImage.style.opacity = "0";
      setTimeout(() => {
        mainImage.style.opacity = "1";
        mainImage.style.transition = "opacity 0.3s ease";
      }, 10);

      thumbnails.forEach((thumb) => {
        thumb.classList.remove("active-thumbnail");
      });

      this.classList.add("active-thumbnail");
    });
  });
});

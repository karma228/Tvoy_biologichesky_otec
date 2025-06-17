document.addEventListener("DOMContentLoaded", function () {
  const orderButtons = document.querySelectorAll(".btn-primary");

  orderButtons.forEach((button) => {
    if (button.textContent.includes("Заказать")) {
      button.addEventListener("click", function () {
        const modal = document.getElementById("orderModal");
        modal.style.display = "block";

        // Устанавливаем изображение (исправлено)
        const modalImage = document.getElementById("modalImage");
        modalImage.src = "img/legenda/legenda doom.jpg";

        // Устанавливаем и воспроизводим аудио
        const modalAudio = document.getElementById("modalAudio");
        modalAudio.innerHTML =
          '<source src="sound/doom.mp3" type="audio/mpeg">';
        modalAudio.load();

        // Обработка ошибки автовоспроизведения
        modalAudio
          .play()
          .then(() => console.log("Аудио воспроизводится"))
          .catch((e) => {
            console.log("Автовоспроизведение запрещено:", e);
            // Показываем кнопку воспроизведения
            modalAudio.controls = true;
          });
      });
    }
  });

  // Закрытие модального окна
  const closeModalElements = document.querySelectorAll(
    ".close-modal, #orderModal"
  );
  closeModalElements.forEach((el) => {
    el.addEventListener("click", function (e) {
      if (e.target === this || e.target.classList.contains("close-modal")) {
        const modal = document.getElementById("orderModal");
        modal.style.display = "none";

        const modalAudio = document.getElementById("modalAudio");
        if (modalAudio) {
          modalAudio.pause();
          modalAudio.currentTime = 0;
          modalAudio.controls = false;
        }
      }
    });
  });
});

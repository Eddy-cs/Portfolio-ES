document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".hero__image");
  header.style.opacity = 0;
  setTimeout(() => {
    header.style.transition = "opacity 200ms ease-in-out";
    header.style.opacity = 1;
  }, 500);
});

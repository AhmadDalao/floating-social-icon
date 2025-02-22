const trigger = document.querySelector(".floating__social-button > .trigger");
trigger.addEventListener("click", (e) => {
  e.currentTarget.parentElement.classList.toggle("open");
});

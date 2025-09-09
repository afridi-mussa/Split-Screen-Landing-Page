// Button click animation effect
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("active");
    setTimeout(() => button.classList.remove("active"), 250);
  });
});

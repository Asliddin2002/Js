const svContainer = document.querySelector(".svg-icons-container");

document.querySelector(".toggle-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentRotation = parseInt(
    getComputedStyle(svContainer).getPropertyValue("--rotation")
  );
  svContainer.style.setProperty("--rotation", currentRotation + 180);
});

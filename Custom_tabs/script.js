const tabs = document.querySelectorAll("[data-tab]");
const content = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tab);
    content.forEach((con) => {
      con.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    target.classList.add("active");
    tab.classList.add("active");
  });
});

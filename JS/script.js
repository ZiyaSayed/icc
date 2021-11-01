const cross = document.querySelector(".cross");
const sidebar = document.querySelector(".sidebar");
const bar = document.querySelector(".bar");

bar.addEventListener("click", () => {
  sidebar.style["left"] = "0";
});

cross.addEventListener("click", () => {
  sidebar.style["left"] = "-100%";
  sidebar.style["box-shadow"] = "0px 0px 10px 0.1px var(--font2)";
});

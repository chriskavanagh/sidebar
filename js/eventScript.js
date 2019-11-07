const button = document.querySelector(".logodiv");
const cover = document.querySelector(".cover");
const sidebar = document.querySelector(".sidebar");
button.addEventListener("click", function() {
  console.log("Sanity Check");
  cover.classList.toggle("overlay");
  sidebar.classList.toggle("open");
});

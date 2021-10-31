const menuButton = document.querySelector(".menu");
const mediaQuery = window.matchMedia("(min-width: 768px)");

menuButton.addEventListener("click", showMenu);

function showMenu() {
  const menu = document.querySelector(".nav-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function hideMenu() {
  if (mediaQuery.matches) {
    menu.style.display === "block";
  }
}

console.log(menuButton);

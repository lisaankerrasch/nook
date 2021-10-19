const menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", showMenu);

function showMenu() {
  const menu = document.querySelector(".nav-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

console.log(menuButton);

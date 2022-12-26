var divApp = document.querySelector("#app");
var buttonSwitch = document.querySelector("#swap");

buttonSwitch.addEventListener("click", changeTheme);

function changeTheme() {
  buttonSwitch.classList.toggle("button_night");
  divApp.classList.toggle("night");
}

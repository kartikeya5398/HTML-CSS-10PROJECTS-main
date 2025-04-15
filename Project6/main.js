const menuBarEl = document.getElementById("menuBar");

const menuMobileEl = document.querySelector(".menu_mobile");

const onClose = () => {
  menuMobileEl.classList.toggle("show_menuBar");
};
menuBarEl.addEventListener("click", () => {
  //   console.log("menubar Clicked");

  onClose();
});

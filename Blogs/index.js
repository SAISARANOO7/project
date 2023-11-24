var nav_bar = document.querySelector(".nav");
var header_part = document.querySelector(".firstDesc");
var div_img = document.querySelector("#logo");
window.addEventListener("scroll", checkscroll);
var animationDone = false;
function checkscroll() {
  //getBounding clientReact will give the proper dimension of the elemnt in web page
  var coordinates_nav = nav_bar.getBoundingClientRect();
  var coordinates_header = header_part.getBoundingClientRect();
  if (!animationDone && coordinates_nav.top >= coordinates_header.top) {
    animationDone = false;
    nav_bar.classList.remove("nav_color1");
    nav_bar.classList.add("nav_color2");
    div_img.classList.remove("logo_cont");
    div_img.classList.add("logo_cont1");
  }
  if (!animationDone && coordinates_nav.top <= coordinates_header.top) {
    nav_bar.classList.add("nav_color1");
    nav_bar.classList.remove("nav_color2");
    div_img.classList.add("logo_cont");
    div_img.classList.remove("logo_cont1");
    animationDone;
  }
}
var login_button = document.querySelector(".modal_login");
var modal_bg = document.querySelector(".modal_bg");
var modal_close = document.querySelector(".modal_close");
login_button.addEventListener("click", function () {
  modal_bg.classList.add("modal_bg_active");
});
modal_close.addEventListener("click", function () {
  modal_bg.classList.remove("modal_bg_active");
});

// for the login passing from one page to another page
const init = function (e) {
  let btn = document.querySelector(".btn");
  let username = document.getElementById("email");
  btn.addEventListener("click", function () {
    localStorage.setItem("username", JSON.stringify(username.value));
    window.document.location = "./blogs/blogs.html";
  });
};

document.addEventListener("DOMContentLoaded", function () {
  init();
});
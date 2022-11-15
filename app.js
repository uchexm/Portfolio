
/*const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
})

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

$(function() {
  $(".toggle").on("click", function(){
    if($(".nav-menu a").hasClass("active")){
      $(".nav-menu a").removeClass("active");
    }else{
      $(".nav-menu a").addClass("active");
    }
  })
});

$(function() {
  $(".toggle1").on("click", function(){
    if($(".nav-menu a").hasClass("active")){
      $(".nav-menu a").removeClass("active");
    }else{
      $(".nav-menu a").addClass("active");
    }
  })
});
*/

const menu = document.querySelector("#mobile-menu");
const menuItem = document.querySelector(".nav-menu");

menu.addEventListener("click", function() {
  menu.classList.toggle("is-active");
  menuItem.classList.toggle("active");
})
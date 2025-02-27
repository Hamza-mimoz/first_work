let dropMenu = document.getElementById("dropmenu");
let slader = document.getElementById("sladerId");
dropMenu.style.maxHeight = "0px";
slader.style.marginTop = "0px";
function toggleMenu() {
  if (dropMenu.style.maxHeight == "0px" && slader.style.marginTop == "0px") {
    dropMenu.style.maxHeight = "300px";
    slader.style.marginTop = "250px";
  } else {
    dropMenu.style.maxHeight = "0px";
    slader.style.marginTop = "0px";
  }
}

let btnslad = document.querySelector(".btn-slade");

let btn1 = document.getElementById("b1");
let btn2 = document.getElementById("b2");
let btn3 = document.getElementById("b3");

let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");

document.addEventListener("DOMContentLoaded", function () {
  btn1.classList.add("active1");
});

btnslad.addEventListener("click", function (e) {
  let tareget = e.target.id;
  if (tareget == "b1") {
    btn1.classList.add("active1");
    btn2.classList.remove("active1");
    btn3.classList.remove("active1");
    slide1.style.right = "0%";
    slide2.style.right = "0%";
    slide3.style.right = "0%";
  } else if (tareget == "b2") {
    btn1.classList.remove("active1");
    btn2.classList.add("active1");
    btn3.classList.remove("active1");
    slide1.style.right = "110%";
    slide2.style.right = "110%";
    slide3.style.right = "110%";
  } else if (tareget == "b3") {
    btn1.classList.remove("active1");
    btn2.classList.remove("active1");
    btn3.classList.add("active1");
    slide1.style.right = "210%";
    slide2.style.right = "210%";
    slide3.style.right = "210%";
  }
});

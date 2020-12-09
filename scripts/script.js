// JavaScript Document
var demenuButton = document.querySelector("header nav button:first-of-type");
console.log(demenuButton);

function openMenu(){
    var hetMenu = document.querySelector("header nav ul");
    hetMenu.classList.toggle("open");
}

var witHartje = document.querySelector(".like");

function witteHart(){
    witHartje.innerHTML = "❤️";

}

demenuButton.addEventListener("click", openMenu);
witHartje.addEventListener("click", witteHart);

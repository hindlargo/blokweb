var demenuButton = document.querySelector("header nav button:first-of-type");
var hetMenu = document.querySelector("header nav ul");
var witHartje = document.querySelector(".like");
var witHartje1 = document.querySelector(".like1");


function openMenu(){
    hetMenu.classList.toggle("open");
}

function witteHart(){
    witHartje.innerHTML = "❤️";
}

function witteHart1(){
    witHartje1.innerHTML = "❤️";
}

demenuButton.addEventListener("click", openMenu);
witHartje.addEventListener("click", witteHart);
witHartje1.addEventListener("click", witteHart1);


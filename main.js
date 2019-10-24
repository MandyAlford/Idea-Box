var textInput = document.querySelector("#title-input");
var cardTitle = document.querySelector("h2");
var bodyInput = document.querySelector("body");
var cardText = document.querySelector(".card-text");
var expandedMenu = document.querySelector(".expanded-menu");
// var asideExpanded = document.querySlector("aside");

var dropdownMenu = document.querySelector(".dropdown-menu");
dropdownMenu.addEventListener("click", function(){
  var aside = document.getElementsByClassName("starred")[0];
  if (aside.style.display === "block") {
   aside.style.display = "none";
 } else {
   aside.style.display = "block";
 }
  // asideExpanded.classList.toggle("expanded-menu");
})
//when click on dropdown menu, the menu pops up. an x replaces the nav
//menu and only the h1, .starred, and #show are visible.
//a gradient appears over the rest of the page

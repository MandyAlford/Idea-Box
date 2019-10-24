var textInput = document.querySelector("#title-input");
var cardTitle = document.querySelector("h2");
var bodyInput = document.querySelector("body");
var cardText = document.querySelector(".card-text");
var expandedMenu = document.querySelector(".expanded-menu");
// var asideExpanded = document.querySlector("aside");

var dropdownMenu = document.querySelector(".dropdown-menu");
dropdownMenu.addEventListener("click", function(){
  var aside = document.getElementsByClassName("starred")[0];
 //  if (aside.style.display === "block") {
 //   aside.style.display = "none";
 // } else {
 //   aside.style.display = "block";
 // }
   aside.classList.toggle("starred");
   aside.classList.toggle("starred-media-active");
})



//when click on dropdown menu, the menu pops up. an x replaces the nav
//menu and only the h1, .starred, and #show are visible.
//a gradient appears over the rest of the page
var cardSection = document.querySelector(".bottom-section");
var submitForm = document.querySelector("#save-btn");

submitForm.addEventListener("click", cardData);

function cardData(event) {
  var cardTitleText = document.getElementById("title-input");
  var cardBodyText = document.getElementById("body-input")
  event.preventDefault();
  cardSection.innerHTML += `
    <div class="single-card">
      <header class="header-icons">
        <img src="./assets/star-active.svg">
        <img  src="./assets/delete.svg">
      </header>
      <section class="card-body">
        <h2>${cardTitleText.value}</h2>
        <p class="card-text">${cardBodyText.value}</p>
      </section>
    <footer>
      <img src="./assets/comment.svg" alt="comment icon">
      <p>Comment</p>
    </footer>
</div>`;
document.querySelector("form").reset();
};

//Generate Random Number ID
var outputAlph = "";
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var length = alphabet.length/9;
var outputNumA = (Math.ceil(Math.random() * 1000));
var outputNumB = (Math.ceil(Math.random() * 1000));

  for ( var i = 0; i < length; i++ ) {
      outputAlph += alphabet.charAt(Math.floor(Math.random() * length));
   }

console.log(outputAlph)
console.log(outputNumA)
console.log(outputNumB)

var ID = `${outputAlph}-${outputNumA}-${outputNumB}`

console.log(ID);

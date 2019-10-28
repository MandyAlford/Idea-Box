// ----------- Global Variables ------------
var cardTitle = document.querySelector("h2");
var expandedMenu = document.querySelector(".expanded-menu");
var cardSection = document.querySelector(".bottom-section");
var submitForm = document.querySelector("#save-btn");
var deleteBtn = document.querySelector(".delete-btn");
var faveBtn = document.querySelector("#fave-btn");
// var asideExpanded = document.querySlector("aside");
var dropDownMenu = document.querySelector(".dropdown-menu");


// ----------- Event Listeners ------------
submitForm.addEventListener("click", cardData);
cardSection.addEventListener("click", deleteCard);
cardSection.addEventListener("click", favoriteCard);

dropDownMenu.addEventListener("click", function(){
  var aside = document.querySelector("#aside-menu");
   aside.classList.toggle("starred-inactive");
   aside.classList.toggle("starred-media-active");
});

function cardData(event) {
  var cardTitleText = document.getElementById("title-input");
  var cardBodyText = document.getElementById("body-input")
  event.preventDefault();
  cardSection.innerHTML += `
    <div class="single-card" "delete">
      <header class="header-icons">
        <img class="fave-inactive" id="fave-btn" alt="favorite icon">
        <img class="delete-btn" src="./assets/delete.svg" alt="delete icon">
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

function deleteCard(event) {
  if(event.target.classList.contains("delete-btn")) {
    event.target.parentNode.parentNode.remove();
  }
}


// ----- Generate Random Number ID -----
var outputAlph = "";
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var length = alphabet.length/9;
var outputNumA = (Math.ceil(Math.random() * 1000));
var outputNumB = (Math.ceil(Math.random() * 1000));

  for ( var i = 0; i < length; i++ ) {
      outputAlph += alphabet.charAt(Math.floor(Math.random() * length));
   }

var ID = `${outputAlph}-${outputNumA}-${outputNumB}`

console.log(ID);

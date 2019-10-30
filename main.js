// ----------- Global Variables ------------
var cardBodyText = document.getElementById("body-input");
var cardTitle = document.querySelector("h2");
var expandedMenu = document.querySelector(".expanded-menu");
var cardSection = document.querySelector(".bottom-section");
var cardTitleText = document.getElementById("title-input");
var expandedMenu = document.querySelector(".expanded-menu");
var submitForm = document.querySelector("#save-btn");
var deleteBtn = document.querySelector(".delete-btn");
var faveBtn = document.querySelector("#fave-btn");
var dropDownMenu = document.querySelector(".dropdown-menu");


// ----------- Event Listeners ------------
cardSection.addEventListener("click", deleteCard);
submitForm.addEventListener("click", createCard);
cardTitleText.addEventListener("keyup", enableSaveBtn);
cardBodyText.addEventListener("keyup", enableSaveBtn);

dropDownMenu.addEventListener("click", function(){
  var aside = document.querySelector("#aside-menu");
   aside.classList.toggle("starred-inactive");
   aside.classList.toggle("starred-media-active");
});

//when click on dropdown menu, the menu pops up. an x replaces the nav
//menu and only the h1, .starred, and #show are visible.
//a gradient appears over the rest of the page

function enableSaveBtn(event) {
  event.preventDefault();
  var titleInput = document.querySelector("#title-input");
  var bodyInput = document.querySelector("#body-input");
  if (titleInput.value === "" || bodyInput.value === "") {
  submitForm.classList.add("disabled");
  }else{
    submitForm.classList.remove("disabled");
  }
}

function createCard(event) {
  event.preventDefault();
  cardSection.innerHTML += `
    <div class="single-card" "delete">
      <header class="header-icons">
        <img class="star">
        <img src="./assets/delete.svg" class="delete-btn">
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
    toggleFavorite();
    document.querySelector("form").reset();
    submitForm.classList.add("disabled");
};


function deleteCard(event) {
  if(event.target.classList.contains("delete-btn")) {
    event.target.parentNode.parentNode.remove();
  }
}

// ----- Toggle Favorite Star -----

// When a user clicks on the white star on a card,the star should turn red.
// WHen a user clicks on a red star on a card, the card should turn white

function toggleFavorite(){
  document.querySelector("form").reset();
  var starButton = document.querySelector(".star");
  starButton.addEventListener("click", function(event){
    if (event.target.classList.contains("star")) {
      event.target.classList = "star-active";
    } else if (event.target.classList.contains("star-active")) {
      event.target.classList = "star";
    }
  })
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

console.log(ID)

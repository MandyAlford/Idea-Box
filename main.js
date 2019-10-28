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




//when click on dropdown menu, the menu pops up. an x replaces the nav
//menu and only the h1, .starred, and #show are visible.
//a gradient appears over the rest of the page


submitForm.addEventListener("click", enableSaveBtn);

function enableSaveBtn() {
  var formInputs = document.querySelector(".content").value;
  if (formInputs === "") {
    document.getElementById("save-btn").disabled = true;
  } else {
    document.getElementById("save-btn").disabled = false;
    cardData(event);
  }
}

// submitForm.addEventListener("click", cardData);

function cardData(event) {
  event.preventDefault();
  cardSection.innerHTML += `
    <div class="single-card" "delete">
      <header class="header-icons">
        <img class="star">
        <img src="./assets/delete.svg">
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

toggleFavorite()
document.querySelector("form").reset();
};

// ----- Toggle Favorite Star -----

// When a user clicks on the white star on a card,the star should turn red.
// WHen a user clicks on a red star on a card, the card should turn white

function toggleFavorite(){
  var starButton = document.querySelector(".star");

  starButton.addEventListener("click", function(event){
    if (event.target.classList.contains("star")) {
      event.target.classList = "star-active"
    } else if (event.target.classList.contains("star-active")) {
      event.target.classList = "star"
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

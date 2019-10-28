var cardTitle = document.querySelector("h2");
var expandedMenu = document.querySelector(".expanded-menu");
var cardSection = document.querySelector(".bottom-section");
var submitForm = document.querySelector("#save-btn");
// var asideExpanded = document.querySlector("aside");

var dropdownMenu = document.querySelector(".dropdown-menu");
dropdownMenu.addEventListener("click", function(){
  var aside = document.querySelector("#aside-menu");
  console.log("works");
   aside.classList.toggle("starred-inactive");
   aside.classList.toggle("starred-media-active");
});



//when click on dropdown menu, the menu pops up. an x replaces the nav
//menu and only the h1, .starred, and #show are visible.
//a gradient appears over the rest of the page


submitForm.addEventListener("click", cardData);

function cardData(event) {
  var cardTitleText = document.getElementById("title-input");
  var cardBodyText = document.getElementById("body-input")
  event.preventDefault();
  cardSection.innerHTML += `
    <div class="single-card">
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

console.log(outputAlph)
console.log(outputNumA)
console.log(outputNumB)

var ID = `${outputAlph}-${outputNumA}-${outputNumB}`

console.log(ID);

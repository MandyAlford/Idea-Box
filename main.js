var cardBodyText = document.getElementById("body-input");
var cardSection = document.querySelector(".bottom-section");
var cardTitleText = document.getElementById("title-input");
var expandedMenu = document.querySelector(".expanded-menu");
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

console.log(ID)

// ----------- Global Variables ------------
var cardBodyText = document.getElementById("body-input");
var cardSection = document.querySelector(".bottom-section");
var cardTitle = document.querySelector("h2");
var cardTitleText = document.getElementById("title-input");
var deleteBtn = document.querySelector(".delete-btn");
var dropDownMenu = document.querySelector(".dropdown-menu");
var expandedMenu = document.querySelector(".expanded-menu");
var expandedMenu = document.querySelector(".expanded-menu");
var faveBtn = document.querySelector("#fave-btn");
var storedIdeas = [];
var submitForm = document.querySelector("#save-btn");


// ----------- Event Listeners ------------
submitForm.addEventListener("click", createCard);
cardSection.addEventListener("click", deleteCard);
cardSection.addEventListener("click", toggleFavorite);
cardTitleText.addEventListener("keyup", enableSaveBtn);
cardBodyText.addEventListener("keyup", enableSaveBtn);

dropDownMenu.addEventListener("click", function(){
  var aside = document.querySelector("#aside-menu");
   aside.classList.toggle("starred-inactive");
   aside.classList.toggle("starred-media-active");
});


dropDownMenu.addEventListener("click", function(){
  var main = document.querySelector(".shade-area");
  main.classList.toggle("shade-area-on");
})

// Replace hamburger menu with menu-close icon //
dropDownMenu.addEventListener("click", function(){
  var closeMenu = document.querySelector(".menu-close");
  dropDownMenu.classList.toggle(".menu-close");
})


submitForm.addEventListener("click", enableSaveBtn);


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
    var idCode = createId();
    //FINALLY USING THE CLASS - DONT DELETE
    var newIdea = new Idea(idCode, cardTitleText.value, cardBodyText.value);
    console.log(event)
    document.querySelector("form").reset();
    storedIdeas.push(newIdea);
    submitForm.classList.add("disabled");
};

function deleteCard(event) {
  if(event.target.classList.contains("delete-btn")) {
    event.target.parentNode.parentNode.remove();
  }
}


// ----- Toggle Favorite Star -----
function toggleFavorite(event) {
  if (event.target.classList.contains("star")) {
    event.target.classList = "star-active";
  } else if (event.target.classList.contains("star-active")) {
    event.target.classList = "star";
  }
}



//create an array to store the objects created
//filter by Favorite
//save and delete from local storage as array



//storedIdeas.Filter//return favorite = true;
//get rid of HTML thats there and re-add only favorited cardSection
//if favorite array = [] user instrucitons to favorite a card
//



// ----- Generate Random Number ID -----
//date.now to create random ID
function createId() {
  var outputAlph = "";
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var length = alphabet.length/9;
  var outputNumA = (Math.ceil(Math.random() * 1000));
  var outputNumB = (Math.ceil(Math.random() * 1000));
  for ( var i = 0; i < length; i++ ) {
      outputAlph += alphabet.charAt(Math.floor(Math.random() * length));
   }
   var idCode = `${outputAlph}-${outputNumA}-${outputNumB}`
   return idCode;
 }

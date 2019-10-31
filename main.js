// ----------- Global Variables ------------
var cardBodyText = document.getElementById("body-input");
var cardTitle = document.querySelector("h2");
var cardTitleText = document.getElementById("title-input");
var cardSection = document.querySelector(".bottom-section");
var deleteBtn = document.querySelector(".delete-btn");
var dropDownMenu = document.querySelector(".dropdown-menu");
var expandedMenu = document.querySelector(".expanded-menu");
var faveBtn = document.querySelector("#fave-btn");
var saveBtn = document.querySelector("#save-btn");
var storedIdeas = [];

// ----------- Event Listeners ------------
cardBodyText.addEventListener("keyup", enableSaveBtn);
cardSection.addEventListener("click", cardEdit);
cardTitleText.addEventListener("keyup", enableSaveBtn);
dropDownMenu.addEventListener("click", mediaQueryMenu);
saveBtn.addEventListener("click", activeSaveButton);

function mediaQueryMenu() {
  mediaMenu();
  shadeArea();
}

function activeSaveButton(event) {
  enableSaveBtn(event);
  createCard(event);
}

function cardEdit(event) {
  deleteCard(event);
  toggleFavorite(event);
}


function mediaMenu() {
  var aside = document.querySelector("#aside-menu");
   aside.classList.toggle("starred-inactive");
   aside.classList.toggle("starred-media-active");
}

function shadeArea() {
  var main = document.querySelector(".shade-area");
  main.classList.toggle("shade-area-on");
}

//are we using this?
// Replace hamburger menu with menu-close icon //
dropDownMenu.addEventListener("click", function(){
  var closeMenu = document.querySelector(".menu-close");
  dropDownMenu.classList.toggle(".menu-close");
})

function enableSaveBtn(event) {
  event.preventDefault();
  var titleInput = document.querySelector("#title-input");
  var bodyInput = document.querySelector("#body-input");
  if (titleInput.value === "" || bodyInput.value === "") {
    saveBtn.classList.add("disabled");
  } else {
    saveBtn.classList.remove("disabled");
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
    var newIdea = new Idea(idCode, cardTitleText.value, cardBodyText.value);
    storedIdeas.push(newIdea);
    newIdea.saveToStorage(storedIdeas);
    document.querySelector("form").reset();
    saveBtn.classList.add("disabled");
};


function deleteCard(event) {
  if(event.target.classList.contains("delete-btn")) {
    event.target.parentNode.parentNode.remove();
    var newIdea = new Idea(idCode, cardTitleText.value, cardBodyText.value);
    storedIdeas.pop();
  }
}

function toggleFavorite(event) {
  if (event.target.classList.contains("star")) {
    event.target.classList = "star-active";
  } else if (event.target.classList.contains("star-active")) {
    event.target.classList = "star";
  }
}


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

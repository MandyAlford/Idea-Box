var cardBodyText = document.getElementbyId("body-input").value;
var cardSection = document.querySelector(".bottom-section")
var submitForm = document.querySelector("#save-btn");

submitForm.addEventListener('click', cardData);

function cardData(event) {
  event.preventDefault();
  cardSection.innerHTML += `
    <div class="single-card">
      <header class="header-icons">
        <img src="./assets/star-active.svg">
        <img  src="./assets/delete.svg">
      </header>
      <section class="card-body">
        <h2>${cardBodyText}</h2>
        <p class="card-text">${cardBodyText}</p>
      </section>
        <footer>
          <img src="./assets/comment.svg" alt="comment icon">
          <p>Comment</p>
        </footer>
    </div>`









class Idea {
  constructor(id) {
    this.id = id;
    this.title = [];
    this.body = [];
    this.favorite = false;
  }

  saveToStorage() {
  }

  deleteFromStorage() {
  }

  updateIdea() {
  }
}
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

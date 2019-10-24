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

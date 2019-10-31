class Idea {
  constructor(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.favorite = false;
  }

  saveToStorage(newIdea) {
    var stringifiedObject = JSON.stringify(newIdea);
    var saveCard = localStorage.setItem('ideaCard', stringifiedObject);
  }

  deleteFromStorage(newIdea) {
    var saveCard = localStorage.removeItem('ideaCard');
  }

  updateIdea(id) {
  }
}

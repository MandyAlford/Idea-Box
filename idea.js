
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

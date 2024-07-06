const container = document.querySelector(".cardGrid");
class Book{
  constructor(name, read = "Reading") {
    this.name=name;
    this.read=read;
  }
  
  static printBooks(){
    container.innerHTML = ""; // Clear previous entries
    for (let x = 0; x < myLibrary.length; x++) {
      const newCard = document.createElement("div");
      newCard.classList.add("card");
      if (myLibrary[x].read === "Finished") {
        newCard.style.backgroundColor = "green";
      } else {
        newCard.style.backgroundColor = "black";
      }
      newCard.innerHTML = `
        <h2>Name of Book:</h2> ${myLibrary[x].name} <br> 
        <p>Status: ${myLibrary[x].read}</p>
        <button onclick="Book.removeCard(${x})">Remove Book</button>
        <br> <button onclick="Book.changeRead(${x})">Change Read Status</button>
      `;
      container.appendChild(newCard);
    }
  }

  static addBook(){
    const bookNameInput = document.getElementById("bookName");
    const bookName = bookNameInput.value.trim();
    if (bookName) {
      const book = new Book(bookName);
      myLibrary.push(book); // Push the book instance
      bookNameInput.value = ""; // Clear the input field
      this.printBooks(); // Update the display
    }
  }

  static removeCard(index){
    myLibrary.splice(index, 1); // Remove the book at the specified index
    this.printBooks(); // Update the display
  }
  static changeRead(index){
    myLibrary[index].read = myLibrary[index].read === "Reading" ? "Finished" : "Reading";
    this.printBooks(); // Update the display
  }
}
const myLibrary = [
  new Book("Harry Potter 1")
];
  
document.addEventListener("DOMContentLoaded", () => {
  // Add book button event listener
  document.getElementById("addBookBtn").addEventListener("click", () => {
    Book.addBook();
  });
  Book.printBooks();
});




const myLibrary = [
    new Book("Harry Potter 1"),
    new Book("Harry Potter 2"),
    new Book("Harry Potter 3")
  ];
  const container = document.querySelector(".cardGrid");
  
  function Book(name) {
    this.name = name;
    this.read = "Reading";
  }
  
  Book.prototype.printBooks = function() {
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
        <h2> Name of Book: </h2> ${myLibrary[x].name} <br> 
        <p>Status: ${myLibrary[x].read}</p>
        <button onclick="bookInstance.removeCard(${x})">Remove Book</button>
        <br> <button onclick="bookInstance.changeRead(${x})">Change Read Status</button>
      `;
      container.appendChild(newCard);
    }
  };
  
  Book.prototype.addBookToLibrary = function() {
    const bookNameInput = document.getElementById("bookName");
    const bookName = bookNameInput.value.trim();
    if (bookName) {
      const book = new Book(bookName);
      myLibrary.push(book); // Push the book instance
      bookNameInput.value = ""; // Clear the input field
      this.printBooks(); // Update the display
    }
  };
  
  Book.prototype.removeCard = function(index) {
    myLibrary.splice(index, 1); // Remove the book at the specified index
    this.printBooks(); // Update the display
  };
  
  Book.prototype.changeRead = function(index) {
    // Toggle the read status between "Reading" and "Finished"
    myLibrary[index].read = myLibrary[index].read === "Reading" ? "Finished" : "Reading";
    this.printBooks(); // Update the display
  };
  
  const bookInstance = new Book(); // Create an instance of Book
  
  




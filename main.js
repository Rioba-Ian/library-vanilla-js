let myLibrary = [
  {
    index: 1,
    book: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    read: true,
  },
];

const form = document.querySelector("form");

const bookCards = document.querySelector(".book-cards");

function Book() {
  // constructor ..
}

function addBookToLibrary() {
  // add book to my library
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const readVal = formData.get("read");
    if (!readVal) {
      formData.append("read", false);
    }

    const formerIndex = [...myLibrary].at(-1).index 
    
    const formDataObj = Object.fromEntries(formData.entries());

    formDataObj.index = formerIndex+1


    myLibrary = [...myLibrary, formDataObj]
    console.log(formDataObj);
    console.log(myLibrary);

    form.reset();
    closeModal();

    displayBooks();
  });
}

function displayBooks() {
  const card = document.createElement("div");
  card.classList.add("card");
  

  myLibrary.map((bookItem) => {
    card.innerHTML = `<h3>Book: ${bookItem.book}</h3>
                    <h4>Author: ${bookItem.author}</h4>
                    <p class="book--pages">Pages: ${bookItem.pages}</p>
                    <p class="book--read">Read Status: ${
                      bookItem.read == true ? "Read" : "Not yet read."
                    }</p>
                    <label class="switch">
                      <input type="checkbox" ${bookItem.read == true? "checked": ""}>
                      <span class="slider"></span>
                    </label>
                    <span id="delete--book" class="material-symbols-rounded">
                    delete
                    </span>
                    `;
  });

  bookCards.appendChild(card);
}

// toggle the read status from not yet to read and vice versa
function toggleReadStatus() {
  const readStatus = document.querySelector(".book--read");
}

// delete a book

function deletefromLibrary(){

}

displayBooks();

addBookToLibrary();

// modal functionality to add book into library

const modal = document.querySelector("#modal");

const openModalBtn = document.querySelector(".add-book");
const closeModalBtn = document.querySelector("#close-modal");
const overlay = document.querySelector(".overlay");

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

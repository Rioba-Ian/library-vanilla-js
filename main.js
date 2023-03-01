let myLibrary = [
  {
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

    const formDataObj = Object.fromEntries(formData.entries());

    myLibrary = [...myLibrary, formDataObj];
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
                      <input type="checkbox" checked="">
                    </label>
                    <span id="delete--book" class="material-symbols-rounded">
                    delete
                    </span>
                    `;
  });

  bookCards.appendChild(card);
}

function toggleReadStatus() {
  const readStatus = document.querySelector(".book--read");
}

displayBooks();

addBookToLibrary();

// modal functionality

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

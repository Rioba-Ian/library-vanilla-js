let myLibrary = [
  {
    book: "The Hobbit",
    author: "JK Rowlins",
    pages: 289,
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

    displayBooks()
  });

}


function displayBooks() {
  const card = document.createElement("div");
  card.classList.add("card");

  myLibrary.map((bookItem) => {
    card.innerHTML = `<p>${bookItem.book}</p>
                    <p>${bookItem.author}</p>
                    <p>${bookItem.book}</p>
                    <p>${bookItem.read == true ? "Read" : "Not yet read."}</p>
                    `;
  })

  bookCards.appendChild(card)
}


displayBooks()

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


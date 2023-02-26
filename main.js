let myLibrary = [
  {
    "book": "The Hobbit",
    "author": "JK Rowlins",
    "pages": 289,
    "read": true
  }
]

function Book() {
  // constructor ..

}

function addBookToLibrary() {
  // stuff here..
}


const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(form)

  const readVal = formData.get('read')
  if (!readVal) {
    formData.append('read', false)
  }

  const formDataObj = Object.fromEntries(formData.entries())

  myLibrary = [...myLibrary, formDataObj]
  console.log(formDataObj)
  console.log(myLibrary)

  form.reset()
  closeModal()
})


// modal functionality

const modal = document.querySelector("#modal")

const openModalBtn = document.querySelector(".add-book")
const closeModalBtn = document.querySelector("#close-modal")
const overlay = document.querySelector(".overlay")


openModalBtn.addEventListener("click", openModal)

closeModalBtn.addEventListener("click", closeModal)

console.log(myLibrary)


function openModal() {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

function closeModal() {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}
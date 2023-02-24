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

  console.log([...formData.entries()])
})















console.log(myLibrary)
const books = {}

function getBooks() {
    return books;
}

function getBookById(id) {
  let book = books[id]

    if (!book) {
      return null;
    }

    return book.id
}

function saveBook(book) {
  books[book.id] = book
}

saveBook({id: 'book-1', name: 'Book 1'});
let myBooks = getBooks()
const myBook = getBookById('book-1');

console.log(myBooks);
console.log(myBook);

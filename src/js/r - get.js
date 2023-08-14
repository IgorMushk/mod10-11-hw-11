//const BASE_URL = 'http://localhost:4040';

const BASE_URL = 'http://localhost:3000';

http: function fetchBooks() {
  //return fetch(`${BASE_URL}/books`).then(res => res.json());
  return fetch(`${BASE_URL}/books`)
    .then(res => res.json())
    .then(console.log);
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
}

fetchBooks();
fetchBookById(2);
fetchBookById(4);

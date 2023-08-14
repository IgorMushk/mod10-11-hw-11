//const BASE_URL = 'http://localhost:4040';
const BASE_URL = 'http://localhost:3000';

function removeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}

// removeBook(15);
// removeBook(14);

removeBook(25);
removeBook(26);

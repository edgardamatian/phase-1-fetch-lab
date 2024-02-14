function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    // Call the renderBooks function with the JSON object
    renderBooks(json);
  });  
};   
    // Call the renderBooks function with the books array
    renderBooks(books);

    // Find the 5th book in the series
    const fifthBook = books[4];
    console.log(fifthBook);

    // Find the 103rd character in the series
    const seriesText = books.reduce((text, book) => text + book.name, '');
    const character = seriesText[1030];
    console.log(character);

    // Find the total number of pages of all the books
    const totalPages = books.reduce((total, book) => total + book.numberOfPages, 0);
    console.log(totalPages);

    function renderBooks(books) {
      const main = document.querySelector('main');
      books.forEach(book => {
        const h2 = document.createElement('h2');
        h2.innerHTML = book.name;
        main.appendChild(h2);
      });
    }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

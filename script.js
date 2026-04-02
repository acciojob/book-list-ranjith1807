
function addrow() {

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  const bookList = document.getElementById('book-list');

  const row = document.createElement('tr');


  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">X</button></td>
  `;


  bookList.appendChild(row);
}


document.getElementById('book-list').addEventListener('click', function(e) {

  if (e.target.classList.contains('delete')) {

    e.target.parentElement.parentElement.remove();
  }
});
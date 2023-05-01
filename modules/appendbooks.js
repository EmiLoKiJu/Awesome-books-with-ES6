const appendNewBook = (book, bookcollection, isStorage, bookscontainer) => {
  bookcollection.addBook(book);
  localStorage.setItem('bookcollection', JSON.stringify(bookcollection));
  const div1 = document.createElement('div');
  div1.classList.add('dflex');
  div1.classList.add('spacebetween');
  if (bookcollection.collection.indexOf(book) % 2 !== 0) div1.classList.add('grey');
  const content = `<p>"${book.title}" by ${book.author}</p><button class="removebutton">Remove</button>`;
  div1.innerHTML = content;
  bookscontainer.appendChild(div1);
  const removebutton = div1.querySelector('.removebutton');
  removebutton.addEventListener('click', () => {
    bookcollection.removeBook(book);
    localStorage.setItem('bookcollection', JSON.stringify(bookcollection));
    div1.remove();
  });
}

export default appendNewBook;
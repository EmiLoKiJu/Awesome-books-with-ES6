// Checking local storage

import storageAvailable from "./modules/isStorageValid.js";
const isStorage = storageAvailable('localStorage')

// Creating a new collection of books

import bookcollection from "./modules/bookcollection.js";
const BookCol = new bookcollection();

// Creating some const for the document

const bookscontainer = document.querySelector('.bookscontainer');
const addbook = document.querySelector('.addbutton');
const book = {
  title: '',
  author: '',
};

// Getting the functionality to add books to local storage, and to the collection class

import appendNewBook from "./modules/appendbooks.js";

// Calling the events when clicking

addbook.addEventListener('click', () => {
  const newbook = Object.create(book);
  newbook.title = document.querySelector('#title').value;
  newbook.author = document.querySelector('#author').value;
  appendNewBook(newbook, BookCol, isStorage, bookscontainer);
});

// Calling the events when loading the document

document.addEventListener('DOMContentLoaded', () => {
  const booksstoraged = JSON.parse(localStorage.getItem('bookcollection'));
  if (isStorage && booksstoraged != null) {
    for (let i = 0; i < booksstoraged.collection.length; i += 1) {
      appendNewBook(booksstoraged.collection[i], BookCol, isStorage, bookscontainer);
    }
  }
});

// Adding functionalities to the navbar

const menu = document.querySelectorAll('header li');
const section = document.querySelectorAll('.section');
import menuselector from "./modules/menuselector.js";
for (let i = 0; i < menu.length; i += 1) {
  menu[i].addEventListener('click', () => {
    menuselector(menu[i], menu, section);
  });
}

// Date and time

const datetime = document.querySelector('.dateandtime');
import { DateTime } from "./modules/dateandtime.js";
const updateTime = () => {
  const dt = DateTime.now();
  const formattedDate = dt.toFormat('LLL d, yyyy, hh:mm:ss a');
  datetime.innerHTML = formattedDate;
}

setInterval(updateTime, 1000);
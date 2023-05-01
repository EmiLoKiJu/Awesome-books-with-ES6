class bookcollection {
  constructor() {
    this.collection = [];
  }

  addBook(book) {
    this.collection.push(book);
  }

  removeBook(book) {
    const index = this.collection.indexOf(book);
    this.collection.splice(index, 1);
  }
}

export default bookcollection;
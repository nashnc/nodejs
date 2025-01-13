class Book {
  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.fulldata = title + author + yearPublished;
  }

  displayDetails() {
    console.log(
      `title: ${(this, this.title)} ${this.author} ${this.yearPublished}`
    );
  }
}

const book1 = new Book("this", "nash", 20225);

book1.displayDetails();

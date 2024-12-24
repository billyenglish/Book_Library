// index.js
import "./styles.css";

// Virtual Library.

// The Book Form Should have A Book Title.
// The Book Form Should have A Book Author.
// The Book Form Should have A Book Pages.
// The Should show if the book has book read or not.

// I should create a factory function to have the need fields.

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getPages() {
        return this.pages;
    }

    getRead() {
        return this.read;
    }

}

class validateBook extends Book {
    constructor(title, author, pages, read) {
        super(title, author, pages, read);
    }

    checkTitle() {
        if (this.getTitle() !== "") {
            return this.getTitle();
        } else {
            return "Please enter a title";
        }
    }

    checkAuthor() {
        if (this.getAuthor() !== "") {
            return this.getAuthor();
        } else {
            return "Please enter an author";
        }
    }

    checkPages() {
        if (this.getPages() !== "" || this.getPages() > 0) {
            return this.getPages();
        } else {
            return "Please enter a valid number of pages";
        }
    }

    checkRead() {
    }

}

class addBookToLibrary extends validateBook {
    constructor(title, author, pages, read) {
        super(title, author, pages, read);
        this.createBook = new Book(title, author, pages, read);
        this.myLibrary = [];
    }

    getBook() {
        console.log(this.createBook);
    }
}

let book = new addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(book.getBook());

// DOM Logic

class buttonLogic {
    constructor() {
        this.cancelButton = document.querySelector("#cancel");
        this.submitButton = document.querySelector("#submit");
        this.createBook = document.querySelector("#create-book");
    }

    getCancelButton() {
        this.cancelButton.addEventListener("click", () => {
            alert("Cancel Button");
        });
    }

    getSubmitButton() {
        this.submitButton.addEventListener("click", () => {
            alert("Submit Button");
        });
    }

    getCreateBook() {
        this.createBook.addEventListener("click", () => {
            alert("Create Book Button");
        });
    }
}

let button = new buttonLogic();
button.getCancelButton();
button.getSubmitButton();
button.getCreateBook();
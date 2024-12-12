// index.js
import "./styles.css";

// Virtual Library.

// The Book Form Should have A Book Title.
// The Book Form Should have A Book Author.
// The Book Form Should have A Book Pages. 
// The Should show if the book has book read or not.

// I should create a factory function to have the need fields.

const myLibrary = [];

function Book(isTitle, isAuthor, isPages, isRead) {
    this.isTitle = isTitle;
    this.isAuthor = isAuthor;
    this.isPages = isPages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    let newBook = new Book('New Book', 'J.K', 293, true);
    myLibrary.push(newBook);
    validateBook(myLibrary);
}

console.log(addBookToLibrary())

function validateBook(getLibrary) {
    const getBook = [...getLibrary];
    
    getBook.forEach((book) => {
        
        const currentBook = book;
        
        currentBook.isTitle ? validateBookTitle(currentBook.isTitle) : bookTitleError(currentBook.isTitle);

    });

}

function validateBookTitle(bookTitle) {
    console.log(bookTitle);
}

function bookTitleError(bookTitle) {
    console.log(bookTitle);
}
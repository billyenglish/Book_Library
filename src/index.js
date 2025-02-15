import "./styles.css";

// Creating Book Library

// Book Details Book Must have a Title, Author, Pages, it be read and unread.

const myLibrary = [];

function Book(isTitle, isAuthor, isPages, isRead) {
    this.isTitle = isTitle;
    this.isAuthor = isAuthor;
    this.isPages = isPages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    const book = new Book('Title', 'Author', 255, true);

    if (book.isTitle === "" || book.isAuthor === "" || book.isPages === "") {
        return;
    } else {
        myLibrary.push(book);
        return myLibrary;
    }
}

function buildBook() {
    const getBook = addBookToLibrary();

    getBook.forEach((book) => {
        console.log(`The book ${book.isTitle}`);
        console.log(`The book ${book.isAuthor}`);
        console.log(`The book pages ${book.isPages}`);
        console.log(`The read is ${book.isRead}`);
    });
}

console.log(buildBook());

const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookRead = document.querySelector("#book-read");

// Navigation of the Main Section

const topBooks = document.querySelector(".top-books");
const discoveredBooks = document.querySelector(".discover");
const categoriesBooks = document.querySelector(".categories");
const readingBooks = document.querySelector(".reading");
const favoriteBooks = document.querySelector(".favorite-books");
const bookHistory = document.querySelector(".history");
const yourShelves = document.querySelector(".your-shelves");

const mainSection = document.querySelectorAll("section");

topBooks.addEventListener("click", () => {

    mainSection.forEach((section) => {
        if (section.id === "top-books-section") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
});

discoveredBooks.addEventListener("click", () => {

    mainSection.forEach((section) => {
        if (section.id === "discover-section") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });

});

categoriesBooks.addEventListener("click", () => {

    mainSection.forEach((section) => {
        if (section.id === "categories-section") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });

});

readingBooks.addEventListener("click", () => {
    mainSection.forEach((section) => {
        if (section.id === "reading-section") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
});

favoriteBooks.addEventListener("click", () => {

    mainSection.forEach((section) => {
        if (section.id === "favorite-books-section") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });

});

bookHistory.addEventListener("click", () => {

    mainSection.forEach((section) => {
        if (section.id === "history-section") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
});

yourShelves.addEventListener("click", () => {

    mainSection.forEach((section) => {
        if (section.id === "your-shelves-section") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });

});

const createBook = document.querySelector("#create-book");
const dialogBookForm = document.querySelector("#dialog-book-form");
const closeForm = document.querySelector("#close-bookform");
const cancelBook = document.querySelector("#cancel");
const submitBook = document.querySelector("#submit");

function bookFormModal() {
    dialogBookForm.showModal()
}

createBook.addEventListener("click", bookFormModal);

function closeBookFormModal() {
    dialogBookForm.close()
}

closeForm.addEventListener("click", closeBookFormModal);

cancelBook.addEventListener("click", () => {
    alert("Cancel Button");
});

submitBook.addEventListener("click", () => {
    alert("Submit Button");
});

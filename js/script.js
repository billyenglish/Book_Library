// User Input should be the Book!!!
// User Book should include Book Title, Book Author, Book Pages, Has the Book been Read!!!
// User Book conditions that should be mandatory: Title, Author, Pages. However, if the book is read can be optional!
// User Book Library Should track to see how many books are in the Library.

const myLibrary = [];

function Book(isTitle, isAuthor, isPages, isRead) {
    this.isTitle = isTitle,
    this.isAuthor = isAuthor,
    this.isPages = isPages,
    this.isRead = isRead
}

// If the book has been an title add to the array.
// If the book has been an author add to the array.
// If the book has been an pages add to the array.
// If the book can be read or unread.

let book = new Book();
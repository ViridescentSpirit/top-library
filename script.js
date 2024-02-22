const myLibrary = [];

function book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
};

function addBookToLibrary() {
    const bookAdd = new book(title, author, pages, read);

    myLibrary.push(bookAdd);
}

title = 'The Hobbit';
author = 'JRR Tolkien';
pages = 1000;
read = true;

addBookToLibrary();

title = 'Harry Potter';
author = 'JK Rowling';
pages = 500;
read = false;

addBookToLibrary();
console.log(myLibrary);
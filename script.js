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

function displayLibrary() {
    let libraryList = document.getElementById('library');
    let i = 1;

    myLibrary.forEach(book => {
        let libraryBook = document.createElement('div');
        libraryBook.setAttribute('id','bookDiv'+i);
        libraryList.appendChild(libraryBook);
         
        for (const property in book) {
            let currentBook = document.getElementById('bookDiv'+i);
            let newPara = document.createElement('p');

            newPara.textContent = book[property];

            currentBook.appendChild(newPara);
        };

        i++;
    });
};

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

displayLibrary();
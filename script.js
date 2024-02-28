const myLibrary = [];

const showFormButton = document.getElementById('new_book');
showFormButton.addEventListener('click', showForm.bind());

function book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
};

function addBookToLibrary() {
    const bookAdd = new book(title, author, pages, read);

    myLibrary.push(bookAdd);
};

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

function acceptBook(form) {
    title = form.title.value;
    author = form.author.value;
    pages = form.pages.value;
    read = form.read.value;

    addBookToLibrary(title, author, pages, read);
    addToDisplay();

    form.title.value = '';
    form.author.value = '';
    form.pages.value = '';
    document.getElementById('read_book').checked = false;
    document.getElementById('unread_book').checked = false;
    document.getElementById('new_book_form').style.display = 'none';
};

function addToDisplay() {
    let libraryList = document.getElementById('library');
    let i = myLibrary.length;
    let book = myLibrary[i-1];

    let libraryBook = document.createElement('div');
    libraryBook.setAttribute('id','bookDiv'+i);
    libraryList.appendChild(libraryBook);

    for (const property in book) {
        let currentBook = document.getElementById('bookDiv'+i);
        let newPara = document.createElement('p');

        newPara.textContent = book[property];

        currentBook.appendChild(newPara);
    };
};

function showForm() {
    document.getElementById('new_book_form').style.display ='block';
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

displayLibrary();
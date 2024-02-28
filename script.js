const myLibrary = [];

const showFormButton = document.getElementById('new_book');
showFormButton.addEventListener('click', showForm.bind());

function book(title, author, pages, read) {
    this.bookId = `book${++book.id}`;    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

book.id = 0;

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
        libraryBook.classList.add(`${myLibrary.bookId}`);
        libraryList.appendChild(libraryBook);

        let currentBook = document.getElementById('bookDiv'+i);
        
        for (const property in book) {
            if (property === 'bookId') {}
            else if (property === 'read') {
                let newPara = document.createElement('p');
                    if (book[property] === true) {
                        newPara.textContent = 'Read!';
                    } else {
                        newPara.textContent = 'Unread :(';
                    }
                currentBook.appendChild(newPara);
            } 
            else {
                let newPara = document.createElement('p');
                newPara.textContent = book[property];
                currentBook.appendChild(newPara);
            }
        };

        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Remove";
        deleteButton.onclick = remBook;
        currentBook.appendChild(deleteButton);

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
    let currentBook = document.getElementById('bookDiv'+i);

    for (const property in book) {
        console.log(property);
        console.log(book[property]);
        if (property === 'bookId') {}
        else if (property === 'read') {
            let newPara = document.createElement('p');
                if (book[property] === 'true') {
                    newPara.textContent = 'Read!';
                } else {
                    newPara.textContent = 'Unread :(';
                }
            currentBook.appendChild(newPara);
        } 
        else {
            let newPara = document.createElement('p');
            newPara.textContent = book[property];
            currentBook.appendChild(newPara);
        }
    };

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Remove";
    deleteButton.onclick = remBook;
    currentBook.appendChild(deleteButton);
};

function showForm() {
    document.getElementById('new_book_form').style.display ='block';
}

function remBook() {
    const bookId = this.parentElement.classList[1];

    const findBook = myLibrary.findIndex(
        (element) => element.bookId === bookId
    );

    const delBook = myLibrary.splice(findBook, 1);
    this.parentElement.remove();
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
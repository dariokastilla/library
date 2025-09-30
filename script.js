const myLibrary = [];



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Harry Potter", "J.K. Rowling", 350, true);


function displayBooks(){
    const library = document.getElementById("library");
    library.innerHTML = "";
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.className = "book-card";
        const title = document.createElement("h3");
        title.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;
        const read = document.createElement("p");
        read.textContent = `Read: ${book.read ? "Yes" : "No"}`;
        
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        library.appendChild(card);
    }
)
}


const newBookBtn = document.getElementById("newBookButton");

newBookBtn.addEventListener("click", showForm);

function showForm(){
    const container = document.getElementById("formContainer");
    container.innerHTML = "";
    
    const form = document.createElement("form");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title: ";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.name = "title";
    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    
    const authorLabel = document.createElement("label");
    authorLabel.textContent = "Author: ";
    const authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.name = "author";
    form.appendChild(authorLabel);
    form.appendChild(authorInput);

    
    const pagesLabel = document.createElement("label");
    pagesLabel.textContent = "Pages: ";
    const pagesInput = document.createElement("input");
    pagesInput.type = "number";
    pagesInput.name = "pages";
    form.appendChild(pagesLabel);
    form.appendChild(pagesInput);


    const readLabel = document.createElement("label");
    readLabel.textContent = "Read: ";
    const readInput = document.createElement("input");
    readInput.type = "checkbox";
    readInput.name = "read";
    form.appendChild(readLabel);
    form.appendChild(readInput);


    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Add Book";
    form.appendChild(submitBtn);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const titleValue = titleInput.value;
        const authorValue = authorInput.value;
        const pagesValue = pagesInput.value;
        const readValue = readInput.checked;

        addBookToLibrary(titleValue, authorValue, pagesValue, readValue);

        displayBooks()

        form.reset();
    }
    )


    container.appendChild(form);
}



displayBooks();
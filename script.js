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


displayBooks();


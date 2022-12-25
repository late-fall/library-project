let myLibrary = [];

let list = document.querySelector(".list");
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let year = document.querySelector(".year");
let read = document.querySelector(".read");


function Book(author, title, year, read) {
    // the constructor
    this.author = author;
    this.title = title;
    this.year = year;
    this.read = read;
}

//initialize couple books in the library
initialBook = new Book('J.K. Rowling', 'Harry Potter and the Goblet of Fire', 2000, true);
book2 = new Book('J.K. Rowling', 'Harry Potter and the Prisoner of Azkavan', 1999, false);
myLibrary.push(initialBook);
myLibrary.push(book2);

displayBooks();

const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addBtnClick);

function addBtnClick(e) {
    e.preventDefault();
    
    let newTitle = document.querySelector("#booktitle").value;
    let newAuthor = document.querySelector("#author").value;
    let newYear = document.querySelector('#year').value;
    let readStatus = document.querySelector('#read').checked;

    newRead = (readStatus ? "Read": "Unread");
    newReadClass = (readStatus ? "'status-read readBtn'" : "'status-unread readBtn'");

    list.innerHTML += "<div class='item'>"
        + "<div class='title'><p>" + newTitle + "</p></div>"
        + "<div class='author'><p>" + newAuthor + "</p></div>"
        + "<div class='year'><p>" + newYear + "</p></div>"
        + "<div class='read'><button class=" + newReadClass + ">" + newRead + "</button></div>"
        + "<div class='remove'><button class='removeBtn'>Remove</button></div>"
        + "</div>";

    document.querySelectorAll(".removeBtn").forEach(el => el.addEventListener("click",removeBook));
    document.querySelectorAll(".readBtn").forEach(el => el.addEventListener("click",toggleRead));
    
    document.querySelector("#booktitle").value = '';
    document.querySelector("#author").value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#read').checked = false;
}

function displayBooks() {
    for (let i = 0; i<myLibrary.length; i++){
        myLibrary[i].read = (myLibrary[i].read ? "Read": "Unread");
        list.innerHTML += "<div class='item'>"
        + "<div class='title'><p>" + myLibrary[i].title + "</p></div>"
        + "<div class='author'><p>" + myLibrary[i].author + "</p></div>"
        + "<div class='year'><p>" + myLibrary[i].year + "</p></div>"
        + "<div class='read'><button class='readBtn'>" + myLibrary[i].read + "</button></div>"
        + "<div class='remove'><button class='removeBtn'>Remove</div>"
        + "</div>";
    }
}

document.querySelectorAll(".readBtn").forEach(el => el.classList.add(el.innerHTML === "Read" ? 'status-read' : 'status-unread'));
document.querySelectorAll(".removeBtn").forEach(el => el.addEventListener("click",removeBook));
document.querySelectorAll(".readBtn").forEach(el => el.addEventListener("click",toggleRead));

function removeBook(e) {
    e.target.parentNode.parentNode.remove();
}

function toggleRead(e) {
    if (e.target.innerHTML === "Read"){
        e.target.innerHTML = "Unread";
        e.target.classList.remove('status-read');
        e.target.classList.add('status-unread');
    }
    else {
        e.target.innerHTML = "Read";
        e.target.classList.remove('status-unread');
        e.target.classList.add('status-read');
    }
}

function testing(){
    console.log('test')
}
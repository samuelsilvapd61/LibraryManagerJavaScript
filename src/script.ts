import { Book } from "./book.js";
import { saveNewBook, removeBook } from "./repository.js";


/**
 * Capturing the formulary to manipulate the data.
 */
let form = document.forms.namedItem("saveNewBook");


/**
 * Capturing the table to manipulate the interface.
 */
let table = document.getElementById("bookTable");


/**
 * Configuring an action to the SAVE button.
 * If the data exists, add new book in the database, and if not, show alarm.
 */
form?.addEventListener("submit", (event) => {
    event.preventDefault();

    let bookTitle: string = form?.bookTitle.value;
    let authorName: string = form?.authorName.value;
    let releaseDate: Date = form?.releaseDate.value;

    if (bookTitle && authorName && releaseDate) {
        const newBook = saveNewBook(bookTitle, authorName, releaseDate);
        addRowInTable(newBook);
        cleanFormulary();
    } else {
        alert("Please, fill in the fields correctly!");
    } 
})


/**
 * Configuring an action to the table.
 * When user double clicks a row, a "delete" button appears.
 * The delete button deletes the respective row.
 */
table?.addEventListener("dblclick", (event) => {
    let target = event.target as HTMLElement;
    let row = target.closest("tr");
    
    let othersButtons = table?.querySelector('.deleteButton');
    if (othersButtons) {
        othersButtons.remove();
    }

    if (row && row.rowIndex) {
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add('deleteButton');
        
        deleteButton.addEventListener("click", function() {
            removeBook(row.rowIndex - 1);
            row.remove();
        });

        let tdAction = row.querySelector(".action");
        if (tdAction) {
            tdAction.appendChild(deleteButton);
        }
    }
});


/**
 * Adds a new row at the end of the table, filling the row with the data from the new Book.
 * @param book New Book
 */
function addRowInTable(book: Book) {
    let tbody = table?.getElementsByTagName("tbody")[0];
    if (tbody) {
        const tr = document.createElement("tr");
        const tdBookTitle = document.createElement("td");
        const tdAuthorName = document.createElement("td");
        const tdBookReleaseDate = document.createElement("td");
        const tdAction = document.createElement("td");
        tdAction.classList.add("action");
    
        tdBookTitle.innerText = book.title;
        tdAuthorName.innerText = book.authorName;
        tdBookReleaseDate.innerText = book.releaseDate.toString();
    
        tr.appendChild(tdBookTitle);
        tr.appendChild(tdAuthorName);
        tr.appendChild(tdBookReleaseDate);
        tr.appendChild(tdAction);

        tbody.appendChild(tr);
    }
}


/**
 * Turns back the formulary to the inicial stage.
 */
function cleanFormulary() {
    form?.reset();
}


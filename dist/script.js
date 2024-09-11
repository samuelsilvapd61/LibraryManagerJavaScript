import { saveNewBook, removeBook } from "./repository.js";
/**
 * Capturing the formulary to manipulate the data.
 */
var form = document.forms.namedItem("saveNewBook");
/**
 * Capturing the table to manipulate the interface.
 */
var table = document.getElementById("bookTable");
/**
 * Configuring an action to the SAVE button.
 * If the data exists, add new book in the database, and if not, show alarm.
 */
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
    event.preventDefault();
    var bookTitle = form === null || form === void 0 ? void 0 : form.bookTitle.value;
    var authorName = form === null || form === void 0 ? void 0 : form.authorName.value;
    var releaseDate = form === null || form === void 0 ? void 0 : form.releaseDate.value;
    if (bookTitle && authorName && releaseDate) {
        var newBook = saveNewBook(bookTitle, authorName, releaseDate);
        addRowInTable(newBook);
        cleanFormulary();
    }
    else {
        alert("Please, fill in the fields correctly!");
    }
});
/**
 * Configuring an action to the table.
 * When user double clicks a row, a "delete" button appears.
 * The delete button deletes the respective row.
 */
table === null || table === void 0 ? void 0 : table.addEventListener("dblclick", function (event) {
    var target = event.target;
    var row = target.closest("tr");
    var othersButtons = table === null || table === void 0 ? void 0 : table.querySelector('.deleteButton');
    if (othersButtons) {
        othersButtons.remove();
    }
    if (row && row.rowIndex) {
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener("click", function () {
            removeBook(row.rowIndex - 1);
            row.remove();
        });
        var tdAction = row.querySelector(".action");
        if (tdAction) {
            tdAction.appendChild(deleteButton);
        }
    }
});
/**
 * Adds a new row at the end of the table, filling the row with the data from the new Book.
 * @param book New Book
 */
function addRowInTable(book) {
    var tbody = table === null || table === void 0 ? void 0 : table.getElementsByTagName("tbody")[0];
    if (tbody) {
        var tr = document.createElement("tr");
        var tdBookTitle = document.createElement("td");
        var tdAuthorName = document.createElement("td");
        var tdBookReleaseDate = document.createElement("td");
        var tdAction = document.createElement("td");
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
    form === null || form === void 0 ? void 0 : form.reset();
}

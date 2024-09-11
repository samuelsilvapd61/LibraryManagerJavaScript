import { Book } from "./book.js";

/**
 * Library is the database. In this case, it's only a list.
 */
let library: Array<Book> = new Array;

/**
 * Adds a new Book into database.
 * @param bookTitle Name of the book
 * @param authorName Name of the author
 * @param releaseDate Release date of the book
 */
export function saveNewBook(bookTitle: string, authorName: string, releaseDate: Date) {
    const newBook = new Book(bookTitle, authorName, releaseDate);
    library.push(newBook);
    return newBook;
}


/**
 * Remove a Book from the database.
 * @param index Position of the Book to be removed
 */
export function removeBook(index: number) {
    library.splice(index, 1);
}
/**
 * Class representing the book.
 */
export class Book {
    title: string;
    authorName: string;
    releaseDate: Date;

    constructor(title: string, authorName: string, releaseDate: Date) {
        this.title = title;
        this.authorName = authorName;
        this.releaseDate = releaseDate;
    }
}
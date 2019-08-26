export class Book {
    public id: number;
    public isbn: string;
    public title: string;
    public author: string;
    public description: string; // description/preface of book
    public genre: string;
    public imgPath: string; // local path for image of book
    public rating: number;
    public totalCopies: number; // total number of copies of book available in Library
    public issuedCopies: number; // number of currently issued copies of book
    public timesIssued: number; // number of times book is issued till now
    public issuedTo: string[];

    constructor(id:number, isbn: string, title: string, description: string, author: string, 
        genre: string, imgPath: string, rating: number, totalCopies: number, 
        issuedCopies: number, timesIssued: number, issuedTo: string[] ){
            this.id = id,
            this.isbn = isbn;
            this.title = title;
            this.description = description;
            this.author = author;
            this.genre = genre;
            this.imgPath = imgPath;
            this.rating = rating;
            this.totalCopies = totalCopies;
            this.issuedCopies = issuedCopies;
            this.timesIssued = timesIssued;
            this.issuedTo = issuedTo;
        }
}

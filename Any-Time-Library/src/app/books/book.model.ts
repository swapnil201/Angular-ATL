export class Book {
    public isbn: string;
    public title: string;
    public description: string; // description/preface of book
    public author: string;
    public genre: string;
    public imgPath: string; // local path for image of book
    public rating: number;
    public totalCopies: number; // total number of copies of book available in Library
    public issuedCopies: number; // number of currently issued copies of book
    public timesIssued: number; // number of times book is issued till now
    public issuedTo: string[];
}

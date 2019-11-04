export interface Book {
    id: number;
    isbn: string;
    title: string;
    author: string;
    description: string; // description/preface of book
    genre: string;
    imgPath: string; // local path for image of book
    rating: number;
    totalCopies: number; // total number of copies of book available in Library
    issuedCopies: number; // number of currently issued copies of book
    timesIssued: number; // number of times book is issued till now
}

interface Book {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre?: string;
}

class Library {
  private books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  getBookDetails(isbn: string) {
    let book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      return `title: ${book.title} | author: ${book.author} | isbn: ${
        book.isbn
      } | year: ${book.publishedYear} | genre: ${
        book.genre || "not specified"
      }`;
    }
    return "Book not found";
  }

  getBooks(): Book[] {
    return [...this.books];
  }
}

class DigitalLibrary extends Library {
  readonly website: string;

  constructor(books: Book[], website: string) {
    super(books);
    this.website = website;
  }

  listBooks() {
    const allBooks = this.getBooks();
    const titles = allBooks.map((book) => book.title);
    return titles;
  }
}

const book1: Book = {
  title: "aaa",
  author: "bbb",
  isbn: "1234",
  publishedYear: 2025,
  genre: "drama",
};

const book2: Book = {
  title: "bbb",
  author: "ccc",
  isbn: "7777",
  publishedYear: 2025,
};

const digitalLibrary = new DigitalLibrary([], "http://www.greatlibrary.com");

digitalLibrary.addBook(book1);
digitalLibrary.addBook(book2);
console.log(digitalLibrary.getBookDetails("1234"));
console.log(digitalLibrary.getBookDetails("7777"));
console.log(digitalLibrary.getBookDetails("0000"));
console.log(digitalLibrary.listBooks());

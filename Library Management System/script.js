const books = [
    { id: 1, title: "JavaScript Basics", author: "Ali", available: true },
    { id: 2, title: "Clean Code", author: "Ahmed", available: true },
    { id: 3, title: "HTML & CSS", author: "Sara", available: false },
    { id: 4, title: "Learning PHP", author: "Usman", available: true }
];


const findBook = (books, bookId) => {

    let findedBook;

    books.forEach(function (book) {

        if (book.id === bookId) {
            findedBook = book;
        }

    })

    if (findedBook) {
        return findedBook;
    } else {
        return "Book Not Found";
    }


}

const searchBook = findBook(books, 2);



// borrow book function
const borrowBook = (books, id) => {

    let bookAvalibleCheck = findBook(books, id);
    if (bookAvalibleCheck !== "Book Not Found") {

        if (bookAvalibleCheck.available) {
            bookAvalibleCheck.available = false;
            return "Book borrowed successfully";
        } else {
            return ("Book is already borrowed")
        }


    } else {
        return "Book Not Found";
    }
}

let isBookAvailable = borrowBook(books, 1)

console.log(isBookAvailable);



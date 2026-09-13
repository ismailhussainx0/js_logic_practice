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
// console.log(searchBook);




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

// let isBookAvailable = borrowBook(books, 1)

// console.log(isBookAvailable);



// Return Book Function
const returnBook = (books, bookId) => {
    
    let bookAvalibleCheck = findBook(books, bookId);
    if(bookAvalibleCheck !== "Book Not Found"){

        if(bookAvalibleCheck.available === true){
            return "Book Is Already Available";
        }else{
            bookAvalibleCheck.available = true;
            return "Book Return successfully";
        }

    }else{
        return "Book Not Found";
    }


}
// const bookReturn = returnBook(books, 3);
// console.log(bookReturn);



// Available Book
const getAvailableBook = (books) => {

   let availableBooks = books.filter(function(book){
        return book.available === true;

   })
  
   return availableBooks;
}
const getBook = getAvailableBook(books)
console.log(getBook);

 
// UnAvailable Book
const getUnavailableBook = (books) => {

    let unAvailableBooks = books.filter(function(book){
        return book.available === false;
    })

    return unAvailableBooks;
}

const getGivenBooks = getUnavailableBook(books);
console.log(getGivenBooks);
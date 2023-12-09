import { useEffect, useState } from "react";

function ShowBook({booksInShelf, bookId}){

    const [bookToView, setBookToView] = useState('');

    useEffect(() => {
        console.log('books in shelf: ', booksInShelf);
        console.log('book id: ', bookId);
        let bookObj = booksInShelf.find((book) => book.isbnNo === bookId);
        console.log('book obj: ', bookObj);
        setBookToView(bookObj);
    }, []);

    return(
        <div className="contentDiv showBook">
            <div>Book Name: {bookToView.bookName}</div>
            <div>ISBN No: {bookToView.isbnNo}</div>
            <div>Category: {bookToView.category}</div>
            <div>Row No: {bookToView.rowNo}</div>
            <div>Book Count: {bookToView.bookCount}</div>
            <div>Book Cost: {bookToView.bookCost}</div>
            <div>Availability: {bookToView.availability}</div>
        </div>
    )
}

export default ShowBook;
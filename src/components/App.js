import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Admin from './Admin';
import ShowAdmin from './ShowAdmin';
import ShowBook from './ShowBook';
import QRScanner from './QRScanner';
import Header from './Header';
import Footer from './Footer';
import '../styles.css';
import { useState } from 'react';

function App(){

    const [booksInShelf, setBooksInShelf] = useState([]);
    const [viewBookId, setViewBookId] = useState('');

    const addToShelf = bookDetails => {
        try{
            console.log('book to be added: ', bookDetails);
            let newBooksInShelf = [...booksInShelf, bookDetails];
            console.log('new shelf: ', newBooksInShelf);
            setBooksInShelf(newBooksInShelf);
        }catch(err){
            console.log('error in addToShelf method in App.js: ', err);
        }
    }

    const deleteBook = isbnNumber => {
        try{
            console.log('book to be deleted: ', isbnNumber);
            let newBooksInShelf = booksInShelf.filter((book) => book.isbnNo !== isbnNumber);
            console.log('books after deletion: ', newBooksInShelf);
            setBooksInShelf(newBooksInShelf);
        }catch(err){
            console.log('error in deleteBook method in App.js: ', err);
        }
    }

    const viewBookInShelf = isbnNumber => {
        try{
            console.log('book to be viewed: ', isbnNumber);
            setViewBookId(isbnNumber);
        }catch(err){
            console.log('error in viewBookInShelf method in App.js: ', err);
        }
    }

    const updateBookInShelf = bookDetails => {
        try{
            console.log('book to be updated: ', bookDetails);
            let bookId = bookDetails.isbnNo;
            console.log('current books in shelf: ', booksInShelf);
            let filteredBooks = booksInShelf.filter((book) => book.isbnNo !== bookId);
            console.log('after filter: ', filteredBooks);
            let updatedBooks = [...filteredBooks, bookDetails];
            console.log('after final update: ', updatedBooks);
            setBooksInShelf(updatedBooks);
        }catch(err){
            console.log('error in updateBookInShelf method in App.js: ', err);
        }
    }

    return(
        <div className='mainDiv'>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/admin" element={<Admin booksInShelf={booksInShelf} addToShelf={addToShelf}/>} />
                    <Route path="/showAdmin" element={<ShowAdmin booksInShelf={booksInShelf} deleteBook={deleteBook} updateBookInShelf={updateBookInShelf} viewBookInShelf={viewBookInShelf} />} />
                    <Route path="/showBook" element={<ShowBook booksInShelf={booksInShelf} bookId={viewBookId} />} />
                    <Route path="/qrScanner" element={<QRScanner booksInShelf={booksInShelf} />} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default App;
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UpdateForm from "./UpdateForm";

function ShowAdmin({booksInShelf, deleteBook, updateBookInShelf, viewBookInShelf}){

    const navigate = useNavigate();

    const [searchText, setSearchText] = useState('');
    const [bookFound, setBookFound] = useState('');
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [bookToUpdate, setBookToUpdate] = useState(null);

    useEffect(() => {
        if(searchText !== '')
            handleSearch();
    }, [booksInShelf]);

    const removeBook = isbnNumber => {
        try{
            console.log('remove book: ', isbnNumber);
            deleteBook(isbnNumber);
        }catch(err){
            console.log('error in removeBook method in ShowAdmin.js: ', err);
        }
    }

    const updateBook = bookDetails => {
        try{
            console.log('update book: ', bookDetails);
            setEditMode(false);
            updateBookInShelf(bookDetails);
        }catch(err){
            console.log('error in updateBook method in ShowAdmin.js: ', err);
        }
    }

    const viewBook = isbnNumber => {
        try{
            viewBookInShelf(isbnNumber);
            navigate('/showBook');
        }catch(err){
            console.log('error in viewBook method in ShowAdmin.js: ', err);
        }
    }

    const editBook = isbnNumber => {
        try{
            console.log('edit book: ', isbnNumber);
            let bookToEdit = booksInShelf.find((book) => book.isbnNo === isbnNumber);
            console.log('book to edit: ', bookToEdit);
            setBookToUpdate(bookToEdit);
            setEditMode(true);
        }catch(err){
            console.log('error in editBook method in ShowAdmin.js: ', err);
        }
    }

    const handleSearchTextChange = e => {
        try{
            console.log('search text: ', e.target.value);
            setSearchText(e.target.value);
        }catch(err){
            console.log('error in handleSearchTextChange method in ShowAdmin.js: ', err);
        }
    }

    const handleSearch = e => {
        try{
            let filteredBooks = booksInShelf.filter((book) => book.bookName.includes(searchText) || book.isbnNo.includes(searchText));

            if(filteredBooks.length === 0){
                setBookFound(false);
            }else{
                setBookFound(true);
                setSearchedBooks(filteredBooks);
            }  
        }catch(err){
            console.log('error in handleSearch method in ShowAdmin.js: ', err);
        }
    }

    return(
        <div className="contentDiv showAdmin">
            {!editMode && 
                <>
                    <div className="searchDiv">
                        <input
                            type="text"
                            id="searchBook"
                            value={searchText}
                            onChange={handleSearchTextChange}
                            placeholder="Enter Book Name or ISBN No."
                        />
                        <button className="searchBtn" onClick={handleSearch}>Search</button>
                    </div>
                    {bookFound === true && 
                        <table className="booksTable">
                            <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>ISBN No.</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            {searchedBooks.map((book) => (
                                <tr key={book.isbnNo}>
                                    <td>{book.bookName}</td>
                                    <td>{book.isbnNo}</td>
                                    <td className="view" onClick={() => viewBook(book.isbnNo)} >View</td>
                                    <td className="edit" onClick={() => editBook(book.isbnNo)}>Edit</td>
                                    <td className="remove" onClick={() => removeBook(book.isbnNo)}>Remove</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    }
                    {bookFound === false && <div className="notFoundMsg"><span>Book not found</span></div>}
                </>
            }
            {editMode && <UpdateForm bookToUpdate={bookToUpdate} updateBook={updateBook}/>}
        </div>
    )
}

export default ShowAdmin;
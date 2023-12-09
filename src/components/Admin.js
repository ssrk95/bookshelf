import { useEffect, useState } from "react";
import AddForm from "./AddForm";

function Admin({booksInShelf, addToShelf}){

    const [showForm, setShowForm] = useState(false);
    const [showMsg, setShowMsg] = useState(false);

    useEffect(() => {
        if(showMsg){
            setTimeout(() => {
                setShowMsg(false);
            }, 3000);
        }
    }, [showMsg]);

    const addBook = e => {
        try{
            console.log('add book');
            setShowForm(true);
        }catch(err){
            console.log('error in addBook method in Admin.js: ', err);
        }
    }

    const submitBook = bookDetails => {
        try{
            console.log('submission in Admin.js');
            setShowForm(false);
            addToShelf(bookDetails);
            setShowMsg(true);
        }catch(err){
            console.log('error in submitBook method in Admin.js: ', err);
        }
    }

    return(
        <div className="contentDiv admin">
            {showForm ? <AddForm submitBook={submitBook} /> : <button className="add-book-btn" onClick={addBook}>Add a book</button>}
            {showMsg && <div className="submitSuccessMsg">Book Added Successfully!</div>}
        </div>
    )
}

export default Admin;
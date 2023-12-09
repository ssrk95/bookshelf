import { useEffect, useState } from "react";

function UpdateForm({bookToUpdate, updateBook}){

    const [bookName, setBookName] = useState(bookToUpdate.bookName);
    const [isbnNo, setIsbnNo] = useState(bookToUpdate.isbnNo);
    const [category, setCategory] = useState(bookToUpdate.category);
    const [rowNo, setRowNo] = useState(bookToUpdate.rowNo);
    const [bookCount, setBookCount] = useState(bookToUpdate.bookCount);
    const [bookCost, setBookCost] = useState(bookToUpdate.bookCost);
    const [availability, setAvailability] = useState(bookToUpdate.availability);
    const [allowSubmit, setAllowSubmit] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    useEffect(() => {
        if(allowSubmit){
            console.log('update this book!');
            updateBook({
                bookName,
                isbnNo,
                category,
                rowNo,
                bookCount,
                bookCost,
                availability
            });
            //set allowsubmit false immediately after submission!
            setAllowSubmit(false);
        }
    }, [allowSubmit]);

    const handleFormSubmit = e => {
        e.preventDefault();
        try{
            let submitError = bookName === '' || isbnNo === '' || category === '' || rowNo === '' || bookCount === '' || bookCost === '' || availability === '';
            setSubmitError(submitError);
            if(!submitError){
                setAllowSubmit(true);
            }
        }catch(err){
            console.log('error in handleFormSubmit method in UpdateForm component: ', err);
        }
    }

    const handleBookNameChange = e => {
        try{
            setBookName(e.target.value);
        }catch(err){
            console.log('error in handleBookNameChange method in UpdateForm component: ', err);
        }
    }

    const handleIsbnNoChange = e => {
        try{
            setIsbnNo(e.target.value);
        }catch(err){
            console.log('error in handleIsbnNoChange method in UpdateForm component: ', err);
        }
    }

    const handleCategoryChange = e => {
        try{
            setCategory(e.target.value);
        }catch(err){
            console.log('error in handleCategoryChange method in UpdateForm component: ', err);
        }
    }

    const handleRowNoChange = e => {
        try{
            setRowNo(e.target.value);
        }catch(err){
            console.log('error in handleRowNoChange method in UpdateForm component: ', err);
        }
    }

    const handleBookCountChange = e => {
        try{
            setBookCount(e.target.value);
        }catch(err){
            console.log('error in handleBookCountChange method in UpdateForm component: ', err);
        }
    }

    const handleBookCostChange = e => {
        try{
            setBookCost(e.target.value);
        }catch(err){
            console.log('error in handleBookCostChange method in UpdateForm component: ', err);
        }
    }

    const handleBookAvailabilityChange = e => {
        try{
            setAvailability(e.target.value);
        }catch(err){
            console.log('error in handleBookAvailabilityChange method in UpdateForm component: ', err);
        }
    }

    return(
        <div className="updateFormDiv">
            <form className="addBookForm" onSubmit={handleFormSubmit}>
                <div className="firstName">
                    <label htmlFor="bname">Book Name</label><br/>
                    <input
                        type="text"
                        id="bname"
                        name="bname"
                        value={bookName}
                        onChange={handleBookNameChange}
                    />
                </div>
                <div className="isbnNo">
                    <label htmlFor="isbnNo">ISBN No.</label><br/>
                    <input
                        type="text"
                        id="isbnNo"
                        name="isbnNo"
                        value={isbnNo}
                        onChange={handleIsbnNoChange}
                    />
                </div>
                <div className="category">
                    <label htmlFor="category">Category</label><br/>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleCategoryChange}
                    />
                </div>
                <div className="rowNo">
                    <label htmlFor="rowNo">Row No.</label><br/>
                    <input
                        type="text"
                        id="rowNo"
                        name="rowNo"
                        value={rowNo}
                        onChange={handleRowNoChange}
                    />
                </div>
                <div className="bookCount">
                    <label htmlFor="bookCount">Book Count</label><br/>
                    <input
                        type="text"
                        id="bookCount"
                        name="bookCount"
                        value={bookCount}
                        onChange={handleBookCountChange}
                    />
                </div>
                <div className="bookCost">
                    <label htmlFor="bookCost">Book Cost (INR)</label><br/>
                    <input
                        type="text"
                        id="bookCost"
                        name="bookCost"
                        value={bookCost}
                        onChange={handleBookCostChange}
                    />
                </div>
                <div className="availability">
                    <label htmlFor="availability">Availability</label><br/>
                    {/* <input
                        type="text"
                        id="availability"
                        name="availability"
                        value={availability}
                        onChange={handleBookAvailabilityChange}
                    /> */}
                    <label>
                        <input
                            type="radio"
                            value="yes"
                            checked={availability === 'yes'}
                            onChange={handleBookAvailabilityChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={availability === 'no'}
                            onChange={handleBookAvailabilityChange}
                        />
                        No
                    </label>
                </div>
                <div className="submit" onClick={handleFormSubmit}>
                    <span>Update</span>
                </div>
                {submitError && <div className="submitErrorMsg">
                    <span>Please fill all fields</span>
                </div>}
            </form>
        </div>
    )
}

export default UpdateForm;
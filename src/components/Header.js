import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Header(){
    return (
        <div className='headerDiv'>
            <div className='navigation'>
                <div><Link to="/admin">ADMIN</Link></div>
                <div><Link to="/showAdmin">SHOW ADMIN</Link></div>
                <div><Link to="/showBook">SHOW BOOK</Link></div>
                <div><Link to="/qrScanner">QR SCANNER</Link></div>
            </div>
        </div>
    )
}

export default Header;
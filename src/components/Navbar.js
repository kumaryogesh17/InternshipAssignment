import React from 'react';
import { Link } from 'react-router-dom';
import AddNewOrder from './AddNewOrder';
import { useHistory, useLocation } from 'react-router';
import data from '../Database/db.json'



const Navbar = () => {
    
    let history = useHistory();
    let location = useLocation();
    const userName = JSON.parse(localStorage.getItem('userDetails'));

    // Logout function
    const handleLogOut = () => {

        history.push("./newuser");   // login  page
        localStorage.setItem('userDetails', null);
        history.push("./newuser");

    }
    //Login function
    const handleLogin = () => {
        if (localStorage.getItem("userDetails") === null) {
            history.push("./newuser")
        }
        else {
            history.push("./allOrders")
        }
    }

    return (
        <>
            {history.location.pathname === '/newuser' && './home' ? " " : <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h3>Utilize</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               <li className="nav-item">
                                <Link className="nav-link" to="/allOrders">Your Orders</Link>
                            </li>

                        </ul>

                        {/* displaying totals no of orders and User Name */}

                        {!localStorage.getItem("userDetails") === null ? "" : <h5 className="nameTag">{`Welcome ${userName.name}`}</h5>}
                        <h5 className="totalOrder">Total Orders = {Object.keys(data.orders).length}</h5>
                        <AddNewOrder />
                        {!localStorage.getItem("userDetails") === null ? <button className="btn btn-dark" onClick={handleLogin}>Login</button> : <button className="btn btn-dark" onClick={handleLogOut}>LogOut</button>}



                    </div>
                </div>
            </nav>}
        </>
    )
}


export default Navbar

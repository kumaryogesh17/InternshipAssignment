import React from 'react';
import { Link } from 'react-router-dom';
import AddNewOrder from './AddNewOrder';
import * as data from '../Database/db.json';



const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h3>Utilize</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/allOrders">Your Orders</Link>
                            </li>
                            
                        </ul>
                     {/* <h4 className="totalOrder">Total Orders = {Object.keys(data.orders).length}</h4>    */}
                       <AddNewOrder/>
                       

                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar

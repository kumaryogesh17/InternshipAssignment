
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
const initialState = {

    "name": " ",
    "email": "",
    "password": ""
}

const NewUser = () => {

    const [userDetails, setuserDetails] = useState(initialState)
     let history = useHistory();

    const onChange = (e) => {
        
        // console.log(userDetails)
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        setuserDetails({name:name,email:email,password:password })
        
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        let myJSON = await JSON.stringify({ name: userDetails.name, email: userDetails.email, password: userDetails.password });
        localStorage.setItem("userDetails", myJSON);
        console.log(localStorage.setItem("userDetails", myJSON))
        console.log(myJSON)
        
        var retrievedObject = localStorage.getItem('userDetails');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));

        history.push("./allOrders")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mt-3 text-center">
                    <h3>Create a new account</h3>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="name" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label" >Password</label>
                    <input type="password" class="form-control" id="password"  onChange={onChange} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewUser

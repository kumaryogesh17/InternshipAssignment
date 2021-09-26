import React from 'react'
import { useState } from 'react'

const initialState = {
    "id": "",
    "name": " ",
    "email": "",
    "password": ""
  }

const NewUser = () => {

    const [user, setuser] = useState(initialState)
    const {name,email,password} = user;

    
    return (
        <div>
            <form>
                <div class="mt-3 text-center">
                    <h3>Create a new account</h3>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="email" value={name} aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email"value={email} aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label"value={password}>Password</label>
                    <input type="password" class="form-control" id="password" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewUser

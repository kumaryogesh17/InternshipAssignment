
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Home = () => {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);
    let history = useHistory();
    const login = () => {
        // history.push("./allOrders")

       
            Event.preventDefault();
            let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
            let mail = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");
            // .replace(/"/g,"") is used to remove the double quotes for the string
    
            if (!emaillog || !passwordlog) {
                setFlag(true);
                console.log("EMPTY");
            } else if ((passwordlog !== pass) || (emaillog !== mail)) {
                setFlag(true);
            } else {
                setHome(!home);
                setFlag(false);
            }
        

    }
    return (
        <div>
            <form >
                <div class="mt-3 text-center">
                    <h3>Login</h3>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={(event) => setEmaillog(event.target.value)} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" onClick={login} class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Home

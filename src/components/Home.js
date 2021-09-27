
import React from 'react'
import { useHistory } from 'react-router'

const Home = () => {

    
    let history = useHistory();

    const userName = JSON.parse(localStorage.getItem('userDetails'));
    const {email,password} = userName
    
    const login = () => {
        if (email === document.getElementById( "email").value && password === document.getElementById( "password").value){
            history.push("./allOrders")
            console.log("Looging Successfully");
        }
        else {
            alert("Not a user ! Please create a new Account");
            history.push("./newuser");

        }

    }

   const onChange=()=>{
       
    }
    return (
        <>
            {localStorage.getItem("userDetails") !== null ? history.push("./allOrders"):<form >
                <div class="mt-3 text-center">
                    <h3>Login</h3>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"  onChange={onChange} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password"  onChange={onChange} />
                </div>

                <button type="submit" onClick={login} class="btn btn-primary">Submit</button>
            </form>}
        </>
    )
}

export default Home

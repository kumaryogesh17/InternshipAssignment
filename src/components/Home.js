import React from 'react'
import { useHistory } from 'react-router'

const Home = () => {
  let history = useHistory();
    const login = ()=> {
        history.push("./allOrders")
        
    }
    return (
        <div>
            <form>
                <div class="mt-3 text-center">
                    <h3>Login</h3>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password"/>
                </div>
                
                <button type="submit" onClick={login} class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Home

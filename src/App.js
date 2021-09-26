import './App.css';
import Navbar from './components/Navbar';
import NewUser from './components/NewUser';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from './components/Orders';
import EditOrder from './components/EditOrder'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/allOrders">
              <Orders />
            </Route>
            <Route exact path="/edit/:id">
              <EditOrder />
            </Route>
            <Route exact path="/newuser">
              <NewUser/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import Home from "./components/home";
import Cart from "./components/cartList";
import AddItem from "./components/addItem";
//import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <ul>
            <li>
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/cart">Cart List</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/addItem">Add Item</Link>
              </button>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/addItem" component={AddItem} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

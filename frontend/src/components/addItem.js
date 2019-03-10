import { Component } from "react";
import React from "react";
import axios from "axios";

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      name: " ",
      description: " ",
      price: " ",
      amount: " "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5555/item/add/", {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        amount: this.state.amount
      })
      .then(response => console.log(response));
  }

  render() {
    return (
      <React.Fragment>
        <h2>Add an Item!</h2>
        <form style={{ padding: "20px" }} onSubmit={this.handleSubmit}>
          <label>
            Fill out the form and click submit!
            <br />
            <input
              placeholder="Name"
              type="text"
              name="name"
              onChange={this.handleChange}
            />
            <br />
            <input
              placeholder="Description"
              type="text"
              name="description"
              onChange={this.handleChange}
            />
            <br />
            <input
              placeholder="Price"
              type="text"
              name="price"
              onChange={this.handleChange}
            />
            <br />
            <input
              placeholder="Amount"
              type="text"
              name="amount"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default AddItem;

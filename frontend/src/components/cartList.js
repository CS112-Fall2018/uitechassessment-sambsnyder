import React, { Component } from "react";
import axios from "axios";

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      cartList: [],
      error: null
    };
  }

  componentWillMount() {
    this.fetchItems();
  }

  fetchItems() {
    // Where we're fetching data from
    axios
      .get("http://localhost:5555/list")
      // update state
      .then(res => {
        this.setState({
          cartList: res.data,
          isLoading: false
        });
      })
      // Catch errors
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, cartList } = this.state;
    return (
      <React.Fragment>
        <h3>Cart</h3>
        <table>
          <tbody>
            <tr
              style={{
                padding: "20px",
                border: "2px solid green",
                align: "center"
              }}
            >
              <th
                style={{
                  padding: "20px",
                  border: "2px solid green",
                  align: "center"
                }}
              >
                Name
              </th>
              <th
                style={{
                  padding: "20px",
                  border: "2px solid green",
                  align: "center"
                }}
              >
                Description
              </th>
              <th
                style={{
                  padding: "20px",
                  border: "2px solid green",
                  align: "center"
                }}
              >
                Price
              </th>
              <th
                style={{
                  padding: "20px",
                  border: "2px solid green",
                  align: "center"
                }}
              >
                Amount
              </th>
            </tr>
            {!isLoading ? (
              cartList.map(item => {
                const { id, name, description, price, amount } = item;
                return (
                  <tr style={{ padding: "20px" }} key={id}>
                    <td
                      style={{
                        padding: "20px",
                        border: "2px solid green",
                        align: "center"
                      }}
                    >
                      {name}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        border: "2px solid green",
                        align: "center"
                      }}
                    >
                      {description}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        border: "2px solid green",
                        align: "center"
                      }}
                    >
                      {price}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        border: "2px solid green",
                        align: "center"
                      }}
                    >
                      {amount}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr />
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

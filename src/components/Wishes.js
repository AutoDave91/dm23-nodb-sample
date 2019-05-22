import React, { Component } from "react";
import axios from "axios";
import Wish from "./Wish";

class Wishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishes: [],
      loading: true,
      error: ""
    };
    this.updateWishes = this.updateWishes.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/wishes")
      .then(response => {
        this.setState({ wishes: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false, error: "An error occurred" });
      });
  }

  updateWishes(newWishes) {
    this.setState({ wishes: newWishes });
    // alert("lol nope");
  }

  render() {
    const { wishes } = this.state;
    return (
      <section>
        {this.state.loading ? <p>Loading...</p> : null}
        {this.state.error}
        {wishes.map((wish, index) => (
          <Wish key={index} wish={wish} updateWishes={this.updateWishes} />
        ))}
      </section>
    );
  }
}

export default Wishes;

import React, { Component } from "react";
import axios from "axios";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        onSubmit={e => {
          e.preventDefault();
          axios
            .post("/api/wishes", {
              name: this.state.name,
              image: this.state.image
            })
            .then(response => {
              console.log(response.data);
              // we need to do something here
              this.props.changeView("wishes");
            })
            .catch(error => {
              console.log(error);
              //give me points
            });
        }}
      >
        <input name="name" onChange={this.handleChange} placeholder="Name" />
        <input name="image" onChange={this.handleChange} placeholder="Image" />
        <button type="reset">Cancel</button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Add;

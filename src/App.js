import React, { Component } from "react";
import "./App.css";
import globe from "./globe.svg";
import Wishes from "./components/Wishes";
import Add from "./components/Add";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "wishes"
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(newView) {
    this.setState({ view: newView });
  }
  render() {
    return (
      <div>
        <header>
          <h1>
            <img src={globe} alt="globetrotter logo" />
          </h1>
          <h2>globetrotter</h2>
        </header>
        <nav>
          <button
            className={this.state.view === "wishes" ? "current" : ""}
            onClick={() => this.setState({ view: "wishes" })}
          >
            wishes
          </button>
          <button
            className={this.state.view === "add" ? "current" : ""}
            onClick={() => this.setState({ view: "add" })}
          >
            +
          </button>
          <button onClick={() => this.setState({ view: "memories" })}>
            memories
          </button>
        </nav>
        {this.state.view === "wishes" ? (
          <Wishes />
        ) : (
          <Add changeView={this.changeView} />
        )}
      </div>
    );
  }
}

export default App;

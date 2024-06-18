import "./App.css";
import React, { Component } from "react";
import Person from "./Comp/Person";
import Time from "./Comp/Time";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  show = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <button onClick={this.show} className="btn btn-3">
          {this.state.show ? "hide" : "show"}
        </button>

        {this.state.show ? <Person /> : null}

        {this.state.show ? <Time /> : null}
      </div>
    );
  }
}

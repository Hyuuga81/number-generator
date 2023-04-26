import React, { Component } from "react";

class RandomApp extends Component {
  state = { value: 0 };

  getRandomNumber = () => Math.floor(Math.random() * this.props.max);
  HandleClick = () => {
    this.setState({ value: this.getRandomNumber() });
  };
  render() {
    return (
      <div className="App">
        <h1>Stateful Component Test</h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.HandleClick}>Get Random Number</button>
      </div>
    );
  }
}

export default RandomApp;

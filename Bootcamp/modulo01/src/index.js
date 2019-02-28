import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUnmount(prevProps, prevState) {}

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
    // this.setState(state => ({ counter: state.counter + 1 }));
  };
  render() {
    console.log("render");
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>+1</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));

import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return (
      <a onClick={this.props.onClick} href="">
        {this.props.children}
      </a>
    );
  }
}

class App extends Component {
  handleClick() {
    alert("Botão clicado");
  }
  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));

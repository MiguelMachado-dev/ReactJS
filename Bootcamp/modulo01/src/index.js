import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
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

Button.defaultProps = {
  children: "Salvar"
};

Button.PropTypes = {
  onClick: PropTypes.func.isRequired,
  childen: PropTypes.string
};

class App extends Component {
  handleClick() {
    alert("Botão clicado");
  }
  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <Button
          onClick={() => {
            alert("Button 1");
          }}
        />
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));

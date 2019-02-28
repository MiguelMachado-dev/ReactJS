import React from "react";
import PropTypes from "prop-types";

// Componente Stateless pode ser escrito em forma de function
// Stateless == não tem state={}
// e para obter acesso as props, passa ela via params
// Stateless fica menos verboso, muito mais fácil de se ler

const Button = props => {
  <button onClick={props.onClick}>{props.children}</button>;
};

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;

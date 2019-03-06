import React, { Component, Fragment } from 'react';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    const { repositoryInput } = this.setState;
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => ({ repositoryInput: e.target.value })}
          />
          <button type="submit">Enviar</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>facebook/react</strong>
              (blah blah blah description)
            </p>
            <a href="http://github.com/facebook/react">Acessar</a>
          </li>
        </ul>
      </Fragment>
    );
  }
}

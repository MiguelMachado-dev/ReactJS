import React, { Component } from 'react';
import api from '../../services/api';

import { Container, Form } from './styles';

import logo from '../../assets/logo.png';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    const { repositoryInput, repositories } = this.state;
    e.preventDefault();

    try {
      const response = await api.get(`/repos/${repositoryInput}`);

      this.setState({
        repositoryInput: '',
        repositories: [...repositories, response.data],
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { repositories, repositoryInput } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}

# O que é ReactJs?

- Biblioteca para criação de **interfaces** (Não é um framework);
- Representa apenas o **front-end**;
- Utilizada para criação de apps **web**;
- Utiliza o modelo de componentização;
- React / ReactJS / React Native;

## Dicas

- render() têm de retornar sempre um único elemento,
  então envolver as tags h1, p, button, com uma div, por exemplo.
  porém o React desenvolve o Fragment, que isola as tags sem dar problemas com estilização do css, utiliza-se o **Fragment** por que a div causa problemas com estilização padrão de css [Clique aqui para entender sobre a criação de componente e utilização de um componente dentro de outro](https://github.com/ThatsMiguel/ReactJS/commit/147d784967bf23b466ba11892c1fd29a86983181)
- **Estado e propriedade** toda vez que é alterado, executa o `render()` novamente. Ou seja, `state = { counter: 0 }` & `this.setState({ counter: this.state.counter +1 })` toda hora que essa function do setState for chamada, o `render()` será executado de novo.
- O **state = {}** é imutável, temos sempre que retornar um novo valor para a variável que queremos alterar no estado
- Nome do arquivo == nome da class

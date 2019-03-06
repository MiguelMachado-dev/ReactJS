import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};
const store = createStore(
  reducers,
  compose(
    tronMiddleware(),
    applyMiddleware(...middlewares),
  ),
);

sagaMiddleware.run(sagas);

export default store;

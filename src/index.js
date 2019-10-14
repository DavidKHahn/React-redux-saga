import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import './index.css';
import { watchAgeUp } from './sagas/saga';
import reducer from './store/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


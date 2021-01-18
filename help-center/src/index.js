import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './redux/store/store';

import Container from './components/Container';

import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Container />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

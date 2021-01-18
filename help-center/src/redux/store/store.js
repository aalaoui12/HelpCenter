import { createStore } from 'redux';
import hitReducer from '../reducers/reducers';

export default createStore(
  hitReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
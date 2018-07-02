import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './main/Main';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducers from './reducers'

const store = createStore(combineReducers)

ReactDOM.render(
  <Provider store={store}>
  	<Main />
  </Provider>,	
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

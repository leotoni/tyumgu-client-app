import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware}  from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
//import {syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './combine-reducers';
import createRoutes from "./routers"




const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
//const history = syncHistoryWithStore(hashHistory, store);
const routes = createRoutes(store, history)

ReactDOM.render(
      <Provider store={store}>
          {routes}
      </Provider>,
document.getElementById('root')
);

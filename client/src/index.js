import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { Redirect } from 'react-router';

import reducer from './reduxBase/reducers/index';
import todoAppSaga from './sagas';
import RootApp from './containers/RootApp';
import Registration from './containers/Registration/';
import Authorization from './containers/Authorization/';
import './app.css';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware
    )
  )
)

sagaMiddleware.run(todoAppSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/table/:id' component={RootApp}/>
        <Route path='/registration' component={Registration}/>
        <Route path='/authorization' component={Authorization}/>
        <Redirect to='/authorization' />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
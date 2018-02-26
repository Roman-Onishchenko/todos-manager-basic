import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import reducer from './reduxBase/reducers/index';
import tasksWatchers from './sagas';
import RootApp from './containers/RootApp';
import Registration from './containers/Registration/';
import Authorization from './containers/Authorization/';

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

sagaMiddleware.run(tasksWatchers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/table' component={RootApp}/>
        <Route path='/registration' component={Registration}/>
        <Route path='/authorization' component={Authorization}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

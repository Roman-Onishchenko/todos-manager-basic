import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import reducer from './reduxBase/reducers/index';
import RootApp from './containers/RootApp';
import Registration from './containers/Registration/';
import Authorization from './containers/Authorization/';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__());

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


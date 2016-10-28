import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux'
import * as reducers from './reducers'
import App from './App';
// import {Router, Route, hashHistory} from 'react-router';
import RedditPage from './components/RedditPage';
import About from './components/static/About';
import NoMatch from './components/static/NoMatch'

const reducer = combineReducers(reducers);
const store = createStore(reducer);


ReactDOM.render(
  <Provider store={ store } >
    <Router history={hashHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={RedditPage} />
        <Route path='/about' component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
  );
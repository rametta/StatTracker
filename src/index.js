// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Pages
import Layout from './components/Layout/Layout';
import NewMatch from './pages/NewMatch/NewMatch';
import { Account } from './pages/Account/Account';
import Leaderboards from './pages/Leaderboards/Leaderboards';
import Profile from './pages/Profile/Profile';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Leaderboards}/>
      <Route path="/match/new" component={NewMatch} />
      <Route path="/account" component={Account} />
      <Route path="/profile/:gamertag" component={Profile} />
    </Route>
  </Router>,
  document.getElementById('root')
);
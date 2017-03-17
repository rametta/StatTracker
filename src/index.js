// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Pages
import Layout from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import NewMatch from './pages/NewMatch/NewMatch';
import { Account } from './pages/Account/Account';
import { Leaderboards } from './pages/Leaderboards/Leaderboards';
import { Profile } from './pages/Profile/Profile';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
      <Route path="/match/new" component={NewMatch} />
      <Route path="/leaderboards" component={Leaderboards} />
      <Route path="/account" component={Account} />
      <Route path="/profile/:gamertag" component={Profile} />
    </Route>
  </Router>,
  document.getElementById('root')
);
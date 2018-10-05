import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LandingPage from './components/LandingPage/LandingPage';
import TermsPage from './components/TermsPage/TermsPage';
import HomePage from './components/HomePage/HomePage';
import PlayerProfilePage from './components/PlayerProfilePage/PlayerProfilePage';
import CoachPage from './components/CoachPage/CoachPage';

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/landing_page" />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/home"
          component={HomePage}
        />
        {/* static legal terms page */}
        <Route
          path="/terms"
          component={TermsPage}
        />
        <Route
          path="/landing_page"
          component={LandingPage}
        />
        {/* page that will be displayed when user with "player" role logs in */}
        <Route
        path="/player_profile_page"
        component={PlayerProfilePage}
        />
        <Route
        path="/coach_page"
        component={CoachPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;

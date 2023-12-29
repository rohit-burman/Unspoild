// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInPage from './SignInPage';
import App from './App';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignInPage} />
        <Route path="/App" component={App} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

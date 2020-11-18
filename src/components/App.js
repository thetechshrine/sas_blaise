import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import routes from '../routes';

import Container from './layout/Container';
import Header from './layout/Header';
import Footer from './layout/Footer';

function displayRoutes() {
  return routes.map(({ key, path, exact, component }) => (
    <Route key={key} exact={!!exact} path={path} component={component} />
  ));
}

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/accueil' />} />
          {displayRoutes()}
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;

import React, { Component, Fragment} from 'react';
import { BrowserRouter as Router, Route,  Link } from "react-router-dom";

import { Helmet } from "react-helmet";
import HomePage from '@Containers/HomePage';
import NotFoundPage from '@Containers/NotFoundPage';

import { AppComponent } from './App.styled';

const App = (props) => {
  
  return (
    <>
      <Helmet>
          <title>My Site</title>
          <meta name="description" content="Site" />
      </Helmet>

      
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/ddd">
          <NotFoundPage />
        </Route>
      </Router>
    </>
  );
}

export default App;

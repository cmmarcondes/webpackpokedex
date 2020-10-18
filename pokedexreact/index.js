import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Details from './components/details/Details';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/:method?/:name">
          <Details />
        </Route>
        <Route path="/" exact component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


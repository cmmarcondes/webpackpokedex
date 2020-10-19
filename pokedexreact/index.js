import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Details from './components/details/Details';
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom"; 

ReactDOM.render(
  <HashRouter>
    <Switch>
        <Route path="/:method/:name" component={Details} />
        <Route path="/" exact component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Baselayout from './Components/Baselayout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './Components/Register'
import Home from './Components/Home'
import Login from './Components/Login'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Baselayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path = "/login" component={Login} />
        </Switch>
      </Baselayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

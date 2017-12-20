import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Faq from './Faq';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Application = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path='/' component={App} /> 
    <Route exact path='/faq' component={Faq} />
    </Switch>
  </BrowserRouter>
)
render(<Application />, document.getElementById('root'));
registerServiceWorker();

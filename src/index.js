

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route,BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import imageSensor from './imageSensor/imageSensor'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/imageSensor" component={imageSensor} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route,BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import login from './login/login'
import code_1 from './code_1/code_1'
import code_2 from './code_2/code_2'
import code_3 from './code_3/code_3'
import code_complete from './code_complete/code_complete'
import code_overvieuw from './code_overvieuw/code_overvieuw'






const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={login} />
      <Route path="/code_1" component={code_1} />
      <Route path="/code_2" component={code_2} />
      <Route path="/code_3" component={code_3} />
      <Route path="/code_complete" component={code_complete} />
      <Route path="/code_overvieuw" component={code_overvieuw} />

      





    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
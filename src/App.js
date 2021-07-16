import './scss/main.scss'
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import MainPage from './components/MainPage'
import FormAdd from './components/FormAdd'
import User from './components/User'
import FormEdit from './components/FormEdit'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/addCampaign" component={FormAdd} />
        <Route path="/user" component={User} />
        <Route path="/editCampaign" component={FormEdit} />
      </Switch>
    </Router>
  );
}

export default App

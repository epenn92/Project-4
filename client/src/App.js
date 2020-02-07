import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom'
import AllUsers from './components/AllUsers.jsx'
import NewUser from './components/NewUser.jsx'



class App extends Component {

  componentDidMount = () => {
    <Redirect to='/api/v1/user'></Redirect>
  }

  render() {
    return (
      <div>
        <div>
          <Router>
            <Switch>
              <Route exact path='/api/v1/user' component={AllUsers} />
              <Route exact path='/api/v1/newUser' component={NewUser} />
            </Switch>
          </Router>
        </div>
      </div>
    )

  }
}



export default App;

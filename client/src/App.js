import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom'
import AllUsers from './components/AllUsers.jsx'
import NewUser from './components/NewUser.jsx'
import SingleUser from './components/SingleUser.jsx'
import axios from 'axios'


class App extends Component {

  state = {
    subscriptions: []
  }

  componentDidMount = () => {
    axios.get('/api/v1/subscription')
      .then((res) => {
        this.setState({ subscriptions: res.data })
        console.log(this.state.subscriptions)
      })
  }

  render() {
    return (
      <div>
        <div>
          <Router>
            <Switch>
              <Route exact path='/' component={AllUsers} />
              <Route exact path='/api/v1/allUsers' component={AllUsers} />
              <Route exact path='/api/v1/newUser' component={NewUser} />
              <Route exact path='/api/v1/user/:userId' component={SingleUser} />
            </Switch>
          </Router>
        </div>
      </div>
    )

  }
}



export default App;

import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom'
import AllUsers from './components/AllUsers.jsx'
import NewUser from './components/NewUser.jsx'
import SingleUser from './components/SingleUser.jsx'
import axios from 'axios'
import AllSubscriptions from './components/AllSubscriptions.jsx'
import AllReviews from './components/AllReviews.jsx'
import NewReview from './components/NewReview.jsx'



class App extends Component {

  state = {
    subscriptions: []
  }

  componentDidMount = () => {
    axios.get('/api/v1/subscription')
      .then((res) => {
        this.setState({ subscriptions: res.data })
        // console.log(this.state.subscriptions)
      })
  }

  render() {
    return (
      <div>
        <div>
          <Router>
            <Switch>
              <Route exact path='/' component={AllUsers} />
              <Route exact path='/allUsers' component={AllUsers} />
              <Route exact path='/newUser' component={NewUser} />
              <Route exact path='/user/:userId' component={SingleUser} />
              <Route exact path='/review' component={AllReviews} />
              <Route exact path='/subscription' render={(props) => <AllSubscriptions {...props} subscriptions={this.state.subscriptions} />}
              />
              <Route exact path='/newReview' component={NewReview} />

            </Switch>
          </Router>
        </div>

      </div>
    )

  }
}



export default App;

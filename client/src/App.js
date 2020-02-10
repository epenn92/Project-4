import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom'
import AllUsers from './components/AllUsers.jsx'
import NewUser from './components/NewUser.jsx'
import SingleUser from './components/SingleUser.jsx'
import axios from 'axios'
import AllSubscriptions from './components/AllSubscriptions.jsx'
import AllReviews from './components/AllReviews.jsx'
import NewReview from './components/NewReview.jsx'
import HomePage from './components/HomePage.jsx'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

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
        <Navbar sticky='top' bg="dark" variant="dark">
          <Navbar.Brand href="/">Subscription App</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/allUsers">All Users</Nav.Link>
            <Nav.Link href="/subscription">Subscriptions</Nav.Link>
            <Nav.Link href="/review">Reviews</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button> */}
          {/* </Form> */}
        </Navbar>


        <Navbar fixed='bottom' bg="dark" variant="dark">
          <Navbar.Brand href="#home">Subscription App</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <div>
          <Router>
            <Switch>
              <Route exact path='/' component={HomePage} />
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

      </div >
    )

  }
}



export default App;

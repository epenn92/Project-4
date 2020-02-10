import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import AllUsers from './components/AllUsers.jsx'
import NewUser from './components/NewUser.jsx'
import SingleUser from './components/SingleUser.jsx'
import axios from 'axios'
import AllSubscriptions from './components/AllSubscriptions.jsx'
import AllReviews from './components/AllReviews.jsx'
import NewReview from './components/NewReview.jsx'
import HomePage from './components/HomePage.jsx'
import { Navbar, Nav } from 'react-bootstrap'

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
      <div className='App'>
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


        <div className="footerSpace">.
          <footer id='footer'>
            <nav>
              <ul className="footerOptions">
                <li><p className="thanks">Thanks for visiting</p></li>
                <li className="socialMedia">
                  <button className="icon"><a href="https://twitter.com/Netflix" className="fa fa-twitter"></a></button>
                  <button className="icon"><a href="https://www.facebook.com/hulu/" className="fa fa-facebook"></a></button>
                  <button className="icon"><a href="https://www.linkedin.com/company/twitch/" className="fa fa-linkedin"></a></button>
                  <button className="icon"><a href="https://github.com/topics/league-of-legends" className="fa fa-github"></a></button>
                  <button className="icon"><a href="https://github.com/epenn92/Project-4" className="fa fa-rss"></a></button>
                </li>
                <li><p className="followUs">Follow us</p></li>
              </ul>
            </nav>
          </footer>
        </div>
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

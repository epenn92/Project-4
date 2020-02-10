import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

export default class NewUser extends Component {

    state = {
        newUser: {
            name: '',
            age: 0,
            location: '',
            user_img: '',
            likes: '',
        },
        subscriptions: []

    }

    componentDidMount = () => {
        axios.get('/api/v1/subscription')
            .then((res) => {
                this.setState({ subscriptions: res.data })
            })
    }
    
    onCreateUserSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/v1/user/', this.state.newUser)
            .then(() => {
                this.setState({ redirect: true})
            })
    }

    onChange = (event) => {
        const value = event.target.value 
        const field = event.target.name

        const newState = {...this.state}
        newState.newUser[field] = value
        this.setState(newState)
    }

    render() {
        return (
            <div>
                {this.state.redirect === true ? <Redirect to='/allUsers' /> : null}
                <form onSubmit={this.onCreateUserSubmit}>
                    <input type='text' name="name" value={this.state.newUser.name} onChange={this.onChange} />
                    <input type='number' name='age' value={this.state.newUser.age} onChange={this.onChange} />
                    <input type='text' name='location' value={this.state.newUser.location} onChange={this.onChange} />
                    <input type='text' name='user_img' value={this.state.newUser.user_img} onChange={this.onChange} />
                    <input type='text' name='likes' value={this.state.newUser.likes} onChange={this.onChange} />
                    
                    <button type='submit'>Submit</button>
                </form>
                <Form onSubmit={this.onCreateUserSubmit}>
                    <input type='text' name="name" value={this.state.newUser.name} onChange={this.onChange} />>
  <Form.Group controlId="formName">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your username" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
        )
    }
}

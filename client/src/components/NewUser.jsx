import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class NewUser extends Component {

    state = {
        newUser: {
            name: '',
            age: 0,
            location: '',
            user_img: '',
            likes: '',
        }
    }

    onCreateUserSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/v1/user', this.state.newUser)
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
                {this.state.redirect === true ? <Redirect to='/api/v1/user' /> : null}
                <form>
                    <input type='text' name="name" value={this.state.newUser.name} />
                    <input type='number' name='age' value={this.state.newUser.age} />
                    <input type='text' name='location' value={this.state.newUser.location} />
                    <input type='text' name='user_img' value={this.state.newUser.user_img} />
                    <input type='text' name='likes' value={this.state.newUser.likes} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

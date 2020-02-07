import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class SingleUser extends Component {

    state = {
        displayEdit: false,
        newUser: {
            name: '',
            age: 0,
            location: '',
            user_img: '',
            likes: '',
        }
    }

    componentDidMount = () => {
        axios.get(`/api/v1/user/${this.props.match.params.userId}`)
            .then((res) => {
                this.setState({ newUser: res.data})
            })
    }

    editUserFormSubmit = (event) => {
        event.preventDefault()
        axios.put(`/api/v1/user/${this.props.match.params.userId}/`, this.state.newUser)
            .then((res) => {
                this.setState({ displayEdit: false })
            })
    }

    toggleEditForm = (event) => {
        this.setState({
            displayEdit: !this.state.displayEdit
        })
    }

    onChange = (event) => {
        const value = event.target.value
        const field = event.target.name

        const newState = {...this.state}
        newState.newUser[field] = value
        this.setState(newState)
    }

    deleteUser = () => {
        axios.delete(`/api/v1/user/${this.props.match.params.userId}`)
            .then(() => {
                this.setState({ redirect: true})
            })
    }

    render() {
        return (
            <div>
                {this.state.redirect === true ? <Redirect to='/' /> : null}
                {this.state.redirect2 === true ? <Redirect to={`/api/v1/user/${this.props.match.params.userId}`} /> : null}
                {this.state.displayEdit === false 
                ?
                <div>
                <h1>Single User</h1>
                <h3>{this.state.newUser.name}</h3>
                <h3>{this.state.newUser.age}</h3>

                <button onClick={this.toggleEditForm}>Edit Profile</button>
                <button onClick={this.deleteUser}>Delete Profile</button>
                </div>
                :
                <div>
                    <div>
                        <h1>Edit Profile</h1>
                        <form onSubmit={this.editUserFormSubmit}>
                        <input type='text' name="name" value={this.state.newUser.name} onChange={this.onChange} />
                        <input type='number' name='age' value={this.state.newUser.age} onChange={this.onChange} />
                        <input type='text' name='location' value={this.state.newUser.location} onChange={this.onChange} />
                        <input type='text' name='user_img' value={this.state.newUser.user_img} onChange={this.onChange} />
                        <input type='text' name='likes' value={this.state.newUser.likes} onChange={this.onChange} />
                        <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
    }
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default class AllUsers extends Component {

    state = {
        users: []
    }
    
    componentDidMount() {
        axios.get(`/api/v1/user`)
        .then((res) => {
            this.setState({ users: res.data })
        })
    }
    
    render() {
        return (
        <div>
            {console.log(this.state.users)}
            <h1>Current Users</h1>
            {this.state.users.map((user) => {
            return (
                <div>
                <Link to={`api/v1/user/${user.id}`}><h3>User: {user.name}</h3> </Link>
                <h3>Age: {user.age}</h3>
                <h3>Likes: {user.likes}</h3>
    
                <Link to='/api/v1/newUser'><button>Create New User</button></Link>
                </div>
    
            )
            })}
        </div>
        )
    }
}

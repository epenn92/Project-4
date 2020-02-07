import React, { Component } from 'react'
import axios from 'axios'

export default class SingleUser extends Component {

    state = {
        newUser: {

        }
    }

    componentDidMount = () => {
        axios.get(`/api/v1/user/${this.props.match.params.userId}`)
            .then((res) => {
                this.setState({ newUser: res.data})
            })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

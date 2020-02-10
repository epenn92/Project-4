import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class NewReview extends Component {

    state= {
        newReview: {
            user: '',
            subscription: '',
            rating: '',
            comment: ''
        },
        subscriptions: [],
        users: []
    }

    componentDidMount = () => {
        axios.get('api/v1/user')
            .then((res) => {
                this.setState({ users: res.data})
            })
        axios.get('api/v1/subscription')
            .then((res) => { 
                this.setState({ subscriptions: res.data})
            })
        
    }

    onCreateReviewSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/v1/review/', this.state.newReview)
            .then(() => {
                this.setState({ redirect: true})
            })
    }

    onChange = (event) => {
        const value = event.target.value 
        const field = event.target.name

        const newState = {...this.state}
        newState.newReview[field] = value
        this.setState(newState)
    }


    render() {
        return (
            <div>
                {console.log(this.state.users)}
                {console.log(this.state.subscriptions)}
                {this.state.redirect === true ? <Redirect to='/review' /> : null}
                <form onSubmit={this.onCreateReviewSubmit}>
                    <input type="textarea" name='comment' value={this.state.newReview.comment} onChange={this.onChange} />
                    <span>User:</span>
                    <select id='userSelect' selectedvalue={this.state.value} name="user" onChange={this.onChange}>
                        <option value='None'>None</option>
                        {this.state.users.map((user) => {
                            return(
                                <option value= {user.id}>{user.name}</option>
                            )
                        })}
                    </select>
                    <span>Subscription:</span>
                    <select id='subscriptionSelect' selectedvalue={this.state.value} name='subscription' onChange={this.onChange}>
                        <option value='None'>None</option>
                        {this.state.subscriptions.map((subscription) => {
                            return(
                                <option value={subscription.id}>{subscription.sub_name}</option>
                            )
                        })} 
                    </select>
                    <button type= 'submit'>Submit</button> 
                </form>
            </div>
        )
    }
}


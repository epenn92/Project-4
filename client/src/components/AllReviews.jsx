import React, { Component } from 'react'
import axios from 'axios'

export default class AllReviews extends Component {

    state= {
        reviews: []
    }

    componentDidMount = () => {
        axios.get('/api/v1/review')
            .then((res) => {
                this.setState({ reviews: res.data })
            })
    }

    render() {
        return (
            <div>
                <h1>All Reviews</h1>
                {this.state.reviews.map((review) => {
                    return (
                        <div>
                            <h3>{review.id}</h3>
                            <h3>{review.user}</h3>
                            <h3>{review.rating}</h3>
                            <h3>{review.comment}</h3>
                            <h3>{review.subcription}</h3>
                            <h4>{console.log(review)}</h4>
                        </div>
                    )
                })}

                <button>Create New Review</button>
            </div>
        )
    }
}

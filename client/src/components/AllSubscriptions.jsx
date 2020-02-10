import React from 'react'
// import axios from 'axios'
// import React, { Component } from 'react'

// export default class AllSubscriptions extends Component {

//     state= {
//         subscriptions: []
//     }

//     render() {
//         return (
//             <div>
//                 {console.log(this.props)}
//                 <h1>Subscription Services</h1>
//                 {this.props.map((subscription) => {
//                     return (
//                         <div>
//                             <h3>{subscription.sub_name}</h3>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }




export default function AllSubscriptions(props) {
    console.log('AllSubscriptions', props.subscriptions)
    return (
        <div>
            <h1>Subscription Services</h1>
            {props.subscriptions.map((subscription) => {
                return (
                    <div>
                        <h3>{subscription.sub_name}</h3>
                        <h3>{subscription.price}</h3>
                        <h3>{subscription.billing_period}</h3>
                        <h3>{subscription.type_of_service}</h3>
                        <h3>{subscription.average_rating}</h3>
                        {/* <h3>{subscription.user.name}</h3> */}
                        </div>
                )
            })}
            {/* {
                Object.keys(props).map((subscriptions) => (
                    <div>
                    {console.log(props[subscriptions])}
                    <h3>{this.props.subscriptions.sub_name}</h3>
                    </div>
                ))
            } */}
            
        </div>
    )
}

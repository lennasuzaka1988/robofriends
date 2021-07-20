// Let's you just use Component instead of react.Component
import React, { Component } from 'react';

import './Hello.css'

// class Hello extends Component {
//     // Always do render!
//     render() {
//         // Return without parentheses for one item, but if you want entire expression (more than one tag),
//         // use parentheses
//         return (
//         // JSX is used to build a fake Virtual DOM that makes everything for you
//         <div className={'f1 tc'}>
//             <h1>Hello World</h1>
//             <p>{this.props.greeting}</p>
//         </div>
//         );
//     }
// }

//Alternative:
const Hello = (props) => {
    return (
    <div className={'f1 tc'}>
        <h1>Hello World</h1>
        <p>{props.greeting}</p>
    </div>
);}
// Export default is when you want to export 1 thing, aka the App itself
export default Hello;

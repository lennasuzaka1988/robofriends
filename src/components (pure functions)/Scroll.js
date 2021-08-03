import React from 'react';
// There are props (properties)
// There is state
// There are children
// Scroll can use children as a way to render its children


// const Scroll = (props) => {
//     console.log(props)
//     return props.children
// };
// Even though the above item passes any properties to Scroll, every single component in React has "children"
// Children has CardList

const Scroll = (props) => {
    return(
        <div style={{/*Javascript expression here*/ overflowY: 'scroll', border: '1px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
};
// Now can just add styles with div

export default Scroll;

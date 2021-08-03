import React from 'react';
import Card from './Card.js';

const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error('NOOOOOOO!')
    // }
    return (
        <div>
            {
                /*Using array from robots.js to signify the IDs used, as well as name and emails*/
                robots.map((user, i) => {
                //Needs a key prop to keep track of all IDs when one is deleted otherwise React won't know which one's which,
                // can call it something related to the index
                return ( <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}/>
                );
            })
            }
        </div>
    );
}

export default CardList;

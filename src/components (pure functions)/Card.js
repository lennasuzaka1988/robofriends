import React, {Fragment} from 'react';

// const Card = (props) => {
//Shortens the need to write props.name, props.email, and props.id every time, or:
// const {name, email, id} = props;
const Card = ({name, id, email}) => {
    return (
        //Tachyons are used here as false css classes
        //A fragment allows us to not do full arrays like return [] but use multiple entries rather than one
        <>
            <div className={'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'}>
                {/*Robo hash props.id allows to randomize the props parameter based on id from robots.js*/}
                <img alt='robots'
                     src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    {/*Using the name from the array ID (refer to robots.js) using props param*/}
                    <h2>{name}</h2>
                    {/*Using the email from the robots.js array IDs using props param in the function*/}
                    <p>{email}</p>
                </div>
            </div>
        </>
    );
}

export default Card;

import React from 'react';
const PersonCardFunction = (props) => {
    return (
        <>
            <fieldset>
            <legend >{props.personFirst_name} Card</legend>
            <h1 >{props.personLast_name},{props.personFirst_name}</h1>
            <p >Age: {props.personAge}</p>
            <p>Hair Color: {props.personHaircolor}</p>
            </fieldset>
        </>
    );
};
export default PersonCardFunction;
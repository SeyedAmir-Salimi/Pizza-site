import React from 'react';

function Contacts(props){
    
    const pStyle = {fontSize: '25px' , color: 'brown'}

    return (
        <div>
            <p style={pStyle}>Name: {props.name} {props.family}</p>
            <p style={{color: props.Nazionalita === "Peru" ? "red" : "green" , fontSize: '25px'}}>Nazionalita: {props.Nazionalita}</p>
        </div>

    );
}

export default Contacts;
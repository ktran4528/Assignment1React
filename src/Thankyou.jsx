import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Thankyou (props){
    return (
        <div>
            <h1>Thank you {props.email}</h1>
            <h3>We appreciate your comments: {props.comments}</h3>
        </div>
    )
}

export default Thankyou;
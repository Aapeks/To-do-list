import React from 'react';
import CheckCircle from '@material-ui/icons/CheckCircle';
import './Input.css'

function Input(props) {

    return (
        <div className="input">
            <input
            className="input-box" 
            type="text" 
            placeholder="Enter Item here.." 
            onChange={props.change} 
            value={props.inputfield}
            />
            <CheckCircle 
            className="icon"
            onClick={props.click} />
        </div>
    )
}

export default Input;

import React from 'react';
import Delete from '@material-ui/icons/Delete';
import './List.css';

function List(props) {

    return (
        <div className="list">
            <li className="list-items">{props.type}</li>
            <Delete
            className="delete-icon"
            onClick={() => {
            props.onDelete(props.id);
            }} 
            /> 
        </div>  
    );
}

export default List;

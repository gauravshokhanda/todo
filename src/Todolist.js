import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todolist(props) {


    
    return (
        <div className="todo">
            <div onClick={()=>{
                props.onSelect(props.id);
            }} className="cancel"  > 
            <DeleteForeverIcon  />
            </div>
            
            <li> {props.text}</li>
        </div>
    )
}

export default Todolist;

import React from 'react';
import Button from '@material-ui/core/Button';

export const Buttons = props => {
    return(
        <>  
            <Button variant="contained" size={props.size} color={props.color} onClick={props.clickEvt} >{props.title}</Button>
        </>
    );
}

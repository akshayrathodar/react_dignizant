import React from 'react';
import TextField from '@material-ui/core/TextField';
export const Textinput = props => {
    return(
        <>  
            <TextField id="standard-basic" variant="outlined" type={props.type} label={props.label} name={props.name} value={props.value} onChange={props.textEvt}/>
        </>
    );
}

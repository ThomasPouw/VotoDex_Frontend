import React from 'react';
import {render} from 'react-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export class StandardTextFields extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id={this.props.Id_Name} label={this.props.Label} variant="standard" />
            </Box>
        );
    }

}
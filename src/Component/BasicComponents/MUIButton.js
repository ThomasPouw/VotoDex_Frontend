import React from "react";
import {Button, Input} from "@mui/material";
import {Editor_Send} from "../../Event/Editor_Logic";

export class MUIButton extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Button variant="contained"
                    onClick={()=>{if(this.props.Type == "Add"){
                        Editor_Send(this.props.Refs)
                    }
            }}>{this.props.Type} product</Button>
        )
    }
}
export class FileButton extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </>
        )
    }
}


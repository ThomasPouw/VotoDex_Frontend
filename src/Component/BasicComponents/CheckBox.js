import React, {Component} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";

export class CheckBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    onChange(event) {
        this.setState({checked: event.target.checked});
    }
    render() {
        return (
        <FormControlLabel
            value="end"
            control={<Checkbox
                ref={this.props.href}
                label="Adult Rated"
                checked={this.state.checked}
                onChange={(E) => this.onChange(E)}
            />}
            label="Adult Rated"
            labelPlacement="end"
        />
        );
    }
}
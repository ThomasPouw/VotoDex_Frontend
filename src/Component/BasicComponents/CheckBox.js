import React, {Component} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";

export class CheckBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    onChange(ev) {
        this.setState({checked: ev.target.checked});
    }
    render() {
        return (
        <FormControlLabel
            value="end"
            control={<Checkbox
                ref={this.props.href}
                label="Adult Rated"
                checked={this.state.checked}
                onChange={this.onChange.bind(this)}
            />}
            label="Adult Rated"
            labelPlacement="end"
        />
        );
    }
}
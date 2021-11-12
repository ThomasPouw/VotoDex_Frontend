import React from 'react';
import {render, ReactDOM} from 'react-dom';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
export class GroupingDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            Secondary: {
                Type: "",
                Route: "",
                Path: "",
                ID_Name: ""
            }
        }
        const getoptions = Option.bind(this);
        getoptions(this.props.path, this.props.MainID, "option");
        this.Changes = Change.bind(this);
        if(this.props.Secondary != undefined){
            this.state.Secondary = this.props.Secondary;
        }

    }
    render(){

        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                    <Select native defaultValue="" id={this.props.Id_Name} label={this.props.label} onChange={(E) => this.Changes(E)}>
                        <option aria-label="None" value="" />
                        <optgroup label="Category 1">
                            {this.state.options}
                        </optgroup>
                        <optgroup label="Category 2">
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                        </optgroup>
                    </Select>
                </FormControl>
            </div>
        );
    }
}
export class DropDown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            options: [],
            Secondary: {
                Type: "",
                Route: "",
                Path: "",
                ID_Name: ""
            }
        }
        const getoptions = Option.bind(this);
        getoptions(this.props.path, this.props.MainID, "MenuItem");
        this.Changes = Change.bind(this);
        if(this.props.Secondary != undefined){
            this.state.Secondary = this.props.Secondary;
        }
        if(this.props.Inline != undefined || this.props.Inline != ""){
            this.state.Inline = this.props.Inline;
        }
    }
    render(){
        console.log(this.props.Id_Name);
        return(
            <div>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">{this.props.label}</InputLabel>
                    <Select
                        id={this.props.Id_Name}
                        onChange={(E) => this.Changes(E)}
                        autoWidth
                        value={this.state.value}
                        label={this.props.label}

                        defaultValue={{}}
                    >
                        {this.state.options}
                    </Select>
                </FormControl>
            </div>
        );
    }
}
export class MultiDropDown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            Inline: "",
            options: [],
            Secondary: {
                Type: "",
                Route: "",
                Path: "",
                ID_Name: ""
            }
        }
        const change = Change.bind(this)
        const getoptions = Option.bind(this);
        getoptions(this.props.path, this.props.MainID, "MenuItems");
        this.state.Inline = this.props.Inline
        if(this.props.Secondary != undefined){
            this.state.Secondary = this.props.Secondary;
        }
    }
    render(){
        return (
            <div>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id={this.props.ID_Name}>AAAAAAAAAAAAAAAAH</InputLabel>
                    <Select
                        labelId={this.props.ID_Name}
                        id={this.props.ID_Name}
                        value={this.state.value}
                        multiple
                        input={<OutlinedInput label={this.props.label} />}
                        MenuProps={MenuProps}
                    >
                        {this.state.options}
                    </Select>
                </FormControl>
            </div>
        );
    }
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
function Change(event){
    this.setState({value: event.target.value});
    if(this.state.Secondary.Type !== ""){
        let Inline = "";
        if(this.state.Secondary.Inline !== ""){
            Inline = this.state.Secondary.Inline;
        }
            if(this.state.Secondary.Type =="Normal"){
                console.log(<DropDown path={this.state.Secondary.path} Id_Name={this.state.Secondary.Id_Name}/>);
                render(<DropDown path={this.state.Secondary.path} Id_Name={this.state.Secondary.Id_Name} MainID={event.target.value} MenuType={this.state.Secondary.MenuType} Inline={Inline}/>, document.getElementById(this.state.Secondary.Route));
            }
            else if(this.state.Secondary.Type ==="Multi"){
                render(<MultiDropDown path={this.state.Secondary.Path} Id_Name={this.state.Secondary.Id_Name} MainID={event.target.value} Inline={Inline}/>, document.getElementById(this.state.Secondary.Route));
            }

    }
    if(this.state.Inline != ""){
        localStorage.setItem(this.state.Inline, event.target.value);
    }

}
function Option(path, MainID, MenuOrOption){
    const options = [];
    if(path !== undefined){
        if(MainID === undefined){
            axios.get("http://localhost:8080/api/v1/Options"+path).then(function(result){
                    for(let i = 0; i < result.data.length; i++){
                        if(MenuOrOption ==="option"){
                            options.push(<option value={result.data[i][0]}>{result.data[i][1]}</option>);
                        }
                        else{
                            options.push(<MenuItem value={result.data[i][0]}>{result.data[i][1]}</MenuItem>);
                        }
                    }
                    this.setState({
                        ...this.state,
                        options: options
                    })
                }.bind(this)
            );
        }
        else{
            axios.get("http://localhost:8080/api/v1/Options"+path+MainID).then(function(result) {
                    for(let i = 0; i < result.data.length; i++){
                        if(MenuOrOption ==="option"){
                            options.push(<option value={result.data[i][0]}>{result.data[i][1]}</option>);
                        }
                        else{
                            options.push(<MenuItem value={result.data[i][0]}>{result.data[i][1]}</MenuItem>);
                        }
                    }
                    this.setState({
                        ...this.state,
                        options: options
                    })
                }.bind(this)
            );
        }
    }
}

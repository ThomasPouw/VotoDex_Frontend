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
            hrefs: "",
            ChildType: "",
            ChildBaseOption: [],

        }
        const getoptions = Option.bind(this);
        getoptions(this.props.path, "MenuItem");
        this.Changes = Change.bind(this);
        if(this.props.hrefs != undefined){
            this.state.hrefs = this.props.hrefs;
        }
        if(this.props.ChildType != undefined){
            this.state.ChildType = this.props.ChildType;
        }
    }
    render(){
        return(
            <div>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">{this.props.label}</InputLabel>

                    <Select
                        ref={this.DropdownInput}
                        inputRef={this.DropdownSelect}
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
                Path: "",
                ID_Name: ""
            }
        }
        const change = Change.bind(this)
        const getoptions = Option.bind(this);
        getoptions(this.props.path, this.props.MainID, "MenuItems");
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
    if(this.state.ChildType !== ""){
        let loopingvalue = this.state.ChildBaseOption;
        let Childoptions = [];
        if(loopingvalue !== undefined && loopingvalue !== null){
            if(loopingvalue[0].subCategory !== undefined && loopingvalue[0].subCategory !== null){
                for(let i = 0; i < loopingvalue.length; i++){
                    if(loopingvalue[i].readID == event.target.value){
                        Childoptions = loopingvalue[i].subCategory;
                    }
                }
            }
            else{
                for(let i = 0; i < loopingvalue.length; i++){
                    if(loopingvalue[i].readID == event.target.value){
                        Childoptions = loopingvalue[i].age;
                    }
                }
            }
            if(this.state.ChildType =="Normal"){
                this.state.hrefs.current.setState({
                    value: "",
                    options: optionvalue("option", Childoptions)
                })
            }
            else if(this.state.ChildType ==="Multi"){
                this.state.hrefs.current.setState({
                    value: "",
                    options: optionvalue("MenuItems", Childoptions)
                })
            }
        }
    }
}
function Option(path, MenuOrOption){
    if(path !== undefined){
        axios.get("http://localhost:8081/api/v1/Options"+path).then(function(result){
            this.setState({
                ...this.state,
                options: optionvalue(MenuOrOption, result.data),
                ChildBaseOption: result.data})
        }.bind(this)
        );
    }
}
function optionvalue(MenuOrOption, result){
    const options = [<option value={null}>{"Choose your option"}</option>];
    if(result !== undefined){
        for(let i = 0; i < result.length; i++){
            if(MenuOrOption ==="option"){
                if(result[i].categoryName !== undefined){
                    options.push(<option value={result[i].readID}>{result[i].categoryName}</option>);
                }
                else {
                    options.push(<option value={result[i].readID}>{result[i].regionAgeName}</option>);
                }

            }
            else{
                if(result[i].categoryName !== undefined){
                    options.push(<MenuItem value={result[i].readID}>{result[i].categoryName}</MenuItem>);
                }
                else{
                    options.push(<MenuItem value={result[i].readID}>{result[i].regionAgeName}</MenuItem>);
                }
            }
        }
    }

    return options;
}

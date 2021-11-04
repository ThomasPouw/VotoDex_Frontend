import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import render from 'react-dom'

export default class DropDown extends React.Component{
    state = {
        selectedOption: null,
    };
    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>{
                console.log(`Option selected:`, this.state.selectedOption)
        }

        );

        console.log(this.props.Secondary);
        if(this.props.Secondary != null){
            let Secondary = this.props.Secondary;
            console.log(Secondary);
            console.log(this.state.selectedOption);
            if(Secondary.Multi)
            {
                render(
                    <Select
                        id={Secondary.ID_Name}
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={Options(Secondary.path, this.state.selectedOption)}
                        isMulti
                    />, document.getElementById(Secondary.located)
                );
            }
            else{
                return (
                    <Select
                        id={Secondary.ID_Name}
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={Options(Secondary.path, this.state.selectedOption)}
                    />, document.getElementById(Secondary.located)
                );
            }
        }
    }
    render() {
        const { selectedOption } = this.state;
        if(this.props.Multi){
            return (
                <Select
                    id={this.props.Id_Name}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={Options}
                    isMulti
                />
            );
        }
        else{
            return (
                <Select
                    id={this.props.Id_Name}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={Options(this.props.path, this.props.MainID)}
                />
            );
        }

    }
}
function Options(path, MainID) {
    const options = [];
    options.push({ value: 'There is no Value', label: 'Select your Category' });
    if(path !== undefined){
        if(MainID === undefined){
            axios.get("http://localhost:8080/api/v1/Options"+path).then(result =>{
                    for(let i = 0; i < result.data.length; i++){
                        options.push({ value: result.data[i][0], label: result.data[i][1]});
                    }
                }
            );
        }
        else{
            console.log("Hello There");
            console.log(MainID)
            axios.get("http://localhost:8080/api/v1/Options"+path+MainID).then(result =>{
                    for(let i = 0; i < result.data.length; i++){
                        options.push({ value: result.data[i][0], label: result.data[i][1]});
                    }
                }
            );
        }
    }
    return options;
}
import React from 'react';
import Select from 'react-select';
import axios from 'axios';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
const path = "";
export default class DropDown extends React.Component{
    constructor() {
        super();
        this.path =path;
    }
    state = {
        selectedOption: null,
    };
    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    };
    options= () => {
        axios.get("http://localhost:8080/api/v1/Options"+path).then(result =>{
                for(let i = 0; i < result.length; i++){
                    options.push({ value: result.data[i][0], label: result.data[i][1]});
                }
            }
        );
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
            />
        );
    }

}
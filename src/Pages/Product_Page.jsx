import React from 'react';
import render from 'react-dom';
import axios from 'axios';

export default class Product_Display extends React.Component {
    /*axiosAccess = {
        axios.get("http://localhost:8080/api/v1/Options/Products/"+this.props.match.params.Product_ID).then(result => {
            result.data


        )
        }
    }*/
    render(){
        return(
            <p>{this.props.match.params.Product_ID}</p>
        )
    }
}
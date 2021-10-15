import React from 'react';
import axios from 'axios';
export default class FriendList extends React.Component{
    state = {
        Friends: "",
    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/User/Friends').then(result =>
        {
            console.log(result);
            this.setState({Friends: result.data});
        });
    }
    render()
    {
        return null;
    };
}


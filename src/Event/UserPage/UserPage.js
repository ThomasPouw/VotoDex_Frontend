import React from 'react';
import axios from 'axios';
import render from 'react-dom';
export function Get_Friend_By_ID(Friend_ID, User_ID){

    axios.get('http://localhost:8080/api/v1/User/'+User_ID+'/Friends/Get/'+Friend_ID).then(result =>
    {
        console.log(result);
        this.setState({Friends: result.data});
    });
    render()
    {
        return (
            <h1> {this.state.Friends}</h1>
        )
    };
}
export function Delete_Friend_By_ID(ID){

    axios.get('http://localhost:8080/api/v1/User/'+User_ID+'/Friends/Delete/'+ID).then(result =>
    {
        console.log(result);
        this.setState({Friends: result.data});
    });
    render()
    {
        return (
            <h1> {this.state.Friends}</h1>
        )
    };
}
export function WishList_User(Wishlist_ID, User_ID)
{
    axios.get('http://localhost:8080/api/v1/WishList/'+Wishlist_ID+'/'+User_ID).then(result =>
    {
        render(
            <React.StrictMode>
                
            </React.StrictMode>,
            document.getElementById("root"),
            reportWebVitals(console.log)
    });
}
export function Message_User(Type_Message, User_ID)
{
    axios.get('http://localhost:8080/api/v1/User/'+User_ID+'/'+Type_Message).then(result =>
    {
        render()
        {
            return null;
        }
    });
}
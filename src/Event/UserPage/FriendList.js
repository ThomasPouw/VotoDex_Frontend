import React from 'react';
import axios from 'axios';
import render from 'react-dom';
export function Get_Friend_By_ID(ID){

    axios.get('http://localhost:8080/api/v1/User/Friends/Get/'+ID).then(result =>
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
    const Friends = [];
    axios.get('http://localhost:8080/api/v1/User/Friends/Delete/'+ID).then(result => {
        for (let index = 1; index <= result.data.length; index++) {
            Friends.push(<div className='Friend_Container'>
                <img src={result.data[0]} alt='User_Picture' onClick={Go_To_User_By_ID(result.data[1])}/>
                <p>{result.data[2]}</p>
            </div>);
        }
    });

    render()
    {
        return (
            <h1> <React.StrictMode>
                <div className="Main_Container" id="login_menu">
                    <div className="Login Container">
                        <p>UserName:</p>
                        <input type="text" id="Login_UserName"/><br/>
                        <p>Password:</p>
                        <input type="text" id="Login_Password"/><br />
                        <input type="submit" id="Submit_Login"/>
                    </div>
                </div>
            </React.StrictMode>,
                document.getElementById("User_Friendlist"),
                reportWebVitals(console.log)</h1>
        )
    };
}
export function Go_To_User_By_ID(ID) {
        //think about this pls :)
    axios.get('http://localhost:8080/api/v1/User/Friends/'+ID).then(result =>
    {
        window.location.href = window.location.origin+"/User/"+result.data[2];
    });
}
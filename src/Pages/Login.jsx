import React from "react";
import ReactDOM from 'react-dom';
import '../CSS/Main_Style.scss';
import '../CSS/Login.scss';
import reportWebVitals from '../reportWebVitals';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";
import {Checkregister_User} from "../Event/Register.js";

export function Login() {
    return (
        ReactDOM.render(
            <React.StrictMode>
                    <div className="Main_Container" id="login_menu">
                    <div className="Login Container">
                        <p>UserName:</p>
                        <input type="text" id="Login_UserName"/><br/>
                        <p>Password:</p>
                        <input type="text" id="Login_Password" /><br />
                        <input type="submit" id="Submit_Login" />
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById("root"),
            reportWebVitals(console.log)
        ));
}
export function Register() {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <div className="Main_Container" id="menu">
                    <div className="Register Container">
                        <p>UserName:</p>
                        <input type="text" id="Register_UserName" /><br />
                        <p>Password:</p>
                        <input type="text" id="Register_Password" /><br />
                        <p>Confirm Password:</p>
                        <input type="text" id="Register_ConfirmPassword" /><br />
                        <p>Date Of Birth:</p>
                        <input type="date" id="Register_DateBirth"/><br />
                        <p>Email:</p>
                        <input type="text" id="Register_Email" /><br />
                        <input type="submit" id="Submit_Register" onClick={Checkregister_User}/>
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById("root"),
            reportWebVitals(console.log)
        ));
}
import React from "react";
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import {Product_Editor} from './Pages/New_Edit';
import {Search_Menu} from './Pages/Search_Menu';
import {Admin_Page} from './Pages/Admin_Page';
import {Login, Register} from './Pages/Login';
import './CSS/MainCSS.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

export function HeaderMenu()
{
    return(
        <Router>
            <div className="Head_Menu">
                <nav>
                        <div className='nav_Menu'><Link to="/">Home</Link></div>
                        <div className='nav_Menu'><Link to="/Search">Search</Link></div>
                        <div className='nav_Menu'><Link to="/Product_E">Temporary Product Editor</Link></div>
                    <div className='nav_Menu'><Link to="/Admin">Admin</Link></div>
                    <div className='nav_Menu'><Link to="/Login">Login</Link></div>
                    <div className='nav_Menu'><Link to="/Register">Register</Link></div>
                </nav>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            </div>
            <Switch>
                <Route path="/Search">
                    <Search_Menu/>
                </Route>
                <Route path="/Product_E">
                    <Product_Editor/>
                </Route>
                <Route path="/Admin">
                    <Admin_Page />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/Register">
                    <Register/>
                </Route>
                <Route path="/">
                    <Wishlist3 />
                </Route>
                <Route path="">
                    <Wishlist3 />
                </Route>
                
            </Switch>
        </Router>
    );
}
export function FooterMenu() {
    return (
        <div className="Footer_Menu">
            <p>
                AAAAAAAAAAAAAAAAAAAAAAAAAAAH!!
            </p>
        </div>
    );
}
export function Wishlist3() {
    return (

        ReactDOM.render(
            <React.StrictMode>
                <div className="Main_Container">
                    {Test(10)}
                </div>
            </React.StrictMode>,
            document.getElementById("root"),
            reportWebVitals(console.log)
        ));
}
function Test(number) {
    const test = [];
    for (let index = 1; index <= number; index++) {
        test.push(<div className='Wishlist_Container' key={"Wishlist_C"+ index}>
            <img src={logo} alt='Logo'/>
            <p>{index}</p>
        </div>);
    }
    return test;
}
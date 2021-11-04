import React from "react";
import logo from '../logo.svg';
import ReactDOM from 'react-dom';
import {Product_Editor} from '../Pages/Editor';
import {Search_Menu} from '../Pages/Search_Menu';
import {Admin_Page} from '../Pages/Admin_Page';
import {User_Page} from '../Pages/UserPage';
import {Login, Register} from '../Pages/Login';
import Product_Display from '../Pages/Product_Page';
import '../CSS/Main_Style.scss';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import reportWebVitals from '../reportWebVitals';

export function HeaderMenu()
{
    return(
        <div className="Head_Menu">
            <BrowserRouter>
                <div>
                    <div className='nav_Menu'><Link to="/">Home</Link></div>
                    <div className='nav_Menu'><Link to="/Search">Search</Link></div>
                    <div className='nav_Menu'><Link to="/Editor">Temporary Product Editor</Link></div>
                    <div className='nav_Menu'><Link to="/Admin">Admin</Link></div>
                    <div className='nav_Menu'><Link to="/User">User</Link></div>
                    <div className='nav_Menu'><Link to="/Login">Login</Link></div>
                    <div className='nav_Menu'><Link to="/Register">Register</Link></div>
                </div>
                <Switch>
                    <Route exact path="/" component={Wishlist3} exact/>
                    <Route path="/Search" component={Search_Menu}/>
                    <Route path="/Editor" component={Product_Editor}/>
                    <Route path="/Product/:Product_ID" component={Product_Display}/>
                    <Route path="/Admin" component={Admin_Page}/>
                    <Route path="/User" component={User_Page}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Register" component={Register}/>
                </Switch>
            </BrowserRouter>
        </div>
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
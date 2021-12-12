import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import LoginButton from "./BasicComponents/Login_Register/Login";
import {Search_Menu} from "../Pages/Search_Menu";
import {Product_Editor} from "../Pages/Editor";
import Product_Display from "../Pages/Product_Page";
import {Admin_Page} from "../Pages/Admin_Page";
import {User_Page} from "../Pages/UserPage";
import Login from "./BasicComponents/Login_Register/Login";
import {Register} from "../Pages/Login";
import React from "react";
import {Wishlist3} from "./Header_Footer";
import {render} from "react-dom";
import {Auth0Provider} from "@auth0/auth0-react";
import LogoutButton from "./BasicComponents/Login_Register/Logout";

export function HeaderMenu()
{
    return(
        <Auth0Provider
            domain="dev-yw9oh5an.us.auth0.com"
            clientId="q3UZApkU3TUdmMrELmwhIoFaiyy8Hejw"
            redirectUri={window.location.origin}
            audience="https://dev-yw9oh5an.us.auth0.com/api/v2/"
            scope="read:current_user update:current_user_metadata"
            useRefreshTokens={true}
        >
            <div className="Head_Menu">
            <BrowserRouter>
                <div>
                    <div className='nav_Menu'><Link to="/">Home</Link></div>
                    <div className='nav_Menu'><Link to="/Search">Search</Link></div>
                    <div className='nav_Menu'><Link to="/Editor">Temporary Product Editor</Link></div>
                    <div className='nav_Menu'><Link to="/Admin">Admin</Link></div>
                    <div className='nav_Menu'><Link to="/User">User</Link></div>
                    <div className='nav_Menu'><Link to="/Register">Register</Link></div>
                    <LoginButton/>
                    <LogoutButton/>
                    <div className='nav_Menu'><Link to="/Product">Product</Link></div>
                </div>
                <Switch>
                    <Route exact path="/" component={Wishlist3} exact/>
                    <Route path="/Search" component={Search_Menu}/>
                    <Route path="/Editor" component={Product_Editor}/>
                    <Route path="/Product" component={Product_Display}/>
                    <Route path="/Admin" component={Admin_Page}/>
                    <Route path="/User" component={User_Page}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/Register" component={Register}/>
                </Switch>
            </BrowserRouter>
            </div>
        </Auth0Provider>
    );

}
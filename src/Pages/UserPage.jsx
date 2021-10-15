import React from "react";
import ReactDOM from 'react-dom';
import '../CSS/MainCSS.css';
import '../CSS/User_Page.scss';
import reportWebVitals from '../reportWebVitals';
import Friendlist from "../Component/UserPage.js";
import {Get_Friend_By_ID,Delete_Friend_By_ID} from "../Event/UserPage/FriendList";

export function User_Page() {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <div className="Main_Container" key="Main" id="menu">
                    <div className="Main_User WishList" id="Main_User_WishList">
                        Wishlist
                        <input type="text" id="Rename_Wishlist"/>
                        <input type="text" id="Find_Product_In_WishList"/>
                        <div className="Sub_User" id="User_WishList"/>

                    </div>
                    <div className="Main_User Friendlist" id="Main_User_Friendlist" >
                        Friendlist
                        <input type="text" id="Find_Friend_In_List"/>
                        <input type="text" id="Add_Friend_To_List"/>
                        <input type="button" id="Add_New_Friend" value="Look Up ID of friend"/>
                        <div className="Sub_User" id="User_Friendlist"/>
                        <Friendlist/>
                    </div>
                    <div className="Main_User Messages" id="Main_User_Messages" >
                        Messages <br/>
                        <input type="button" id="User_Messages_Product_Recommendation" value="Recommendated Items" onClick={Placeholder}/>
                        <input type="button" id="User_Messages_New_Friend_Request" value="New Friend Request" onClick={Placeholder}/>
                        <input type="button" id="User_Messages_Warning" value="Warning about a requested Item" onClick={Placeholder}/>
                        <div className="Sub_User" id="User_Messages"/>
                    </div>

                </div>
            </React.StrictMode>,
            document.getElementById("root"),
            reportWebVitals(console.log)
        )
    );
}
function Placeholder(){
    console.log("Boop");
}

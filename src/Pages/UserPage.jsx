import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import '../CSS/MainCSS.css';
import '../CSS/User_Page.scss';
import reportWebVitals from '../reportWebVitals';
import Friendlist from "../Component/UserPage.js";
import {Get_Friend_By_ID,Delete_Friend_By_ID} from "../Event/UserPage/FriendList";
import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";

export function User_Page() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);
    useEffect(() => {
        if(user != null){
            const domain = "dev-yw9oh5an.us.auth0.com";
            const getUserMetadata = async () => {


                try {
                    const accessToken = await getAccessTokenSilently({
                        audience: `https://${domain}/api/v2/`,
                        scope: "read:current_user",
                    });
                    console.log(user)
                    const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                    const metadataResponse = await fetch(userDetailsByIdUrl, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    });

                    const { user_metadata } = await metadataResponse.json();
                    setUserMetadata(user_metadata);
                    console.log(user_metadata);
                } catch (e) {
                    console.log(e.message);
                }
            };
            const setRoles = async () => {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${domain}/api/v2/`,
                    scope: "read:current_user",
                });
                console.log(accessToken);
                await axios.post(
                    `https://${domain}/api/v2/users/${user.sub}/roles`,
                    {roles:['rol_HQ221j6Lx6ZNFqWc']},
                    {
                        headers: {
                            "cache-control": "no-cache",
                            Authorization: `Bearer ${accessToken}`,
                            "content-type": "application/json"
                        }
                    }
                ).then(function (response) {
                    console.log(response);
                    console.log(response.data);
                }).catch((error)=> {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                })
            }
            getUserMetadata().then(setRoles())

        }
        else{
            window.location.href = window.location.origin;
        }


    }, [getAccessTokenSilently, user?.sub]);
    return (
        isAuthenticated &&
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

import React from "react";
import ReactDOM from 'react-dom';
import '../CSS/Main_Style.scss';
import '../CSS/Admin.scss';
import reportWebVitals from '../reportWebVitals';
import 'react-tabs/style/react-tabs.css';
import '../CSS/Admin.scss';
import EditingStationAdmin from "../Component/EditingStationAdmin"
import {CheckBox} from "../Component/BasicComponents/CheckBox";
import {Button, Dropdown} from "@mui/material";



export function Admin_Page(){
    return (
        ReactDOM.render(
            <React.StrictMode>
                <div className="Main_Container" id="menu">
                    <div className="menu2" key="Main2" style={{ margin: 2 + "%", width: 95 + "%", height: 27 + "%" }}>
                    </div>
                    <EditingStationAdmin/>
                    <div className="menu2" style={{ margin: 2 + "%", width: 95 + "%", height: 27 + "%" }}>
                        AAAAAAAAAAAAAAAAAAAH
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById("root"),
            reportWebVitals(console.log)
        )
    );
    //Yay... Events...
}


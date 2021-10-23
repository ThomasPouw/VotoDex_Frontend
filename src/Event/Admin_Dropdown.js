import {DropDown} from '../Component/DropDowns';
import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import reportWebVitals from '../reportWebVitals';
export function Fill_Option(path, Route){
    if(document.getElementById(Route) != null)
    {
        return (
            ReactDOM.render(
                <React.StrictMode>
                    {DropDown(path)}
                </React.StrictMode>,
                document.getElementById(Route),
                reportWebVitals(console.log)
            ));
    }

        
}
export function Add_Option(Text_All_Options,Text_Extra_Options, Route, Updated_Dropdown)
{
    if(document.getElementById(Text_All_Options) != null)
    {
        let new_Item = document.getElementById(Text_All_Options).value;
        if(Text_Extra_Options != null)
        {
            new_Item += "/" +document.getElementById(Text_Extra_Options).value;
        }
        else{
            new_Item += "/"+ Text_Extra_Options;
        }
        axios.get("http://localhost:8080/api/v1/Options"+Route+new_Item).then(result =>{
            if(result.data[0]){
                alert(new_Item +" Succesfully added");
            }
            else
            {
                alert("Something went wrong!<br/> You somehow cant add this item");
            }
        });
    }

}

export function Edit_Option(Text_All_Options,Edited_Item_Dropdown, Reference_ID, Route)
{
    if(document.getElementById(Text_All_Options) != null){
        let new_Item = document.getElementById(Text_All_Options).value + "/" +document.getElementById(Edited_Item_Dropdown).value;
        if(Reference_ID != null){
            new_Item += "/"+ document.getElementById(Reference_ID).value;
        }
        else{
            new_Item += "/null";
        }
        axios.get("http://localhost:8080/api/v1/Options"+Route+new_Item).then(result =>{
            if(result.data[0]){
                alert(new_Item +" Succesfully added");
            }
            else
            {
                alert("Something went wrong!<br/> You somehow cant change this item");
            }
        });
    }

}

export function Delete_Option(Text_All_Options,Text_Extra_Options, Route){
    if(document.getElementById(Text_All_Options) != null){
        let new_Item = document.getElementById(Text_All_Options).value;
        if(Text_Extra_Options != null)
        {
            new_Item += "/" +document.getElementById(Text_Extra_Options).value;
        }
        else{
            new_Item += "/"+ Text_Extra_Options;
        }
        axios.get("http://localhost:8080/api/v1/Options"+Route+new_Item).then(result =>{
            if(result.data[0]){
                alert(new_Item+" Succesfully added");
            }
            else
            {
                alert("Something went wrong!<br/> You somehow cant change this item");
            }
        });
    }
}



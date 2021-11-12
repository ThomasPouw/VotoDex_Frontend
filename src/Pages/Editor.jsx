import React from "react";
import ReactDOM from 'react-dom';
import '../CSS/Main_Style.scss';
import reportWebVitals from '../reportWebVitals';
import '../CSS/Editor.scss'
import {DropDown, MultiDropDown} from "../Component/BasicComponents/DropDown";
import {StandardTextFields} from "../Component/BasicComponents/TextFields"
import {Editor_Send} from "../Event/Editor_Logic";

export function Product_Editor() {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <div className="Main_Container" key="Main">
                    <div className='Editor_Menu' >
                        <div className="Editor_Sub_Menu">
                            <StandardTextFields Id_Name={"Product_Name_TXT_Editor"} Label={"Product Name"}/>
                            <StandardTextFields Id_Name={"Company_Name_TXT_Editor"} Label={"Company"}/>
                            <p> Categorie: (change this)</p>
                            <DropDown path={"/Category/Get/"} Id_Name={"DropDown_Editor_Category"} Inline = "Editor_Category" Secondary={{Id_Name: "DropDown_Editor_SubCategory", path:"/Category/Get/", Route: "SubCategory_Editor", Type:"Normal",Inline: "Editor_SubCategory"}}/>
                            <p> SubCategorie: (change this)</p>
                            <div id={"SubCategory_Editor"}>
                                <DropDown Id_Name={"DropDown_Editor_SubCategory"}/>
                            </div>
                            <p> Region: (change this)</p>
                            <DropDown path={"/Region_AgeRating/Get/"} Id_Name={"DropDown_Editor_Region"} Secondary={{Id_Name: "DropDown_Editor_SubCategory", path:"/Region_AgeRating/Get/", Route: "AgeRating_Editor", Type:"Normal" ,Inline: "Editor_AgeRating"}}/>
                            <p> Age Rating: (change this)</p>
                            <div id={"AgeRating_Editor"}>
                                <DropDown Id_Name={"DropDown_Editor_AgeRating"}/>
                            </div>
                            <br/>
                            <br/>
                            <select Name="AgeRating_Listbox" Size="10" style={{width: 100+"%"}}/>
                        </div>
                        <div className="Editor_Sub_Menu" style={{float: "right"}}>
                            <p>Description:</p>
                            <textarea id="Description_LongText" name="Description_LongText" rows="10" cols="50" >
                            </textarea>
                            <p>Image:</p>
                            <img width="50%" height="100%" id="Preview_Picture" src={LoadPicture()} />
                            <input type="file" name="fileToUpload" id="Edit_fileToUpload" value="" onChange={(e) => GetPicture(e)}></input>
                            <button type={"button"} value={"Item"} className={"Editor_BTN"} onClick={Editor_Send}>Item</button>
                        </div>
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById("root"),
        reportWebVitals(console.log)
    ));
}
function Test(){
    alert("Boop");
}
function GetPicture(event) {
    const file = event.target.files;      
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);  
        reader.onload = () => {
            if(reader.result != null || undefined || "")
            {
                console.log(reader.result);
                const Container = document.getElementById("Preview_Picture");
                Container.setAttribute("src", reader.result);
                localStorage.setItem('Editor_Picture', reader.result);
            } 
        }
    }
}
//If you want it loaded already.. here you have something... Something to fix i mean...
function LoadPicture()
{
    var Picture = localStorage.getItem("Editor_Picture");
    console.log(Picture);
    if(Picture !== "")
    {
            return Picture;
    }
}
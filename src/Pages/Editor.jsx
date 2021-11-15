import React, {Component} from "react";
import ReactDOM from 'react-dom';
import '../CSS/Main_Style.scss';
import reportWebVitals from '../reportWebVitals';
import '../CSS/Editor.scss'
import {DropDown, MultiDropDown} from "../Component/BasicComponents/DropDown";
import {StandardTextFields} from "../Component/BasicComponents/TextFields"
import {Editor_Send} from "../Event/Editor_Logic";
import {MUIButton} from "../Component/BasicComponents/MUIButton";

let Picture = null;
export function Product_Editor(){
    let Category = React.createRef();
    let SubCategory = React.createRef();
    let AgeRating = React.createRef();
    let Picture = React.createRef();

    return (
        ReactDOM.render(
            <React.StrictMode>
                <div className="Main_Container" key="Main">
                    <div className='Editor_Menu' >
                        <div className="Editor_Sub_Menu">
                            <StandardTextFields Id_Name={"Product_Name_TXT_Editor"} Label={"Product Name"}/>
                            <StandardTextFields Id_Name={"Company_Name_TXT_Editor"} Label={"Company"}/>
                            <p> Categorie: (change this)</p>
                            <DropDown path={"/Category/Get/"} Id_Name={"DropDown_Editor_Category"} ref={Category} Secondary={{Id_Name: "DropDown_Editor_SubCategory", path:"/Category/Get/", Route: "SubCategory_Editor", Type:"Normal", refs: SubCategory}}/>
                            <p> SubCategorie: (change this)</p>
                            <div id={"SubCategory_Editor"}>
                                <DropDown Id_Name={"DropDown_Editor_SubCategory"}/>
                            </div>
                            <p> Region: (change this)</p>
                            <DropDown path={"/Region_AgeRating/Get/"} Id_Name={"DropDown_Editor_Region"} Secondary={{Id_Name: "DropDown_Editor_SubCategory", path:"/Region_AgeRating/Get/", Route: "AgeRating_Editor", Type:"Normal" ,refs: AgeRating}}/>
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
                            <img width="50%" height="100%" id="Preview_Picture"/>
                            <input type="file" name="fileToUpload" id="Edit_fileToUpload" ref={Picture} onChange={(e) => GetPicture(e)}></input>
                            <MUIButton Type={"Add"} Refs={[Category,SubCategory,AgeRating, Picture]}>Product</MUIButton>
                        </div>
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById("root"),
        reportWebVitals(console.log)))
}
function Test(){
    alert("Boop");
}
function GetPicture(event) {
    Picture = event.target.files[0];
    if (Picture) {
        const reader = new FileReader();
        reader.readAsDataURL(Picture);
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
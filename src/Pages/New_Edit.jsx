import React from "react";
import ReactDOM from 'react-dom';
import '../CSS/MainCSS.css';
import reportWebVitals from '../reportWebVitals';

export function Product_Editor() {
    return (

        ReactDOM.render(
            <React.StrictMode>
                <div className="Main_Container" key="Main">
                    <div className="menu2" key="Main2" style={{ margin: 2 + "%", width: 81 + "%", height: 83.5 + "%" }}>
                        <div className="menu2" key="Main2" style={{ width: 20 + "%", height: 20 + "%", position: "left" }}>
                            <p> Name Product: </p>
                            <input type="text" id="fname" name="Product_Name"/>
                            <p> Company: (change this)</p>
                            <select name="Company" id="Company_Name">
                                <option value="Worst_Company">EA</option>
                                <option value="BoerenBond">Boerenbond</option>
                                <option value="Worst_Company#2">Blizzard</option>
                                <option value="Nintendo">Nintendo</option>
                            </select>
                            <p> Categorie: (change this)</p>
                            <select name="Company" id="Company_Name">
                                <option value="Worst_Company">EA</option>
                                <option value="BoerenBond">Boerenbond</option>
                                <option value="Worst_Company#2">Blizzard</option>
                                <option value="Nintendo">Nintendo</option>
                            </select>
                        </div>
                        <p>Description:</p>
                        <textarea id="w3review" name="w3review" rows="4" cols="25" style={{ margin: 2 + "%", width: 20 + "%", height: 10 + "%"}}>
                        </textarea>
                        <p>Image:</p>
                        <img width="120" height="180" id="Edit_Preview_Picture" src={LoadPicture()} />
                        <input type="file" name="fileToUpload" id="Edit_fileToUpload" value="" onChange={(e) => GetPicture(e)}></input>
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById("root"),
        reportWebVitals(console.log)
    ));
}
function GetPicture(event) {
    const file = event.target.files;      
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);  
        reader.onload = () => {
            if(reader.result != null || undefined || "")
            {
                const Container = document.getElementById("Edit_Preview_Picture");
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
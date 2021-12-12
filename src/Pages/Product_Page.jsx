import React from "react";
import "../CSS/Main_Style.scss"
import "../CSS/Product_Page.scss"
import ReactDOM from 'react-dom';
import {ProductTable} from "../Component/BasicComponents/Table";
import reportWebVitals from "../reportWebVitals";

export default function Product_Display(){
    const Description = "AAAAAAAAAAAAAAH";
    const Image = "";
    const Name = "AAAAAAAAAAAAAAH";
    return (
        ReactDOM.render(
            <React.StrictMode>
                <div className={"Main_Container"}>
                <div className={"Product_Page"}>
                    <div className={"Product_Information"} style={{float: "left"}}>
                        <p className={"name"}>{Name}</p>
                        <div className={"Description"}>
                            <p>{Description}</p>
                        </div>
                        <br/>
                        <div style={{width: 45+"%"}}>
                            <ProductTable Company={"test"} AgeRating={[{Region: "Europe", Age: "18"},{Region: "America", Age: "17"},{Region: "Japan", Age: "16"}]} Adult={"true"}/>
                        </div>
                    </div>
                    <div className={"Product_Information"} style={{float: "right"}}>
                        <div className={"Image"}>
                            <img src={Image} alt={Image}/> AAAAAAAAAAAAAAAAH
                        </div>
                    </div>
                </div>
                </div>
            </React.StrictMode>,
            document.getElementById("root"),
            reportWebVitals(console.log)
        ));
}
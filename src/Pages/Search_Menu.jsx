import React, {useState} from "react";
import ReactDOM from 'react-dom';
import '../CSS/Search.scss';
import '../CSS/Main_Style.scss';
import reportWebVitals from '../reportWebVitals';
import logo from '../logo.svg';

export function Search_Menu()
{
    return (
        ReactDOM.render(
                <React.StrictMode>
                    <div className="Main_Container">
                        <div className={"Search_Menu"}>
                        <div className="Search_Bar" id= "Search_Bar">
                            <p> Name Product: </p>
                            <input type="text" id="Product_Name" name="Product_Name" />
                            <p> Company: (change this)</p>
                            <input type="text" id="Company_Name" name="Company_Name_Name" />
                            <p> Category: (change this)</p>
                            {//<DropDown path={"/Category/Get/"} Id_Name={"DropDown_Search_Category"}/>
                            }
                            <p> SubCategory: (change this)</p>
                            {//<DropDown Id_Name={"DropDown_Search_SubCategory"}/>}
                            }<p> Region: (change this)</p>
                            {//<DropDown path={"/Region_AgeRating/Get/"}Id_Name={"DropDown_Search_Region"}/>
                            }<p> Age Rating: (change this)</p>
                            {//<DropDown Id_Name={"DropDown_Search_AgeRating"}/>
                            //<input type="button" value="Randomize!"/>
                            }
                    </div>
                        <div className="Search_Results" id="Search_Results" >
                            {Test(8)}
                        </div>
                    </div>
                    </div>
                </React.StrictMode>,
            document.getElementById("root"),
                reportWebVitals(console.log)
            )
        );
    
    
}
export function Test(number) {
    const test = [];
    for (let index = 1; index <= number; index++) {
        test.push(<div className='Wishlist_Container' id={"Wishlist_C" + index}>
            <img src={logo} alt='Logo' />
            <p>{index}</p>
        </div>);
    }
    return test;
}

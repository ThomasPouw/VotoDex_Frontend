import React from "react";
import ReactDOM from 'react-dom';
import '../CSS/Main_Style.scss';
import '../CSS/Admin.scss';
import reportWebVitals from '../reportWebVitals';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {DropDown} from '../Component/DropDowns';
import '../CSS/Admin.scss';
import {Add_Option, Edit_Option, Delete_Option, Fill_Option} from '../Event/Admin_Dropdown';


export function Admin_Page() {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <div className="Main_Container" key="Main" id="menu">
                    <div className="menu2" key="Main2" style={{ margin: 2 + "%", width: 95 + "%", height: 27 + "%" }}>
                        Datagrid. (Find one)
                    </div>
                    <div className="menu2" key="Main2" style={{ margin: 2 + "%", width: 95 + "%", height: 27 + "%" }}>
                        <Tabs>
                            <TabList>
                                <Tab>Category</Tab>
                                <Tab>Sub-Category</Tab>
                                <Tab>Region</Tab>
                                <Tab>Age Rating</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Catagory_menu">
                                    <h1>Add Catagory</h1>
                                    <select name="Preview_Main_Category_Add" id="Preview_Main_Category">
                                    {DropDown("/Category/Get/null")}</select>
                                    <input type="text" id="Add_Catagory_TXT" />
                                    <input type="submit" id="Add_Catagory_BTN" onClick={Add_Option("Add_Catagory_TXT",null,"/Category/Main/Add/","Preview_Main_Category")}/>
                                </div>
                                <div className="Tab_Menu" id="Edit_Catagory_menu">
                                    <h1>Edit Catagory</h1>
                                    <select name="Preview_Main_Category_Edit" id="Preview_Main_Category_Edit">
                                        {DropDown("/Category/Get/null")}
                                    </select>
                                    <input type="text" id="Edit_Catagory_TXT" />
                                    <input type="submit" id="Edit_Catagory_BTN" onClick={Edit_Option("Edit_Category_TXT", "Preview_Main_Category_Edit", null, "/Category/Edit/")}/>
                                </div>
                                <div className="Tab_Menu" id="Delete_Catagory_menu">
                                    <h1>Delete Catagory</h1>
                                    <select name={"Preview_Main_Category_Delete"} id={"Preview_Main_Category_Delete"}>
                                        {DropDown("/Category/Get/null")}
                                    </select>
                                    <input type="submit" id="Delete_Catagory_BTN" onClick={Delete_Option("Preview_Main_Category_Delete", null, "/Category/Main/Delete/")}/>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Sub_Catagory_menu">
                                    <h1>Add sub Catagory</h1>
                                    <select name={"Preview_Sub_Main_Category_Add"} id={"Preview_Sub_Main_Category_Add"} onChange={Fill_Option("Preview_Sub_Main_Category_Add","Preview_Sub_Category_Add")}>
                                        {DropDown("/Category/Get/null")}
                                    </select><br/>
                                    <select name={"Preview_Sub_Category_Add"} id={"Preview_Sub_Category_Add"}>
                                        {DropDown("/Category/Get/"+0)}
                                    </select><br/>
                                    <input type="text" id="Add_Sub_Catagory_TXT"/><br />
                                    <input type="submit" id="Add_Sub_Catagory_BTN" onClick={Add_Option("Add_Sub_Catagory_TXT","Preview_Sub_Main_Category_Add","/Category/Sub/Add/","Preview_Sub_Category_Add")}/>
                                </div>
                                <div className="Tab_Menu" id="Edit_Sub_Catagory_menu">
                                    <h1>Edit sub Catagory</h1>
                                    <select name={"Preview_Sub_Main_Category_Edit"} id={"Preview_Sub_Main_Category_Edit"} onChange={Fill_Option("Preview_Sub_Main_Category_Edit","Preview_Sub_Category_Edit")}>
                                        {DropDown("/Category/Get/null")}
                                    </select><br/>
                                    <select name={"Preview_Sub_Category_Edit"} id={"Preview_Sub_Category_Edit"}>
                                        {DropDown("/Category/Get/"+0)}
                                    </select><br/>
                                    <input type="text" id="Edit_Sub_Catagory_TXT" /><br />
                                    <input type="submit" id="Edit_Sub_Catagory_BTN" onClick={Edit_Option("Edit_Sub_Category_TXT", "Preview_Sub_Category_Edit", "Preview_Sub_Main_Category_Edit", "/Category/Edit/")}/>
                                </div>
                                <div className="Tab_Menu" id="Delete_Sub_Catagory_menu">
                                    <h1>Delete sub Catagory</h1>
                                    <select name={"Preview_Sub_Main_Category_Delete"} id={"Preview_Sub_Main_Category_Delete"} onChange={Fill_Option("Preview_Sub_Main_Category_Delete","Preview_Sub_Category_Delete")}>>
                                        {DropDown("/Category/Get/null")}
                                    </select><br/>
                                    <select name={"Preview_Sub_Category_Delete"} id={"Preview_Sub_Category_Delete"}>
                                        {DropDown("/Category/Get/"+0)}
                                    </select><br/>
                                    <input type="submit" id="Delete_Sub_Catagory_BTN" onClick={Delete_Option("Preview_Sub_Category_Delete","Preview_Sub_Main_Category_Delete", "/Category/Sub/Delete/")}/>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Region_menu">
                                    <h1>Add region Catagory</h1>
                                    <select name={"Preview_Region_Add"} id={"Preview_Region_Add"} >
                                        {DropDown("/Region_AgeRating/Get/null")}
                                    </select><br/>
                                    <input type="text" id="Add_Region_TXT" /><br />
                                    <input type="submit" id="Add_Region_BTN" onClick={Add_Option("Add_Region_TXT",null,"/Region_AgeRating/Add/","Preview_Region_Add")}/>
                                </div>
                                <div className="Tab_Menu" id="Edit_Region_menu">
                                    <h1>Edit region Catagory</h1>
                                    <select name={"Preview_Region_Edit"} id={"Preview_Region_Edit"}>
                                        {DropDown("/Region_AgeRating/Get/null")}
                                    </select><br/>
                                    <input type="text" id="Edit_Region_TXT" /><br />
                                    <input type="submit" id="Edit_Region_BTN" onClick={Edit_Option("Edit_Region_TXT", "Preview_Region_Edit", null, "/Region_AgeRating/Edit/")}/>
                                </div>
                                <div className="Tab_Menu" id="Delete_Region_menu">
                                    <h1>Delete region Catagory</h1>
                                    <select name={"Preview_Region_Delete"} id={"Preview_Region_Delete"}>
                                        {DropDown("/Region_AgeRating/Get/null")}
                                    </select><br/>
                                    <input type="submit" id="Delete_Region_BTN" onClick={Delete_Option("Preview_Region_Delete", null, "/Region_AgeRating/Region/Delete/")}/>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Age_Rating_menu">
                                    <h1>Add Age Rating Catagory</h1>
                                    <select name={"Preview_AgeRegion_Add"} id={"Preview_AgeRegion_Add"} onChange={Fill_Option("Preview_AgeRegion_Add","Preview_Age_Add")}>
                                        {DropDown("/Region_AgeRating/Get/null")}
                                    </select><br/>
                                    <select name={"Preview_Age_Add"} id={"Preview_Age_Add"}>
                                        {DropDown("/Region_AgeRating/Get/"+0)}
                                    </select><br/>
                                    <input type="text" id="Add_Age_Rating_TXT" /><br />
                                    <input type="submit" id="Add_Age_Rating_BTN" onClick={Add_Option("Add_Age_Rating_TXT","Preview_AgeRating_Add","/Region_AgeRating/Add/","Preview_Age_Add")}/>
                                </div>
                                <div className="Tab_Menu" id="Edit_Age_Rating_menu">
                                    <h1>Edit Age Rating Catagory</h1>
                                    <select name={"Preview_AgeRegion_Edit"} id={"Preview_AgeRegion_Edit"} onChange={Fill_Option("Preview_AgeRegion_Edit","Preview_Age_Edit")}>
                                        {DropDown("/Region_AgeRating/Get/null")}
                                    </select><br/>
                                    <select name={"Preview_Age_Edit"} id={"Preview_Age_Edit"}>
                                        {DropDown("/Region_AgeRating/Get/"+0)}
                                    </select><br/>
                                    <input type="text" id="Edit_Age_TXT" /><br />
                                    <input type="submit" id="Edit_Age_Rating_BTN" onClick={Edit_Option("Edit_Age_TXT", "Preview_Age_Edit","Preview_AgeRegion_Edit","/Region_AgeRating/Edit/")}/>
                                </div>
                                <div className="Tab_Menu" id="Delete_Age_Rating_menu">
                                    <h1>Delete Age Rating Catagory</h1>
                                    <select name={"Preview_AgeRegion_Delete"} id={"Preview_AgeRegion_Delete"} onChange={Fill_Option("Preview_AgeRegion_Delete","Preview_Age_Delete")}>
                                        {DropDown("/Region_AgeRating/Get/null")}
                                    </select><br/>
                                    <select name={"Preview_Age_Delete"} id={"Preview_Age_Delete"}>
                                        {DropDown("/Region_AgeRating/Get/0")}
                                    </select><br/>
                                    Doesnt put it another Age rating yet.
                                    <input type="submit" id="Delete_Age_Rating_BTN" onClick={Delete_Option("Preview_Age_Delete","Preview_AgeRating_Delete", "/Region_AgeRating/Delete/")}/>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                    <div className="menu2" key="Main2" style={{ margin: 2 + "%", width: 95 + "%", height: 27 + "%" }}>
                        AAAAAAAAAAAAAAAAAAAH
                    </div>
                </div>
            </React.StrictMode>,
            document.getElementById("root"),
            reportWebVitals(console.log)
        )
    );


}

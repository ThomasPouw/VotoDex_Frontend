import React from "react";
import ReactDOM from 'react-dom';
import '../CSS/Main_Style.scss';
import '../CSS/Admin.scss';
import reportWebVitals from '../reportWebVitals';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {DropDown} from '../Component/DropDowns';
import '../CSS/Admin.scss';
import {Add_Option, Fill_Option} from '../Event/Admin_Dropdown';


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
                                <Tab>Sub-Catergory</Tab>
                                <Tab>Region</Tab>
                                <Tab>Age Rating</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Catagory_menu">
                                    <h1>Add sub Catagory</h1>
                                    <select name={"Preview_Main_Category_Add"} id="Preview_Main_Category">
                                    {DropDown("/MainCategory")}</select>
                                    <input type="text" id="Add_Catagory_TXT" />
                                    <input type="submit" id="Add_Catagory_BTN" onSubmit={Add_Option("Add_Catagory_TXT","Preview_Main_Category","/MainCategory/Add/"); Fill_Option("/MainCategory", "Preview_Main_Category")}/>
                                </div>
                                <div className="Tab_Menu" id="Edit_Catagory_menu">
                                    <h1>Edit sub Catagory</h1>
                                    <select name={"Preview_Main_Category_Edit"} id={"Preview_Main_Category_Edit"}>
                                        {DropDown("/MainCategory")}
                                    </select>
                                    <input type="text" id="Edit_Catagory_TXT" />
                                    <input type="submit" id="Edit_Catagory_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Delete_Catagory_menu">
                                    <h1>Delete sub Catagory</h1>
                                    <select name={"Preview_Main_Category_Delete"} id={"Preview_Main_Category_Delete"}>
                                        {DropDown("/MainCategory")}
                                    </select>
                                    <input type="submit" id="Delete_Catagory_BTN" />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Sub_Catagory_menu">
                                    <h1>Add sub Catagory</h1>
                                    <select name={"Preview_Sub_Main_Category_Add"} id={"Preview_Sub_Main_Category_Add"}>
                                        {DropDown("/MainCategory")}
                                    </select><br/>
                                    <select name={"Preview_Sub_Category_Add"} id={"Preview_Sub_Category_Add"}>
                                        {DropDown("/SubCategory/"+0)}
                                    </select><br/>
                                    <input type="text" id="Add_Sub_Catagory_TXT"/><br />
                                    <input type="submit" id="Add_Sub_Catagory_BTN"/>
                                </div>
                                <div className="Tab_Menu" id="Edit_Sub_Catagory_menu">
                                    <h1>Edit sub Catagory</h1>
                                    <select name={"Preview_Sub_Main_Category_Edit"} id={"Preview_Sub_Main_Category_Edit"}>
                                        {DropDown("/MainCategory")}
                                    </select><br/>
                                    <select name={"Preview_Sub_Category_Edit"} id={"Preview_Sub_Category_Edit"}>
                                        {DropDown("/SubCategory/"+0)}
                                    </select><br/>
                                    <input type="text" id="Edit_Sub_Catagory_TXT" /><br />
                                    <input type="submit" id="Edit_Sub_Catagory_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Delete_Sub_Catagory_menu">
                                    <h1>Delete sub Catagory</h1>
                                    <select name={"Preview_Sub_Main_Category_Delete"} id={"Preview_Sub_Main_Category_Delete"}>
                                        {DropDown("/MainCategory")}
                                    </select><br/>
                                    <select name={"Preview_Sub_Category_Delete"} id={"Preview_Sub_Category_Delete"}>
                                        {DropDown("/SubCategory/"+0)}
                                    </select><br/>
                                    <input type="submit" id="Delete_Sub_Catagory_BTN" />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Region_menu">
                                    <h1>Add region Catagory</h1>
                                    <select name={"Preview_Region_Add"} id={"Preview_Region_Add"}>
                                        {DropDown("/Region")}
                                    </select><br/>
                                    <input type="text" id="Add_Region_TXT" /><br />
                                    <input type="submit" id="Add_Region_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Edit_Region_menu">
                                    <h1>Edit region Catagory</h1>
                                    <select name={"Preview_Region_Edit"} id={"Preview_Region_Edit"}>
                                        {DropDown("/Region")}
                                    </select><br/>
                                    <input type="text" id="Edit_Region_TXT" /><br />
                                    <input type="submit" id="Edit_Region_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Delete_Region_menu">
                                    <h1>Delete region Catagory</h1>
                                    <select name={"Preview_Region_Delete"} id={"Preview_Region_Delete"}>
                                        {DropDown("/Region")}
                                    </select><br/>
                                    <input type="submit" id="Delete_Region_BTN" />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Age_Rating_menu">
                                    <h1>Add Age Rating Catagory</h1>
                                    <select name={"Preview_AgeRegion_Add"} id={"Preview_AgeRegion_Add"}>
                                        {DropDown("/Region")}
                                    </select><br/>
                                    <select name={"Preview_Age_Add"} id={"Preview_Age_Add"}>
                                        {DropDown("/Region/AgeRating/"+0)}
                                    </select><br/>
                                    <input type="text" id="Add_Age_Rating_TXT" /><br />
                                    <input type="submit" id="Add_Age_Rating_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Edit_Age_Rating_menu">
                                    <h1>Edit Age Rating Catagory</h1>
                                    <select name={"Preview_AgeRegion_Edit"} id={"Preview_AgeRegion_Edit"}>
                                        {DropDown("/Region")}
                                    </select><br/>
                                    <select name={"Preview_Age_Edit"} id={"Preview_Age_Edit"}>
                                        {DropDown("/Region/AgeRating/"+0)}
                                    </select><br/>
                                    <input type="text" id="Edit_Age_Rating_TXT" /><br />
                                    <input type="submit" id="Edit_Age_Rating_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Delete_Age_Rating_menu">
                                    <h1>Delete Age Rating Catagory</h1>
                                    <select name={"Preview_AgeRegion_Delete"} id={"Preview_AgeRegion_Delete"}>
                                        {DropDown("/Region")}
                                    </select><br/>
                                    <select name={"Preview_Age_Delete"} id={"Preview_Age_Delete"}>
                                        {DropDown("/Region/AgeRating/"+0)}
                                    </select><br/>
                                    <select name={"Preview_Age_Replace"} id={"Preview_Age_Replace"}>
                                        {DropDown("/Region/AgeRating/"+0)}
                                    </select><br/>
                                    <input type="submit" id="Delete_Age_Rating_BTN"/>
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

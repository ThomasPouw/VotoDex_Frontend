import React, {createRef, useRef} from 'react';
import '../CSS/Main_Style.scss';
import '../CSS/Admin.scss';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {DropDown, GroupingDropDown} from './BasicComponents/DropDown';
import {Button} from "@mui/material";

import '../CSS/Admin.scss';
import {Add_Option, Edit_Option, Delete_Option} from '../Event/Admin_Dropdown';
let Main_Sub = "";
export default class EditingStationAdmin extends React.Component{
    constructor(props) {
        super(props);
        Main_Sub = createRef();
    }
    AddCategory = () => {
        Add_Option("Add_Catagory_TXT",null,"/Category/Main/Add/","DropDown_Main_Category");
    }
    EditCategory = () => {
        Edit_Option("Edit_Category_TXT", "DropDown_Main_Category", null, "/Category/Edit/");
    }
    DeleteCategory = () => {
        Delete_Option("DropDown_Main_Category", null, "/Category/Main/Delete/");
    }
    AddSubCategory = () => {
        Add_Option("Add_Sub_Catagory_TXT",Main_Sub,"/Category/Sub/Add/","DropDown_Sub_Category");
    }
    EditSubCategory = () => {
        Edit_Option("Edit_Sub_Category_TXT", "DropDown_Sub_Category", "DropDown_Sub_MainCategory", "/Category/Edit/");
    }
    DeleteSubCategory = () => {
        Delete_Option("DropDown_Sub_Category","DropDown_Sub_MainCategory", "/Category/Sub/Delete/");
    }
    AddRegion = () => {
        Add_Option("Add_Region_TXT",null,"/Region/Add/","DropDown_Region");
    }
    EditRegion = () => {
        Edit_Option("Edit_Region_TXT", "DropDown_Region", null, "/Category/Edit/");
    }
    DeleteRegion = () => {
        Delete_Option("DropDown_Region", null, "/Region_AgeRating/Region/Delete/");
    }
    AddAge = () => {
        Add_Option("Add_Age_Rating_TXT","DropDown_Region_AgeRating","/AgeRating/Add/","DropDown_AgeRating");
    }
    EditAge = () => {
        Edit_Option("Edit_Age_TXT", "DropDown_AgeRating","DropDown_Region_AgeRating","/Region_AgeRating/Edit/");
    }
    DeleteAge = () => {
        Delete_Option("DropDown_AgeRating","DropDown_Region_AgeRating", "/Region_AgeRating/Delete/");
    }
    
    render() {
        return <div className="menu2" style={{ margin: 2 + "%", width: 95 + "%", height: 27 + "%" }}>
            <Tabs>
                <TabList>
                    <Tab>Category</Tab>
                    <Tab>Sub-Category</Tab>
                    <Tab>Region</Tab>
                    <Tab>Age Rating</Tab>
                </TabList>
                <TabPanel>
                    <div className="Tab_Menu" id="Tab_Category">
                        <div className="Tab_Sub" id="DropDown_Catagory_menu">
                            <h1>Main Category</h1>
                                <DropDown path={"/Category/Get/"} ID_Name={"DropDown_Main_Category"} label={"Category"}/>
                        </div>
                        <div className="Tab_Sub" id="Add_Catagory_menu">
                            <h1>Add Catagory</h1>
                            <input type="text" id="Add_Catagory_TXT" />
                            <Button type ="button" variant="contained" id="Add_Catagory_BTN" onClick={this.AddCategory} value={"Add Category"}>Add Category</Button>
                        </div>
                        <div className="Tab_Sub" id="Edit_Catagory_menu">
                            <h1>Edit Catagory</h1>
                            <input type="text" id="Edit_Catagory_TXT" />
                            <Button type ="button" variant="contained" id="Edit_Catagory_BTN" onClick={this.EditCategory} value={"Edit Category"}>Edit Category</Button>
                        </div>
                        <div className="Tab_Sub" id="Delete_Catagory_menu">
                            <h1>Delete Catagory</h1>
                            <Button type ="button" variant="contained" id="Delete_Catagory_BTN" onClick={this.DeleteCategory} value={"Delete Category"}>Delete Category</Button>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="Tab_Menu" id="Tab_SubCategory">
                        <div className="Tab_Sub" id="DropDown_SubCatagory_menu">
                            <h1>Main Category</h1>
                            <div id={"DropDown_SubMain"}>
                                <DropDown path={"/Category/Get/"} Id_Name={"DropDown_Sub_Main_Category"} ref={Main_Sub} Secondary={{Id_Name: "DropDown_Sub_Category", path:"/Category/Get/", Route: "DropDown_Sub", Type:"Normal"}}/>
                            </div>
                            <h1>Sub Category</h1>
                        <div id={"DropDown_Sub"}>
                            <DropDown  Id_Name={"DropDown_Sub_Category"}/>
                        </div>
                        </div>
                        <div className="Tab_Sub" id="Add_Sub_Catagory_menu">
                            <h1>Add sub Catagory</h1>
                            <input type="text" id="Add_Sub_Catagory_TXT" /><br />
                            <Button type ="button" variant="contained" id="Add_Sub_Catagory_BTN"  onClick={this.AddSubCategory} value={"Add Sub Category"}>Add Sub Category</Button>
                        </div>
                        <div className="Tab_Sub" id="Edit_Sub_Catagory_menu">
                            <h1>Edit sub Catagory</h1>
                            <input type="text" id="Edit_Sub_Catagory_TXT" /><br />
                            <Button type ="button" variant="contained" id="Edit_Sub_Catagory_BTN" onClick={this.EditSubCategory} value={"Edit Sub Category"}>Edit Sub Category</Button>
                        </div>
                        <div className="Tab_Sub" id="Delete_Sub_Catagory_menu">
                            <h1>Delete sub Catagory</h1>
                            <Button type ="button" variant="contained" id="Delete_Sub_Catagory_BTN" onClick={this.DeleteSubCategory} value={"Delete Sub Category"}>Delete Sub Category</Button>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="Tab_Menu" id="Tab_Region">
                        <div className="Tab_Sub" id="DropDown_Region_menu">
                            <h1>Region</h1>

                            <DropDown path={"/Region_AgeRating/Get/"} Id_Name={"DropDown_Region"} Multi={false} />
                        </div>
                        <div className="Tab_Sub" id="Add_Region_menu">
                            <h1>Add region Catagory</h1>
                            <input type="text" id="Add_Region_TXT" /><br />
                            <Button type ="button" variant="contained" id="Add_Region_BTN" onClick={this.AddRegion} value={"Add Region"}>Add Region</Button>
                        </div>
                        <div className="Tab_Sub" id="Edit_Region_menu">
                            <h1>Edit region Catagory</h1>
                            <input type="text" id="Edit_Region_TXT" /><br />
                            <Button type ="button" variant="contained" id="Edit_Region_BTN" onClick={this.EditRegion} value={"Edit Region"}>Edit Region</Button>
                        </div>
                        <div className="Tab_Sub" id="Delete_Region_menu">
                            <h1>Delete region Catagory</h1>
                            <Button type ="button" variant="contained" id="Delete_Region_BTN" onClick={this.DeleteRegion} value={"Delete Region"}>Delete Region</Button>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="Tab_Menu" id="Tab_AgeRating">
                        <div className="Tab_Sub" id="DropDown_AgeRating_menu">
                            <h1>Region</h1>
                            <DropDown path={"/Region_AgeRating/Get/"} Id_Name={"DropDown_Region_AgeRating"} Multi={false} Secondary={{ID_Name: "DropDown_AgeRating", path: "/Region_AgeRating/Get/\"", located: "DropDown_AgeRating", Multi: false}}/>
                            <h1>AgeRating</h1>
                            <div className={"DropDown_Age"}>
                                <DropDown path={"/Region_AgeRating/Get/"} Id_Name={"DropDown_AgeRating"} Multi={false} />
                            </div>
                        </div>
                    <div className="Tab_Sub" id="Add_Age_Rating_menu">
                        <h1>Add Age Rating Catagory</h1>
                        <input type="text" id="Add_Age_Rating_TXT" /><br />
                        <Button type ="button" variant="contained" id="Add_Age_Rating_BTN" onClick={this.AddAge} value={"Add Age Rating"}>Add Age Rating</Button>
                    </div>
                    <div className="Tab_Sub" id="Edit_Age_Rating_menu">
                        <h1>Edit Age Rating Catagory</h1>
                        <input type="text" id="Edit_Age_TXT" /><br />
                        <Button type ="button" variant="contained" id="Edit_Age_Rating_BTN" onClick={this.EditAge} value={"Edit Age Rating"}>Edit Age Rating</Button>
                    </div>
                    <div className="Tab_Sub" id="Delete_Age_Rating_menu">
                        <h1>Delete Age Rating Catagory</h1>
                        Doesnt put it another Age rating yet.
                        <Button type ="button" variant="contained" id="Delete_Age_Rating_BTN" onClick={this.DeleteAge} value={"Delete Age Rating"}>Delete Age Rating</Button>
                    </div>
                    </div>
                </TabPanel>
            </Tabs>
            <script>

            </script>
        </div>
    }
}
function DropDownWatcher(){
    document.getElementById()
}


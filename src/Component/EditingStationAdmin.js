import React from 'react';
import '../CSS/Main_Style.scss';
import '../CSS/Admin.scss';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DropDown from '../Component/DropDowns';
import '../CSS/Admin.scss';
import {Add_Option, Edit_Option, Delete_Option} from '../Event/Admin_Dropdown';

export default class EditingStationAdmin extends React.Component{
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
        Add_Option("Add_Sub_Catagory_TXT","DropDown_Sub_MainCategory","/Category/Sub/Add/","DropDown_Sub_Category");
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
    LoadCategory = () => {
        DropDown("/Category/Get/");
    }
    LoadRegion = () => {
        DropDown("/Region_AgeRating/Get/");
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
                            <select name="DropDown_Main_Category" id="DropDown_Main_Category" onLoad={this.LoadCategory}/>
                        </div>
                        <div className="Tab_Sub" id="Add_Catagory_menu">
                            <h1>Add Catagory</h1>
                            <input type="text" id="Add_Catagory_TXT" />
                            <button type ="button" id="Add_Catagory_BTN" onClick={this.AddCategory} value={"Add Category"}>Add Category</button>
                        </div>
                        <div className="Tab_Sub" id="Edit_Catagory_menu">
                            <h1>Edit Catagory</h1>
                            <input type="text" id="Edit_Catagory_TXT" />
                            <button type ="button" id="Edit_Catagory_BTN" onClick={this.EditCategory} value={"Edit Category"}>Edit Category</button>
                        </div>
                        <div className="Tab_Sub" id="Delete_Catagory_menu">
                            <h1>Delete Catagory</h1>
                            <button type ="button" id="Delete_Catagory_BTN" onClick={this.DeleteCategory} value={"Delete Category"}>Delete Category</button>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="Tab_Menu" id="Tab_SubCategory">
                        <div className="Tab_Sub" id="DropDown_SubCatagory_menu">
                            <h1>Main Category</h1>
                            <select name="DropDown_Sub_MainCategory" id="DropDown_Sub_MainCategory" onLoad={this.LoadCategory}/>
                            <h1>Sub Category</h1>
                            <select name="DropDown_Sub_Category" id="DropDown_Sub_Category"/>
                        </div>
                        <div className="Tab_Sub" id="Add_Sub_Catagory_menu">
                            <h1>Add sub Catagory</h1>
                            <input type="text" id="Add_Sub_Catagory_TXT"/><br />
                            <button type ="button" id="Add_Sub_Catagory_BTN" onClick={this.AddSubCategory} value={"Add Sub Category"}>Add Sub Category</button>
                        </div>
                        <div className="Tab_Sub" id="Edit_Sub_Catagory_menu">
                            <h1>Edit sub Catagory</h1>
                            <input type="text" id="Edit_Sub_Catagory_TXT" /><br />
                            <button type ="button" id="Edit_Sub_Catagory_BTN" onClick={this.EditSubCategory} value={"Edit Sub Category"}>Edit Sub Category</button>
                        </div>
                        <div className="Tab_Sub" id="Delete_Sub_Catagory_menu">
                            <h1>Delete sub Catagory</h1>
                            <button type ="button" id="Delete_Sub_Catagory_BTN" onClick={this.DeleteSubCategory} value={"Delete Sub Category"}>Delete Sub Category</button>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="Tab_Menu" id="Tab_Region">
                        <div className="Tab_Sub" id="DropDown_Region_menu">
                            <h1>Region</h1>
                            <select name="DropDown_Region" id="DropDown_Region" onLoad={this.LoadRegion}/>
                        </div>
                        <div className="Tab_Sub" id="Add_Region_menu">
                            <h1>Add region Catagory</h1>
                            <input type="text" id="Add_Region_TXT" /><br />
                            <button type ="button" id="Add_Region_BTN" onClick={this.AddRegion} value={"Add Region"}>Add Region</button>
                        </div>
                        <div className="Tab_Sub" id="Edit_Region_menu">
                            <h1>Edit region Catagory</h1>
                            <input type="text" id="Edit_Region_TXT" /><br />
                            <button type ="button" id="Edit_Region_BTN" onClick={this.EditRegion} value={"Edit Region"}>Edit Region</button>
                        </div>
                        <div className="Tab_Sub" id="Delete_Region_menu">
                            <h1>Delete region Catagory</h1>
                            <button type ="button" id="Delete_Region_BTN" onClick={this.DeleteRegion} value={"Delete Region"}>Delete Region</button>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="Tab_Menu" id="Tab_AgeRating">
                        <div className="Tab_Sub" id="DropDown_AgeRating_menu">
                            <h1>Region</h1>
                            <select name="DropDown_Region_AgeRating" id="DropDown_Region_AgeRating" onLoad={this.LoadRegion}/>
                            <h1>AgeRating</h1>
                            <select name="DropDown_AgeRating" id="DropDown_AgeRating"/>
                        </div>
                    <div className="Tab_Sub" id="Add_Age_Rating_menu">
                        <h1>Add Age Rating Catagory</h1>
                        <input type="text" id="Add_Age_Rating_TXT" /><br />
                        <button type ="button" id="Add_Age_Rating_BTN" onClick={this.AddAge} value={"Add Age Rating"}>Add Age Rating</button>
                    </div>
                    <div className="Tab_Sub" id="Edit_Age_Rating_menu">
                        <h1>Edit Age Rating Catagory</h1>
                        <input type="text" id="Edit_Age_TXT" /><br />
                        <button type ="button" id="Edit_Age_Rating_BTN" onClick={this.EditAge} value={"Edit Age Rating"}>Edit Age Rating</button>
                    </div>
                    <div className="Tab_Sub" id="Delete_Age_Rating_menu">
                        <h1>Delete Age Rating Catagory</h1>
                        Doesnt put it another Age rating yet.
                        <button type ="button" id="Delete_Age_Rating_BTN" onClick={this.DeleteAge} value={"Delete Age Rating"}>Delete Age Rating</button>
                    </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    }
}


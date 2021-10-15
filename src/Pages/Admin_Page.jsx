import React from "react";
import ReactDOM from 'react-dom';
import '../CSS/Main_Style.scss';
import '../CSS/Admin.scss';
import reportWebVitals from '../reportWebVitals';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


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
                                    <select className="Main_Catagory_1">
                                        <option>Sports</option>
                                        <option>Games</option>
                                        <option>Electronica</option>
                                        <option>Clothing</option>
                                    </select><br />
                                    <input type="text" id="Add_Catagory_TXT" /><br />
                                    <input type="submit" id="Add_Catagory_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Edit_Catagory_menu">
                                    <h1>Edit sub Catagory</h1>
                                    <select className="Main_Catagory_2">
                                        <option>Sports</option>
                                        <option>Games</option>
                                        <option>Electronica</option>
                                        <option>Clothing</option>
                                    </select><br />
                                    <input type="text" id="Edit_Catagory_TXT" /><br />
                                    <input type="submit" id="Edit_Catagory_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Delete_Catagory_menu">
                                    <h1>Delete sub Catagory</h1>
                                    <select className="Main_Catagory_2">
                                        <option>Sports</option>
                                        <option>Games</option>
                                        <option>Electronica</option>
                                        <option>Clothing</option>
                                    </select><br />
                                    <input type="submit" id="Delete_Catagory_BTN" />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Sub_Catagory_menu">
                                    <h1>Add sub Catagory</h1>
                                    <select className="Main_Sub_Catagory_1">
                                        <option>Sports</option>
                                        <option>Games</option>
                                        <option>Electronica</option>
                                        <option>Clothing</option>
                                    </select><br/>
                                    <input type="text" id="Add_Sub_Catagory_TXT" /><br />
                                    <input type="submit" id="Add_Sub_Catagory_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Edit_Sub_Catagory_menu">
                                    <h1>Edit sub Catagory</h1>
                                    <select className="Main_Sub_Catagory_2">
                                        <option>Sports</option>
                                        <option>Games</option>
                                        <option>Electronica</option>
                                        <option>Clothing</option>
                                    </select><br />
                                    <select className="Edit_List_Sub_Catagory">
                                        <option>Bike</option>
                                        <option>Football</option>
                                        <option>American Football</option>
                                        <option>Golf</option>
                                    </select><br />
                                    <input type="text" id="Edit_Sub_Catagory_TXT" /><br />
                                    <input type="submit" id="Edit_Sub_Catagory_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Delete_Sub_Catagory_menu">
                                    <h1>Delete sub Catagory</h1>
                                    <select className="Main_Sub_Catagory_2">
                                        <option>Sports</option>
                                        <option>Games</option>
                                        <option>Electronica</option>
                                        <option>Clothing</option>
                                    </select><br />
                                    <select className="Delete_List_Sub_Catagory">
                                        <option>Bike</option>
                                        <option>Football</option>
                                        <option>American Football</option>
                                        <option>Golf</option>
                                    </select><br />
                                    <input type="submit" id="Delete_Sub_Catagory_BTN" />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Region_menu">
                                    <h1>Add region Catagory</h1>
                                    <select className="Main_Region_1">
                                        <option>Europe</option>
                                        <option>America</option>
                                        <option>Oceanica</option>
                                        <option>Asia</option>
                                    </select><br />
                                    <input type="text" id="Add_Region_TXT" /><br />
                                    <input type="submit" id="Add_Region_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Edit_Region_menu">
                                    <h1>Edit region Catagory</h1>
                                    <select className="Main_Region_2">
                                        <option>Europe</option>
                                        <option>America</option>
                                        <option>Oceanica</option>
                                        <option>Asia</option>
                                    </select><br />
                                    <input type="text" id="Edit_Region_TXT" /><br />
                                    <input type="submit" id="Edit_Region_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Delete_Region_menu">
                                    <h1>Delete region Catagory</h1>
                                    <select className="Main_Region_2">
                                        <option>Europe</option>
                                        <option>America</option>
                                        <option>Oceanica</option>
                                        <option>Asia</option>
                                    </select><br />
                                    <input type="submit" id="Delete_Region_BTN" />
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="Tab_Menu" id="Add_Age_Rating_menu">
                                    <h1>Add Age Rating Catagory</h1>
                                    <select className="Main_Age_Rating_1">
                                        <option>Europe</option>
                                        <option>America</option>
                                        <option>Oceanica</option>
                                        <option>Asia</option>
                                    </select><br />
                                    <input type="text" id="Add_Age_Rating_TXT" /><br />
                                    <input type="submit" id="Add_Age_Rating_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Edit_Age_Rating_menu">
                                    <h1>Edit Age Rating Catagory</h1>
                                    <select className="Main_Age_Rating_2">
                                        <option>Europe</option>
                                        <option>America</option>
                                        <option>Oceanica</option>
                                        <option>Asia</option>
                                    </select><br />
                                    <input type="text" id="Edit_Age_Rating_TXT" /><br />
                                    <input type="submit" id="Edit_Age_Rating_BTN" />
                                </div>
                                <div className="Tab_Menu" id="Delete_Age_Rating_menu">
                                    <h1>Delete Age Rating Catagory</h1>
                                    <select className="Main_Age_Rating">
                                        <option>Europe</option>
                                        <option>America</option>
                                        <option>Oceanica</option>
                                        <option>Asia</option>
                                    </select><br />
                                    <input type="submit" id="Delete_Age_Rating_BTN" />
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

import React, {useState} from "react";
import ReactDOM from 'react-dom';
import '../CSS/Search.css';
import '../CSS/MainCSS.css';
import reportWebVitals from '../reportWebVitals';
import logo from '../logo.svg';
import {MultiSelect} from "react-multi-select-component";

const options = [
    { label: "Europe", value: "Europe", disabled: true },
    { label: "Pegi 3", value: "Pegi 3" },
    { label: "Pegi 7", value: "Pegi 7" },
    { label: "Pegi 12", value: "Pegi 12" },
    { label: "Pegi 16", value: "Pegi 16"},
    { label: "Pegi 18", value: "Pegi 18" },
]; //https://www.npmjs.com/package/react-multi-select-component
const Example = () => {
    const [selected, setSelected] = useState([]);
    console.log(JSON.stringify(selected));
    return (
        <div>
            <p>Select Age rating</p>
            {//<pre>{JSON.stringify(selected)}</pre>
            }
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
            />
        </div>
    );
};
export function Search_Menu()
{
    return (
        ReactDOM.render(
                <React.StrictMode>
                    <div className="Main_Container">
                        <div className="Search_Bar" id= "Search_Bar">
                        <p> Name Product: </p>
                        <input type="text" id="fname" name="Product_Name" />
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
                        <div>
                            {Example()}
                        </div>
                        {/*<input type="button" value="Randomize!"/>*/}
                    </div>
                        <div className="Wishlist" id="W" id="Wishlist">
                            {Test(10)}
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

import {Dropdown} from '../Component/DropDowns';
import ReactDOM from 'react-dom';
export function Fill_Option(path, Route){
    document.getElementById()
    return (
        ReactDOM.render(
            <React.StrictMode>
                {DropDown(path)}
            </React.StrictMode>,
            document.getElementById(Route),
            reportWebVitals(console.log)
        ));
        
}
export function Add_Option(Text_ID,Component_ID, Route){
    let new_Item = document.getElementById(Text_ID).value;
    axios.get("http://localhost:8080/api/v1/Tags"+Route+"/"+new_Item).then(result =>{
        if(result.data[0]){
            alert({new_Item+" Succesfully added");
        }
        else{
            alert("Something went wrong!<br/> You somehow cant add this item");
        }
    }
}


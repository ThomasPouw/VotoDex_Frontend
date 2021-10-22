import React from "react";
import axios from 'axios';

export function DropDown(path){
    const Drop =[];
    axios.get("http://localhost:8080/api/v1/Tags"+path).then(result =>{
        for(let i = 0; i < result.length; i++){
            Drop.push(<option value= {result.data[i][0]}>{result.data[i][1]}</option>);
        }
    }
);
    return Drop;
}
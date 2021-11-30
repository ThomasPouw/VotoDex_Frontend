import React from "react";
import axios from "axios";

export function Editor_Send(DropDownReferences){
    let Product_Name = document.getElementById("Product_Name_TXT_Editor").value;
    let Company_Name = document.getElementById("Company_Name_TXT_Editor").value;
    let Description_LongText = document.getElementById("Description_LongText").value;
    console.log("Description_LongText "+ Description_LongText);
    console.log(document.getElementById("Preview_Picture"));
    let Picture_Data = document.getElementById("Preview_Picture").getAttribute("src");
    console.log("Picture_Data"+ Picture_Data);
    console.log(document.getElementById("DropDown_Editor_Category"));
    let Category_Value = DropDownReferences[0].current.state.value;
    console.log(Category_Value);
    console.log(document.getElementById("SubCategory_Editor"));
    let SubCategory_Value_Array = DropDownReferences[1].current.state.value;
    console.log("SubCategory_Value_Array "+ SubCategory_Value_Array);
    let AgeRating_Value_Array = DropDownReferences[2].current.state.value;
    console.log("AgeRating_Value_Array "+ AgeRating_Value_Array);
    let Picture = DropDownReferences[3].current.files[0];


    console.log(Picture);
    if(EmptyCheck(Product_Name, Company_Name, Description_LongText, Picture, Category_Value, SubCategory_Value_Array, AgeRating_Value_Array)){
        console.log("Huge Succes");
        let fd = new FormData();
        fd.append('Product_Name', Product_Name);
        fd.append('Company_Name', Product_Name);
        fd.append('Description', Description_LongText);
        fd.append('Category', Category_Value);
        fd.append('SubCategory', SubCategory_Value_Array);
        fd.append('AgeRating', AgeRating_Value_Array);
        fd.append('image', Picture, Picture.name);
        console.log(fd)
        axios.post("http://localhost:2001/api/v1/Product/Add", {
            fd}).then(
                result => {
                    alert(result.data);}
        ).catch(function (error) {
            console.log(error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response);
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    }
}
function EmptyCheck(Product, Company, Description, Picture, Category, SubCategory, AgeRating){
    let NotEmpty = true;
    if(Product == ""){
        NotEmpty = false;
        alert("Please enter a product name");
    }
    if(Company == ""){
        NotEmpty = false;
        alert("Please enter a company name");
    }
    if(Description == ""){
        NotEmpty = false;
        alert("Please enter a Description");
    }
    if(Picture == ""){
        NotEmpty = false;
        alert("Please enter a Picture");
    }
    if(Category.length == 0 || Category == ""){
        NotEmpty = false;
        alert("Please enter a Category");
    }
    if(SubCategory.length == 0 || SubCategory == ""){
        NotEmpty = false;
        alert("Please enter one or more SubCategories");
    }
    if(AgeRating.length == 0 || AgeRating == ""){
        NotEmpty = false;
        alert("Please enter one or more AgeRatings");
    }
    return NotEmpty
}
function GetImage(event){
    return event.target.files[0]
}

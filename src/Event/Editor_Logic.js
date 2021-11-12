import React from "react";
import axios from "axios";

export function Editor_Send(){
    console.log(document.getElementById("Product_Name_TXT_Editor"));
    let Product_Name = document.getElementById("Product_Name_TXT_Editor").value;
    console.log("Product_Name "+ Product_Name);
    console.log(document.getElementById("Company_Name_TXT_Editor"));
    let Company_Name = document.getElementById("Company_Name_TXT_Editor").value;
    console.log("Company_Name "+ Company_Name);
    console.log(document.getElementById("Description_LongText"));
    let Description_LongText = document.getElementById("Description_LongText").value;
    console.log("Description_LongText "+ Description_LongText);
    console.log(document.getElementById("Preview_Picture"));
    let Picture_Data = document.getElementById("Preview_Picture").getAttribute("src");
    console.log("Picture_Data"+ Picture_Data);
    console.log(document.getElementById("DropDown_Editor_Category"));
    let Category_Value = localStorage.getItem("Editor_Category")
    console.log(Category_Value);
    console.log(document.getElementById("SubCategory_Editor"));
    let SubCategory_Value_Array = localStorage.getItem("Editor_SubCategory");
    console.log("SubCategory_Value_Array "+ SubCategory_Value_Array);
    console.log(document.getElementById("DropDown_Editor_AgeRating"));
    let AgeRating_Value_Array = localStorage.getItem("Editor_AgeRating");
    console.log("AgeRating_Value_Array "+ AgeRating_Value_Array);
    if(EmptyCheck(Product_Name, Company_Name, Description_LongText, Picture_Data, Category_Value, SubCategory_Value_Array, AgeRating_Value_Array)){
        console.log("Huge Succes");
        const imageData = new FormData();
        imageData.append('Picture', Picture_Data);
        console.log(imageData)
        axios.post("http://localhost:8080/api/v1/Product/"+Product_Name+"/"+Company_Name+"/"+Description_LongText+"/"+imageData+"/"+Category_Value+"/"+SubCategory_Value_Array+"/"+AgeRating_Value_Array).then(
            result => {
                alert(result.data);
            }
        )
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

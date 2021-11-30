import {Component} from "react";
import axios from "axios";
import {Button} from "@mui/material";

let PrevProduct = "";
let PrevCompany = "";
let PrevCategory = "";
let PrevSubCategory = "";
let PrevAgeRating = "";
let PrevAdultRating = "";
export default class Search_Result extends Component{
    constructor(props) {
        super(props);
        this.state ={
            refs: []
        }
        this.state.refs = this.props.Refs;
    }
    componentDidMount() {
        setInterval(() => { Search_Find()
            const Product = document.getElementById().value;
            const Company = document.getElementById().value;
            const AdultRated = document.getElementById().value;
            const Category = this.state.refs[0].current.target.value;
            const SubCategory = this.state.refs[1].current.target.value;
            const AgeRating = this.state.refs[2].current.target.value;
            if(Product !== PrevProduct || Company !== PrevCompany || Category !== PrevCategory || SubCategory !== PrevSubCategory || AgeRating !== PrevAgeRating|| AdultRated !== PrevAdultRating){
                PrevProduct = Product;
                PrevCompany = Company;
                PrevCategory = Category;
                PrevSubCategory = SubCategory;
                PrevAgeRating = AgeRating;
                PrevAdultRating = AdultRated;
                const Search = Search_Find.bind(this);
                Search(Product, Company, Category, SubCategory, AgeRating, AdultRated)
            }
        }, 1000);
    }
}
function Search_Find(Product, Company, Category, SubCategory, AgeRating, AdultRated) {
    axios.get('http://localhost:8080/api/v1/Search/', {params: {Product_Name: Product, Company_Name: Company, Category: Category, SubCategory: SubCategory, AgeRating: AgeRating, AdultRated: AdultRated}}).then(result => {
        Fill_Cards(result)
    })
}
function Fill_Cards(result){
    let card = [];
    for (let i = 0; i < result.data; i++){
        card.push(<div>
            <div className={"Card_Image"} datasrc={result.data[i][0]}/>
            <p>result.data[i][1]</p>
            <div id={"Card_Search"}>
                {Add_Remove(result.data[i][6])}
            </div>
        </div>)
    }
}
function Add_Remove(ID){
    if(ID == null){
        return(<Button variant={"contained"} >Add Product to Wishlist</Button>)
    }
    return(<Button variant={"contained"}>Remove Product to Wishlist</Button>)
}

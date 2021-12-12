import {Component} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export class ProductTable extends Component{
    constructor(props) {
        super(props);
        this.Company = this.props.Company;
        this.AgeRating = this.props.AgeRating;
        this.Adult = this.props.Adult;
    }
    render(){
        return(
            <>
            <TableContainer component={Paper}>
                <TableBody sx={{ minWidth: "fit-content", width: "fit-content"}} aria-label="simple table">
                    <TableRow>
                        <TableCell style={{backgroundColor:"gray"}}>Company&nbsp;</TableCell>
                        <TableCell>{this.Company}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{backgroundColor:"gray"}}>Age Rating&nbsp;</TableCell>
                        {this.AgeRating.map((row) => (
                            <TableRow>
                                <TableCell style={{backgroundColor: "#c2c0c0"}} >{row.Region}&nbsp;</TableCell>
                                <TableCell>{row.Age}&nbsp;</TableCell>
                            </TableRow>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell style={{backgroundColor:"gray"}}>Adult Rated&nbsp;</TableCell>
                        <TableCell>{this.Adult}</TableCell>
                    </TableRow>
                    </TableBody>
            </TableContainer>
                </>
        )
    }
}
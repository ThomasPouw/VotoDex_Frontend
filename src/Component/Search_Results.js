import react from 'react';
import render from 'react-dom';
import axios from 'axios';
export default class Search_Result extends React.Component{


    render(){
        return(
            <div className="Search_Results" id="Search_Results" >
                {this.ResultFinder}
            </div>
            )
    }
    ResultFinder = {
        axios.get("http://localhost:8080/api/v1/Options/Products/").then(result =>{
            const CleanResults = [];
            if(result.data[0] != null){
                this.RawResults = results.data
                this.state.result = RawResults;
                for (let i = 1; i <= RawResults.length; index++) {
                    CleanResults.push(
                        <div className='Wishlist_Container' id={"Wishlist_C" + index} data-id= {RawResults[i][0]} onClick={(e) => this.Redirect_Display}>
                            <img src={RawResults[i][1]} alt='Logo' />
                            <p>{RawResults[i][2]}</p>
                            <p>{RawResults[i][3]}</p>
                            <p>{RawResults[i][4]}</p>
                        </div>);

                }
                render(){
                    return CleanResults;
                }

            }
            else
            {
                alert("Something went wrong!<br/> You somehow see");
            }
        });
    }
    Redirect_Display = (event) => {
        event.currentTarget.dataset.id
        window.location.href = window.location.origin+"/Products/"+event.currentTarget.dataset.id;
    }
}
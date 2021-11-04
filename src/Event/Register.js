import axios from "axios";
import { browserHistory } from 'react-router';

export function Checkregister_User()
{
    if(document.getElementById("Register_Password").value == document.getElementById("Register_ConfirmPassword").value && document.getElementById("Register_Password").value != "") {
        if (validateEmail()) {
            axios.get('http://localhost:8080/api/v1/Register/' + document.getElementById("Register_UserName").value + '/' + document.getElementById("Register_Password").value + '/' + document.getElementById("Register_Email").value + '/' + document.getElementById("Register_DateBirth").value).then(result => {
                try {
                    if (result.data[2] == "Below13") {
                        alert("We are sorry to announce that you cant make an account yet. Please be 13 years or older.");
                    } else if (result.data[2] == "ErrorRegisterDatabase") {
                        alert("We dont know what went wrong... Sorry for the inconvenience.");
                    } else {
                        alert("User ID: " + result.data[0] + " User name: " + result.data[1] + " Role: " + result.data[2]);
                        window.location.href = window.location.origin + "/" + result.data[2];
                    }
                } catch (error) {
                    alert(error);
                }
            });
        } else {
            alert("Please enter a valid Email adress");
        }
    }
    else{alert("Please type the password correctly this time.")}
}
function validate(email) { //fix this regex.
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateEmail() {
    const email = document.getElementById("Register_Email").value;
    return true; //validate(email)
}

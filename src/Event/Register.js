import axios from "axios";
import { browserHistory } from 'react-router';

export function Checkregister_User()
    {
        if(document.getElementById("Register_Password").value == document.getElementById("Register_ConfirmPassword").value && document.getElementById("Register_Password").value != "")
        {
            if(validateEmail())
            {
                if(/*Date(document.getElementById("Register_DateBirth").value) <= (new Date().setFullYear(new Date().getFullYear() - 13).toString())&& */document.getElementById("Register_DateBirth").value != "")
                {
                    
                        axios.get('http://localhost:8080/api/v1/Register/'+document.getElementById("Register_UserName").value+'/'+document.getElementById("Register_Password").value+'/'+document.getElementById("Register_Email").value+'/'+document.getElementById("Register_DateBirth").value).then(result =>
                        {
                            try
                            {
                                alert("User ID: "+ result.data[0]+ " User name: "+ result.data[1]+ " Role: " +result.data[2]);
                                window.location.href = window.location.origin+"/Search";
                            }
                            catch(error) {
                                alert(error);
                            }
                        });
                }
                else
                {
                    alert("Please be over 13 years old.");
                }
            }
            else
            {
                alert("Please enter a valid Email adress");
            }
        }
        else
        {
            alert("Please type the password correctly this time.")
        }
        console.log("Hello!");
        console.log(new Date().setFullYear(new Date().getFullYear() - 13));
        console.log(new Date().setFullYear(new Date().getFullYear()));
        console.log(new Date().setFullYear(new Date(new Date().getFullYear())).toString());
        console.log(document.getElementById("Register_DateBirth").value );
        console.log(new Date(document.getElementById("Register_DateBirth").value) );
    }
    function validate(email) { //fix this regex.
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateEmail() {
        const email = document.getElementById("Register_Email").value;
        return true; //validate(email)
    }

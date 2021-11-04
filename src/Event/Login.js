import axios from "axios";
export function LoginAttempt()
{
    try{
        if(document.getElementById("Login_UserName") != null){
            if(document.getElementById("Login_UserName") != null){
                axios.get('http://localhost:8080/api/v1/Login/'+document.getElementById("Login_UserName").value+'/'+document.getElementById("Login_Password").value).then(result =>
                {
                    try
                    {
                        alert("User ID: "+ result.data[0]+ " User name: "+ result.data[1]+ " Role: " +result.data[2]);
                        window.location.href = window.location.origin+"/"+result.data[2];
                    }
                    catch(error) {
                        alert(error);
                    }
                });
            }
        }
    }
    catch(error){
        console.log(error);
    }
    
}

    export function Checkregister()
    {
        console.log("Hello!");
        if(document.getElementById("Register_Password").innerText !== document.getElementById("Register_ConfirmPassword").innerText)
        {
            alert("Please type the password correctly this time.")
        }
        else {
            if(Date(document.getElementById("Register_DateBirth").value) <= new Date().setFullYear(new Date().getFullYear() - 13))
            {
                alert("Please be over 13 years old.");
            }
            else
            {
                console.log(Date(document.getElementById("Register_DateBirth").value) );
                console.log("Hello!");
            }
            console.log("Hello!");
            console.log(new Date().setFullYear(new Date().getFullYear() - 13));
            console.log(new Date().setFullYear(new Date().getFullYear()));
            console.log(new Date().setFullYear(new Date(new Date().getFullYear())));
            console.log(document.getElementById("Register_DateBirth").value );
        }
    }
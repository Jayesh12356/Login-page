function Login() 
{ 
    var username=document.login.username.value;
    var password=document.login.password.value; 
    if (username==null || username=="") 
    { 
        alert("User ID can't be blank");
        return false;
    }
    else if(password.length<3) 
    { 
        alert("Password can't be less then 3 characters");
        return false;
    }
    else if(password.length>10) 
    { 
        alert("Password can't be more then 10 characters");
        return false;
    }
    else if (password==null || password=="") 
    { 
        alert("Password can't be blank");
        return false;
    }
    else if(username=="Jayesh" && password=="Koli")
    { 
        alert("Login Succesfully");
        return false;
    }
    else
    { 
        alert("Please check your credentials")
    }
 }
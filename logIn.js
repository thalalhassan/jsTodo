
function signIn(){
    var uName = document.forms["logIn"]["uName"].value;
    var pwd = document.forms["logIn"]["pwd"].value;

   
    if(uName != "admin"){
        alert("User doesn't exist...");
        return false;
    }
    else if(uName == "admin" && pwd == "12345"){
        alert("Successfully Logged In");
        return true;
    }

    else{
        alert("Incorrect Username or Password (username and password are case sensitive)");
        return false;
    }
}


function notLogged(){
    alert("Your are  not logged in.. Please LogIn ..");
}


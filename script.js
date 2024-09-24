function validateData(){
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var password = document.getElementById("pass");
    var conpass = document.getElementById("conpsdd");

    if(fname.value == ""){
        alert("First name must be filled out");
        return false;
    }else if(lname.value == ""){
        alert("Last name must be filled out");
        return false;
    }else if(!email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com");
    }else if(password.value.length < 5){
        alert("Password must be atleast 5 characters");
    }else if(password.value != conpass.value){
        alert("Confirm Password must be the same as Password");
    }

}
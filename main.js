
var email = document.getElementById("email");
var password = document.getElementById("password");
var loginbtn = document.getElementById("login-button");
var form = document.getElementById("form-container");

// ('click', VerifyPassword)

loginbtn.addEventListener("click",function () {

    if(email.value.match(UserEmail) && password.value.match(UserPssword)) {

        alert('Log in Successful');
    }else if (email.value != UserEmail) {

        alert('Incorrect Email')
    }else if (password.value != UserPssword){

        alert('Incorrect Password')
    }

}
);



var UserEmail = ["harito@gmail.com"]
var UserPssword = ["code"]


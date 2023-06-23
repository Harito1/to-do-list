// // LOGIN FORM

var EmailInput = document.getElementById("email");
var PasswordInput = document.getElementById("password");
var loginbtn = document.getElementById("login-button");

// // Get all sign up form elements 

var SignUpbtn = document.querySelector('#signup-button');
var NameInput = document.querySelector('#name');
var lastNameInput = document.querySelector('#lastname');
var SignupPassword = document.querySelector('#SignupPassword');
var emailInputSignup = document.querySelector('#SignupEmail')

// LOGIN //
loginbtn.addEventListener("click", Login);

// SIGN UP //
SignUpbtn.addEventListener("click", SignUp);



// /**
//  * This function verifies if the users Email and password input match the users saved
//  * Email and password, if not it will alert incorrect email/password
//  *  or login successfull or incorrect details if both inputs dont match.
//  */

function Login() {
  
  SwitchtoLOGIN()

  // find out if the user exists
  // const dbUser =  GetUsers(users)

  // console.log(dbUser)

  // // if the user does not exist
  // if (dbUser === null){
  //   alert('Enter valid email')
  //   return
  // }

  // check password
  if (dbUser.password === PasswordInput.value) {
    // make form card disapear
    var formCard = document.querySelector('.card-contaner');
    formCard.style.display = "none"

    // welcome message
    var welcomeText = document.querySelector('#welcome-text')
    welcomeText.innerHTML = 'Welcome back ' + dbUser.name +' '+ dbUser.lastName

  }else {

    alert('Wrong password')
  }
  
  console.log(dbUser.email);
  document.querySelector(".login-form").reset();

}

// /**
//  * this function gets all users and stores them into a dbUser(database) variable
//  * only if the email matches
//  * @param {Array} users 
//  */
// function GetUsers(users) {

//   var dbUser = null

// for (let i = 0; i < users.length; i++) {

//   var user = users[i]

//   // get the user by matching their email address

//   if (user.email === EmailInput.value) {

//     dbUser = user

//     break;
//   }
// }

// return dbUser
  
// }

// /**
//  * this function gets the login form if the user wants to login
//  */
function SwitchtoLOGIN() {

  var SignUpForm = document.querySelector('.Sign-up-form')
  SignUpForm.style.display = "none"

  var login = document.querySelector('.login-form')
  login.style.display = "inline"

  const EmailInputField = document.querySelector('#email')
  EmailInputField.style.display = "inline"

  const PasswordInputField = document.querySelector('#password')
  PasswordInputField.style.display = "inline"
  
}

// /**
//  * this function gets the sign up form if the user wants to  sign up
//  */
function SwitchtoSignUp() {

  var login = document.querySelector('.login-form')
  login.style.display = "none"

  var SignUpForm = document.querySelector('.Sign-up-form')
  SignUpForm.style.display = "inline"


  // const nameInputField = document.querySelector('#name')
  // nameInputField.style.display = "inline"

  // const lastnameInputField = document.querySelector('#lastname')
  // lastnameInputField.style.display = "inline"

  // const emailInputField = document.querySelector('#SignupEmail')
  // emailInputField.style.display = "inline"

  // const PasswordInputField = document.querySelector('#SignupPassword')
  // PasswordInputField.style.display = "inline"
  
}

// /**
//  * this function captures the values the user uses to sign up, and adds the values
//  * into the dbusers variable
//  */

function SignUp() {

  SwitchtoSignUp()

  addData()
    
document.querySelector(".Sign-up-form").reset();

}


/**
 * this function adds sign up data to the local storage
 */
function addData() {

  // Get all input values

  var firstname = NameInput.value;
  var lastName = lastNameInput.value;
  var Email = emailInputSignup.value;
  var password = SignupPassword.value;


  // check that no value is empty !!!
  
  if (firstname == '') {
      alert('Enter name')
      
    }
    if (lastName == '') {
      alert('Enter last name')
      
    }
    if (Email == '') {
      alert('Enter email')
      
    }
    if (password == '') {
      alert('Enter password')
      
    }

  var newUser = [{
    Firstname: firstname, 
    LastName: lastName, 
    EmaiL: Email, 
    Password: password 
}]


  // var user = localStorage.setItem('user', JSON.stringify(newUser))

 
  var userss = []

  var storage = localStorage.getItem('user');
  
  if (storage) {
    // covert the string to an object
     userss = JSON.parse(storage)
  } 
  else {
    // no users found so create a new array
    userss.push(storage)
  }

  

   localStorage.setItem('user', JSON.stringify(newUser));
   console.log('saving users', userss)
   

}




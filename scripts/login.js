// // LOGIN FORM

setTimeout(() => {
  console.log(this)
}, 1000)

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

var users = []
var userID = new Date().toISOString();

// /**
//  * This function verifies if the users Email and password input match the users saved
//  * Email and password, if not it will alert incorrect email/password
//  *  or login successfull or incorrect details if both inputs dont match.
//  */
function Login(users) { 
  SwitchtoLOGIN()

    const usersString = localStorage.getItem('users')
        if (usersString) {
          users = JSON.parse(usersString)
        } 
      
      for (let i = 0; i < users.length; i++) {
          var user = users[i]

          var correctEmail = EmailInput.value === users[i].email;
          var correctPassword = PasswordInput.value === users[i].password;
          var correctDetails = correctEmail && correctPassword;
        
            if (correctDetails) {
              setPage('taskPage')
              sessionStorage.setItem('current-user', JSON.stringify(user))
              alert('welcome back ' + user.firstname)
              renderTasks()
              break
            }
       }
          if (correctEmail == false) {
            alert('wrong details')
            return
          }
    document.querySelector(".login-form").reset();
}


 /**
  * this function gets the login form if the user wants to login
  */
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

  var task = document.querySelector('.signup-page')
  task.style.display = 'block'

  var email = document.querySelector('#SignupPassword')
  email.style.display = "inline"
  var password = document.querySelector('#SignupEmail')
  password.style.display = "inline"


  var SignUpForm = document.querySelector('.Sign-up-form')
  SignUpForm.style.display = "inline"

  
}

// /**
//  * this function captures the values the user uses to sign up, and adds the values
//  * into the dbusers variable
//  */
function SignUp() {

  SwitchtoSignUp()

  // validate fields
  const error = validateSignUpFields()
  if (error) {
    alert(error)
    return
  }
  // validate emails
  const valid = ValidateEmail()
  if (!valid) {
    alert('user already exits')
    return
  }

  SaveUsertolocalStorage()
}

// check if input fields are empty and alert the user to fill in
function validateSignUpFields() {
  if ( NameInput.value == '') {
   return 'Enter name'
    
  }
  if (lastNameInput.value == '') {
    return 'Enter last name'
    
  }
  if (emailInputSignup.value == '') {
    return 'Enter email'
    
  }
  if (SignupPassword.value == '') {
    return 'Enter password'
    
  }

  return ''
}

function SaveUsertolocalStorage(users) { 
	
  var newUser = {
		firstname : NameInput.value,
		lastName : lastNameInput.value,
		email : emailInputSignup.value,
		password : SignupPassword.value,
    Id : new Date().toISOString()
  }

  const usersString = localStorage.getItem('users')
  console.log('users id :',newUser.Id);
	// console.log('new user :', newUser)

  if (usersString === null) {
     users = [newUser]
  } else {
     users = JSON.parse(usersString)
		 users.push(newUser)
  }

	console.log('saving users', users)
  localStorage.setItem('users', JSON.stringify(users));
	clearSignUpForm()
	alert('user saved')

}

/**
 * this function gets the current users id from the database session storage
 * @returns currentUser.Id
 */
function CurrentUserId() {
    const usersStrg = sessionStorage.getItem('current-user')
    var currentUser = JSON.parse(usersStrg)
    var currentUserid = currentUser.Id
    return currentUserid
}

/**
 * clears sign up form
 */
function clearSignUpForm() {
	document.querySelector(".Sign-up-form").reset();
}

//check if the email used to sign up has already been stored in the local storage
function ValidateEmail() {
	let valid = true
  let _users = []

	// fetch users from local storage
  const usersString = localStorage.getItem('users')
  if (usersString) {
    _users = JSON.parse(usersString)
  } 

	// check that we dont have a user with the same email address
  for (let i = 0; i < _users.length; i++) {
    var userEmail = _users[i].email
    if (emailInputSignup.value === userEmail) {
        valid = false
				break
    }
  }

	return valid
}


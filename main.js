// LOGIN FORM

var EmailInput = document.getElementById("email");
var PasswordInput = document.getElementById("password");
var loginbtn = document.getElementById("login-button");

// Get all sign up form elements 

var SignUpbtn = document.querySelector('#signup-button');
var NameInput = document.querySelector('#name');
var lastNameInput = document.querySelector('#lastname');
var ageInput = document.querySelector('#Age');
var emailInput = document.querySelector('#SignupEmail')


loginbtn.addEventListener("click", GetloginForm, verifyUserDetails);
SignUpbtn.addEventListener("click", GetSignInForm)
SignUpbtn.addEventListener("click", SignUp)

const users = [
    {
      name: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      address: { street: '123 Main St', city: 'New York', country: 'USA' },
      hobbies: ['reading', 'cooking', 'sports'],
      friends: { name: 'Jane', lastName: 'Smith', age: 28 },
      isActive: true,
      role: 'user',
      registrationDate: '2023-01-15',
      languages: ['English', 'Spanish', 'French'],
      education: { degree: "Bachelor's", major: 'Computer Science' },
      password: 'johnny'
    },
    {
      name: 'Alice',
      lastName: 'Johnson',
      age: 25,
      email: 'alice.johnson@example.com',
      address: { street: '456 Elm St', city: 'London', country: 'UK' },
      hobbies: ['painting', 'traveling', 'photography'],
      friends: { name: 'Bob', lastName: 'Anderson', age: 27 },
      isActive: false,
      role: 'user',
      registrationDate: '2023-02-10',
      languages: ['English', 'German'],
      education: { degree: "Master's", major: 'Business Administration' },
      password: 'ally'
    },
    {
      name: 'Sarah',
      lastName: 'Brown',
      age: 35,
      email: 'sarah.brown@example.com',
      address: { street: '789 Oak St', city: 'Sydney', country: 'Australia' },
      hobbies: ['guitar', 'hiking'],
      friends: { name: 'Michael', lastName: 'Smith', age: 32 },
      isActive: true,
      role: 'user',
      registrationDate: '2023-03-05',
      languages: ['English'],
      education: { degree: "Bachelor's", major: 'Psychology' },
      password: 'sary'
    },
    {
      name: 'Tim',
      lastName: 'Doe',
      age: 30,
      email: 'tim.doe@example.com',
      address: { street: '13 Main St', city: 'New York', country: 'USA' },
      hobbies: ['reading', 'gaming', 'soccer'],
      friends: { name: 'Jiendor', lastName: 'Manjate', age: 28 },
      isActive: true,
      role: 'admin',
      registrationDate: '2023-01-15',
      languages: ['English', 'Spanish', 'French'],
      education: { degree: "Bachelor's", major: 'Computer Science' },
      password: 'timmy'
    },
    {
      name: 'Alex',
      lastName: 'Henry',
      age: 27,
      email: 'Alex.henry@example.com',
      address: { street: '45 Ben St', city: 'London', country: 'South Africa' },
      hobbies: ['painting', 'traveling', 'gaming'],
      friends: { name: 'Jiendor', lastName: 'Manjate', age: 27 },
      isActive: false,
      role: 'user',
      registrationDate: '2023-02-10',
      languages: ['English', 'German'],
      education: { degree: "Master's", major: 'Business Administration' },
      password: 'lexy'
    },
    {
      name: 'Celeste',
      lastName: 'Brown',
      age: 35,
      email: 'Celeste.brown@example.com',
      address: { street: '67 Geldenhuis Road', city: 'Germiston', country: 'South Africa' },
      hobbies: ['guitar', 'hiking', 'soccer'],
      friends: { name: 'Jiendor', lastName: 'Manjate', age: 32 },
      isActive: true,
      role: 'user',
      registrationDate: '2023-03-05',
      languages: ['English'],
      education: { degree: 'N/A', major: 'N/A' },
      password: 'lestee'
    }
  ]

/**
 * This function verifies if the users Email and password input match the users saved
 * Email and password, if not it will alert incorrect email/password
 *  or login successfull or incorrect details if both inputs dont match.
 */

function verifyUserDetails() {
  

  // find out if the user exists
  const dbUser =  GetUsers(users)

  console.log(dbUser)

  // if the user does not exist
  if (dbUser === null){

    alert('User does not exit')

  }

  // check password
  if (dbUser.password === PasswordInput.value) {

    
    // make form card disapear

    var formCard = document.querySelector('.login-card-contaner');
    formCard.style.display = "none"

    // welcome message
    var welcomeText = document.querySelector('#welcome-text')
    welcomeText.innerHTML = 'Welcome back ' + dbUser.name +' '+ dbUser.lastName

  }else {

    alert('Wrong password')
  }

}

/**
 * this function gets all users and stores them into a dbUser(database) variable
 * only if the email matches
 * @param {Array} users 
 */
function GetUsers(users) {

  var dbUser = null

for (let i = 0; i < users.length; i++) {

  var user = users[i]

  // get the user by matching their email address

  if (user.email === EmailInput.value) {

    dbUser = user

    break;
  }
 
}

return dbUser
  
}

/**
 * this function gets the login form if the user wants to login
 */
function GetloginForm() {

  var SignUpForm = document.querySelector('.Sign-up-form')
  SignUpForm.style.display = "none"

  const EmailInputField = document.querySelector('#email')
  EmailInputField.style.display = "inline"

  const PasswordInputField = document.querySelector('#password')
  PasswordInputField.style.display = "inline"
  
}

/**
 * this function gets the sign up form if the user wants to  sign up
 */
function GetSignInForm() {

  var SignUpForm = document.querySelector('.Sign-up-form')
  SignUpForm.style.display = "inline"
 

  const EmailInputField = document.querySelector('#email')
  EmailInputField.style.display = "none"

  const PasswordInputField = document.querySelector('#password')
  PasswordInputField.style.display = "none"
  
}

/**
 * this function captures the values the user uses to sign up, and adds the values
 * into the dbusers variable
 */

function SignUp() {

  // Get all input values

  const name = NameInput.value;
  const email = emailInput.value;
  const lastname = lastNameInput.value;
  const age = ageInput.value;

  // push values into users array

  users.push({name, lastname, email, age})

  console.log(users);
  
}


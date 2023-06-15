
var email = document.getElementById("email");
var password = document.getElementById("password");
var loginbtn = document.getElementById("login-button");


loginbtn.addEventListener("click", verifyUserDetails)

/**
 * This function verifies if the users Email and password input match the users saved
 * Email and password, if not it will alert incorrect email/password
 *  or login successfull or incorrect details if both inputs dont match.
 */

function verifyUserDetails() {

    const valid = email.value === ValidUserEmail && password.value === ValidUserPassword;

    if (valid) {
        alert('login Successful');
        return
    }

    if (valid !== ValidUserEmail && valid !== ValidUserPassword) {

        alert('Incorrect details')
        return
    }
    if (email.value !== ValidUserEmail) {
        alert('Incorrect email');

    }
    else if (password.value !== ValidUserPassword) {

        alert('Incorrect Password');

    }
}



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

console.log(users[age]);


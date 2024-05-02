console.log(
  "======================= Form Validation Homework ======================="
);
//------------- Error display container cached -------------//
let errorDisplay = document.getElementById("errorDisplay");
//------------ Registration form elements cached ------------//
const registrationForm = document.getElementById("registration");
const regUserName = registrationForm.elements["username"];
const regUserEmail = registrationForm.elements["email"];
const regUserPassword = registrationForm.elements["password"];
const checkPassword = registrationForm.elements["passwordCheck"];
const acceptTerms = registrationForm.elements["terms"];

//------------ Event Listner for registration form ------------//
registrationForm.addEventListener("submit", registrationFormSubmission);

function registrationFormSubmission(e) {
  e.preventDefault();
  console.log(e);
  console.log(acceptTerms.value);
  console.log(regUserName.value);
}
//=============================================================//

//=============================================================//
// Retrieving password from local storage
const storedPassword = localStorage.getItem("password");
//---------------- Login form elements cached ----------------//
const loginForm = document.getElementById("login");
const loginUserName = loginForm.elements["username"];
const loginUserPassword = loginForm.elements["password"];
const keepMeLogin = loginForm.elements["persist"];
//--------------- Event Listner for login form ---------------//
loginForm.addEventListener("submit", loginFormSubmission);

function loginFormSubmission(e) {
  e.preventDefault();
  const userNameVal = validateLoginUsername();
  const userPasswordVal = validateLoginPassword();

  if (userNameVal === false) {
    e.preventDefault();
    e.returnValue = false;
    return false;
  }

  if (userPasswordVal === false) {
    e.preventDefault();
    e.returnValue = false;
    return false;
  }
  console.log(keepMeLogin.value);
  const pTag = document.createElement("p");
  pTag.style.color = "red";
  pTag.textContent = "You have succesfully Logged in";
  errorDisplay.appendChild(pTag);

  //===================================================//

  //===================================================//
  //------------ Login Validaiton Function ------------//
  // Validation function for the username
  function validateLoginUsername() {
    let userNameValue = loginUserName.value.toLowerCase();
    const storedPassword = "The Stored Password";
    if (userNameValue === "") {
      const pTag = document.createElement("p");
      pTag.style.color = "red";
      pTag.textContent = "Username Feild can not be empty";
      errorDisplay.appendChild(pTag);
      loginUserName.focus();
      return false;
    }
  }
  // Validation function for the password
  function validateLoginPassword() {
    let userPasswordValue = loginUserPassword.value;
    if (userPasswordValue === "") {
      const pTag = document.createElement("p");
      pTag.style.color = "red";
      pTag.textContent = "Password Feild can not be empty";
      errorDisplay.appendChild(pTag);
      loginUserPassword.focus();
      return false;
    }
    // if (userPasswordValue !== storedPassword) {
    //   loginUserPassword.focus();
    //   const pTag = document.createElement("p");
    //   pTag.style.color = "red";
    //   pTag.textContent = "Incorrect Password";
    //   errorDisplay.appendChild(pTag);
    //   return false;
    // }
  }
}

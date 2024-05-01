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
//---------------- Login form elements cached ----------------//
const loginForm = document.getElementById("login");
const loginUserName = loginForm.elements["username"];
const loginUserPassword = loginForm.elements["password"];
const keepMeLogin = loginForm.elements["persist"];

//--------------- Event Listner for login form ---------------//
loginForm.addEventListener("submit", loginFormSubmission);

function loginFormSubmission(e) {
  e.preventDefault();
  console.log(e);
  console.log(keepMeLogin.value);
  console.log(loginUserName.value.toLowerCase());
}

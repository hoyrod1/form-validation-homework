console.log(
  "======================= Form Validation Homework ======================="
);
//------------ Registration form elements cached ------------//
const registrationForm = document.getElementById("registration");
const regUserName = registrationForm.elements["username"];
const regUserEmail = registrationForm.elements["email"];
const regUserPassword = registrationForm.elements["password"];
const checkPassword = registrationForm.elements["passwordCheck"];

//------------ Event Listner for registration form ------------//
registrationForm.addEventListener("submit", registrationFormSubmission);

function registrationFormSubmission(e) {
  e.preventDefault();
  console.log(e);
  console.log(regUserName.value);
}
//=============================================================//
//---------------- Login form elements cached ----------------//
const loginForm = document.getElementById("login");

//------------ Event Listner for registration form ------------//
loginForm.addEventListener("submit", loginFormSubmission);
const loginUserName = loginForm.elements["username"];
const loginUserPassword = loginForm.elements["password"];

function loginFormSubmission(e) {
  e.preventDefault();
  console.log(e);
}

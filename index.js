console.log(
  "======================= Form Validation Homework ======================="
);
//=============================================================//
//================ Registration Form Validation ===============//
//--------------- Error display container cached --------------//
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
//=================== Login Form Validation ===================//
// Caching the username from local storage
const storedUserName = localStorage.getItem("username");
// Caching the password from local storage
const storedPassword = localStorage.getItem("password");
//---------------- Body element cached cached ----------------//
const bodyTag = document.body;
const formContainer = document.querySelector("div");
console.log(formContainer);
//---------------- Login form elements cached ----------------//
const loginForm = document.getElementById("login");
const loginUserName = loginForm.elements["username"];
const loginUserPassword = loginForm.elements["password"];
const keepMeLogin = loginForm.elements["persist"];
//--------------- Event Listner for login form ---------------//
loginForm.addEventListener("submit", loginFormSubmission);

function loginFormSubmission(e) {
  e.preventDefault();

  const successMessage = "You have succesfully Logged in";
  const sessionPersisted = "You will stay Logged in";
  const userNameVal = validateLoginUsername();
  const userPasswordVal = validateLoginPassword();
  let userKeepMeLoggedIn = keepMeLogin.checked;

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
  //------------------ Login Success Actions ------------------//
  const successDiv = document.createElement("div");
  successDiv.style.width = "500px";
  successDiv.style.height = "100px";
  successDiv.style.margin = "15px auto";
  successDiv.style.color = "white";
  successDiv.style.backgroundColor = "orange";
  successDiv.style.border = "2px solid white";
  successDiv.style.borderRadius = "15px";
  bodyTag.insertBefore(successDiv, formContainer);

  const pTag = document.createElement("p");
  pTag.style.textAlign = "center";
  pTag.style.color = "green";
  pTag.textContent = successMessage;
  successDiv.appendChild(pTag);
  loginForm.reset();
  //----------------- Login persistance message ----------------//
  if (userKeepMeLoggedIn === true) {
    const persistTag = document.createElement("p");
    persistTag.style.textAlign = "center";
    persistTag.style.color = "green";
    persistTag.textContent = sessionPersisted;
    successDiv.appendChild(persistTag);
  }
  //============================================================//

  //============================================================//
  //---------------- Login Validaiton Function ----------------//
  // Validation function for the username
  function validateLoginUsername() {
    // Storing the username in lower case
    let userNameValue = loginUserName.value.toLowerCase();

    if (userNameValue === "") {
      const pTag = document.createElement("p");
      pTag.style.color = "red";
      pTag.textContent = "Username Feild can not be empty";
      errorDisplay.appendChild(pTag);
      loginUserName.focus();
      return false;
    }
    // if (userNameValue !== storedUserName) {
    //   loginUserPassword.focus();
    //   const pTag = document.createElement("p");
    //   pTag.style.color = "red";
    //   pTag.textContent = "Username doesn't exist";
    //   errorDisplay.appendChild(pTag);
    //   return false;
    // }
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

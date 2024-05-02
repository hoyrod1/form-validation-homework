console.log("=================== Form Validation Homework ===================");
//=================================================================//
console.log(
  "==================== Registration Validation ===================="
);
//=================================================================//
//================== Registration Form Validation =================//
//----------------- Error display container cached ----------------//
let errorDisplay = document.getElementById("errorDisplay");
//---------------- Registration form elements cached --------------//
const registrationForm = document.getElementById("registration");
const regUserName = registrationForm.elements["username"];
const regUserEmail = registrationForm.elements["email"];
const regUserPassword = registrationForm.elements["password"];
const confirmPassword = registrationForm.elements["passwordCheck"];
const acceptTerms = registrationForm.elements["terms"];

//--------------- Event Listner for registration form ---------------//
registrationForm.addEventListener("submit", registrationFormSubmission);

function registrationFormSubmission(e) {
  e.preventDefault();

  const regUserNameVal = validateRegUsername();
  const userEmailVal = validateRegEmail();
  const userPasswordVal = validateRegPassword();

  if (regUserNameVal === false) {
    e.returnValue = false;
    return false;
  }
  if (userEmailVal === false) {
    e.returnValue = false;
    return false;
  }
  if (userPasswordVal === false) {
    e.returnValue = false;
    return false;
  }

  //---------- Registration Acceptance Validation message -----------//
  if (acceptTerms.checked !== true) {
    const message = "Please accept our terms & conditions";
    registrationErrorMessage(message);
    acceptTerms.focus();
    return false;
  }
  //------------------------------------------------------------------//
  //==================================================================//
  //------------------------------------------------------------------//
  // Prepare Validated input for local storage
  const valUserName = regUserName.value.toLowerCase();
  const valUserEmail = regUserEmail.value.toLowerCase();
  const valUsrPassword = regUserPassword.value;
  console.log(`
  User Data: ${valUserName}
  Email: ${valUserEmail}
  Password: ${valUsrPassword}`);
  /**
   * User Data: hoyrod1
     Email: hoyrod1@aol.com
     Password: April,212004
   */
  // Caching the username from local storage
  const storedUserName = localStorage.getItem("username");
  // Storing the username to local storage
  if (valUserName === storedUserName.toLowerCase()) {
    const message = "Username already exist";
    registrationErrorMessage(message);
    regUserName.focus();
    return false;
  }

  const storingUserName = localStorage.setItem("username", valUserName);
  // Storing the email to local storage
  const storingEmail = localStorage.setItem("email", valUserEmail);
  // Storing the password to local storage
  const storingPassword = localStorage.setItem("password", valUsrPassword);
  registrationForm.reset();
  //------------------------------------------------------------------//
  //==================================================================//
  //---------------- Registration Validaiton Function ----------------//
  // Registration Username Validiation
  function validateRegUsername() {
    const regUserNameVal = regUserName.value.toLowerCase();
    if (regUserNameVal === "") {
      const message = "Username Feild can not be empty";
      registrationErrorMessage(message);
      regUserName.focus();
      return false;
    }

    if (regUserNameVal.length < 4) {
      const message = "The username must be at least four characters long";
      registrationErrorMessage(message);
      regUserName.focus();
      return false;
    }

    const regE = /(.)(?<!1.)(?!.*\1)(.)(?<!3)/;
    let regUserName2Chars = regE.test(regUserNameVal);
    if (!regUserName2Chars) {
      const message =
        "The username must contain at least two unique characters";
      registrationErrorMessage(message);
      regUserName.focus();
      return false;
    }
  }
  //===================================================================/
  // Validation For Registration Email Validiation
  function validateRegEmail() {
    const regUserEmailVal = regUserEmail.value;
    const regE = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let regUserEmailEx = regE.test(regUserEmailVal);
    if (!regUserEmailEx) {
      const message = "The is not a valid email";
      registrationErrorMessage(message);
      regUserEmail.focus();
      return false;
    }
  }
  //===================================================================/
  // Validation function for the Registration password
  function validateRegPassword() {
    const regConfirmPassword = confirmPassword.value;
    const regUserPasswordVal = regUserPassword.value;
    const regE =
      /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{12,32}$/;
    let regUserPasswordEx = regE.test(regUserPasswordVal);
    if (!regUserPasswordEx) {
      const message = "Please make your password stronger";
      registrationErrorMessage(message);
      regUserPassword.focus();
      return false;
    }
    if (regUserPasswordVal !== regConfirmPassword) {
      const message = "Your password do not match";
      registrationErrorMessage(message);
      regUserPassword.focus();
      return false;
    }
    const lowCasePassWord = regUserPasswordVal.toLowerCase();
    const lowCaseUserName = regUserName.value.toLowerCase();
    if (lowCasePassWord.includes(lowCaseUserName)) {
      const message = "Your password can not contain your username";
      registrationErrorMessage(message);
      regUserPassword.focus();
      return false;
    }
    const check4Password = "password";
    if (lowCasePassWord.includes(check4Password.toLowerCase())) {
      const message = "Your password can not contain the word password";
      registrationErrorMessage(message);
      regUserPassword.focus();
      return false;
    }
  }
  //==================================================================//
  //---------------- Function to create error message ----------------//
  function registrationErrorMessage(message) {
    const pTag = document.createElement("p");
    // pTag.style.color = "red";
    pTag.textContent = message;
    pTag.style.textAlign = "center";
    errorDisplay.style.display = "block";
    errorDisplay.style.border = "2px solid #ffab40";
    errorDisplay.style.borderRadius = "10px";
    errorDisplay.appendChild(pTag);
    loginUserName.focus();
  }
  //==================================================================//
}
//===================================================================//
console.log("=================== Login Validation ===================");
//===================================================================//
//=================== Login Form Validation ===================//
//---------------- Body element cached cached ----------------//
const bodyTag = document.body;
const formContainer = document.querySelector("div");
//---------------- Login form elements cached ----------------//
const loginForm = document.getElementById("login");
const loginUserName = loginForm.elements["username"];
const loginUserPassword = loginForm.elements["password"];
const keepMeLogin = loginForm.elements["persist"];
//--------------- Event Listner for login form ---------------//
loginForm.addEventListener("submit", loginFormSubmission);

function loginFormSubmission(e) {
  e.preventDefault();
  // Caching the username from local storage
  const storedUserName = localStorage.getItem("username");
  // Caching the password from local storage
  const storedPassword = localStorage.getItem("password");

  const userNameVal = validateLoginUsername();
  const userPasswordVal = validateLoginPassword();

  if (userNameVal === false) {
    e.returnValue = false;
    return false;
  }

  if (userPasswordVal === false) {
    e.returnValue = false;
    return false;
  }
  //------------------ Login Success Actions ------------------//
  // Keep me logged value cached
  const userKeepMeLoggedIn = keepMeLogin.checked;
  // Success message
  const successMessage = "You have succesfully Logged in";
  // Stay logged in message
  const sessionPersisted = "You will stay Logged in";
  //-----------------------------------------------------------//
  // New div to contain the success message
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
  //==================================================================//
  //------------------- Login Validaiton Function --------------------//

  // Validation function for the login User Name
  function validateLoginUsername() {
    // Storing the username in lower case
    let userNameValue = loginUserName.value.toLowerCase();

    if (userNameValue === "") {
      const message = "Username Feild can not be empty";
      loginErrorMessage(message);
      loginUserName.focus();
      return false;
    }
    if (userNameValue !== storedUserName) {
      const message = "Username doesn't exist";
      loginErrorMessage(message);
      loginUserName.focus();
      return false;
    }
  }

  // Validation function for the login password
  function validateLoginPassword() {
    let userPasswordValue = loginUserPassword.value;
    if (userPasswordValue === "") {
      const message = "Password Feild can not be empty";
      loginErrorMessage(message);
      loginUserPassword.focus();
      return false;
    }
    if (userPasswordValue !== storedPassword) {
      const message = "Incorrect Password";
      loginErrorMessage(message);
      loginUserPassword.focus();
      return false;
    }
  }
  //---------------- Function to create error message ----------------//
  function loginErrorMessage(message) {
    const pTag = document.createElement("p");
    // pTag.style.color = "red";
    pTag.textContent = message;
    pTag.style.textAlign = "center";
    errorDisplay.style.display = "block";
    errorDisplay.style.border = "2px solid #ffab40";
    errorDisplay.style.borderRadius = "10px";
    errorDisplay.appendChild(pTag);
    loginUserName.focus();
  }
  //==================================================================//
}

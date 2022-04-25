/* NOTES AT THE END WITH SOME RULES */

window.onload = function () {
  // AUX VARIABLES
  var inputValues = [];
  var inputLabels = ["Name", "Last name", "ID number", "Birth date", "Phone", "Address", "City", "Zip code", 
  "Email", "Password", "Repeated password"];

  // NAME
  var signupName = document.getElementById("signup-name");
  signupName.addEventListener("blur", validateName);
  signupName.addEventListener("focus", quitSignupNameAlerts);
  var signupNameInlineAlert = document.createElement("p");
  signupNameInlineAlert.classList.add("inline-alerts");

  function validateName() {
    if (signupName.value == "") {
      signupNameInlineAlert.textContent = "Name is a required field";
      signupName.insertAdjacentElement("afterend", signupNameInlineAlert);
    } else if (signupName.value.length < 3) {
      signupNameInlineAlert.textContent = "Name must have at least 3 characters";
      signupName.insertAdjacentElement("afterend", signupNameInlineAlert);
    } else if (hasNumbers(signupName.value)) {
      signupNameInlineAlert.textContent = "Name can't contain a number";
      signupName.insertAdjacentElement("afterend", signupNameInlineAlert);
    } else {
      inputValues[0] = signupName.value;
    }
  }

  function quitSignupNameAlerts() {
    signupNameInlineAlert.remove();
  }

  // LAST NAME
  var signupLastName = document.getElementById("signup-last-name");
  signupLastName.addEventListener("blur", validateSurname);
  signupLastName.addEventListener("focus", quitSignupSurnameAlerts);
  var signupSurnameInlineAlert = document.createElement("p");
  signupSurnameInlineAlert.classList.add("inline-alerts");

  function validateSurname() {
    if (signupLastName.value == "") {
      signupSurnameInlineAlert.textContent = "Last name is a required field";
      signupLastName.insertAdjacentElement("afterend", signupSurnameInlineAlert);
    } else if (signupLastName.value.length < 3) {
      signupSurnameInlineAlert.textContent = "Last name must have at least 3 characters";
      signupLastName.insertAdjacentElement("afterend", signupSurnameInlineAlert);
    } else if (hasNumbers(signupLastName.value)) {
      signupSurnameInlineAlert.textContent = "Last name can't contain a number";
      signupLastName.insertAdjacentElement("afterend", signupSurnameInlineAlert);
    } else {
      inputValues[1] = signupLastName.value;
    }
  }

  function quitSignupSurnameAlerts() {
    signupSurnameInlineAlert.remove();
  }

  // ID NUMBER
  var signupIDNumber = document.getElementById("signup-idn");
  signupIDNumber.addEventListener("blur", validateIDNumber);
  signupIDNumber.addEventListener("focus", quitSignupIDNumberAlerts);
  var signupIDNumberInlineAlert = document.createElement("p");
  signupIDNumberInlineAlert.classList.add("inline-alerts");

  function validateIDNumber() {
    if (signupIDNumber.value == "") {
      signupIDNumberInlineAlert.textContent = "ID Number is a required field";
      signupIDNumber.insertAdjacentElement("afterend", signupIDNumberInlineAlert);
    } else if (signupIDNumber.value.length < 8) {
      signupIDNumberInlineAlert.textContent =
        "ID Number must have at least 8 characters";
      signupIDNumber.insertAdjacentElement("afterend", signupIDNumberInlineAlert);
    } else if (!isOnlyNumbers(signupIDNumber.value)) {
      signupIDNumberInlineAlert.textContent =
        "ID Number can contain only numbers";
      signupIDNumber.insertAdjacentElement("afterend", signupIDNumberInlineAlert);
    } else {
      inputValues[2] = signupIDNumber.value;
    }
  }

  function quitSignupIDNumberAlerts() {
    signupIDNumberInlineAlert.remove();
  }

  // BIRTH
  var signupBirth = document.getElementById("signup-birth-date");
  signupBirth.addEventListener("blur", validateBirth);
  signupBirth.addEventListener("focus", quitSignupBirthAlerts);
  var signupBirthInlineAlert = document.createElement("p");
  signupBirthInlineAlert.classList.add("inline-alerts");

  function validateBirth() {
    if (signupBirth.value == "") {
      signupBirthInlineAlert.textContent = "Birth date is a required field";
      signupBirth.insertAdjacentElement("afterend", signupBirthInlineAlert);
    } else if (!isFullAge(signupBirth.value)) {
      signupBirthInlineAlert.textContent = "You must be +18";
      signupBirth.insertAdjacentElement("afterend", signupBirthInlineAlert);
    } else {
      inputValues[3] = signupBirth.value;
    }
  }

  function quitSignupBirthAlerts() {
    signupBirthInlineAlert.remove();
  }

  // PHONE
  var signupPhone = document.getElementById("signup-phone");
  signupPhone.addEventListener("blur", validatePhone);
  signupPhone.addEventListener("focus", quitSignupPhoneAlerts);
  var signupPhoneInlineAlert = document.createElement("p");
  signupPhoneInlineAlert.classList.add("inline-alerts");

  function validatePhone() {
    if (signupPhone.value == "") {
      signupPhoneInlineAlert.textContent = "Phone is a required field";
      signupPhone.insertAdjacentElement("afterend", signupPhoneInlineAlert);
    } else if (
      (signupPhone.value.length != 10) &&
      !isOnlyNumbers(signupPhone.value)
    ) {
      signupPhoneInlineAlert.textContent = "Phone number must have 10 numeric characters";
      signupPhone.insertAdjacentElement("afterend", signupPhoneInlineAlert);
    } else if (signupPhone.value.length != 10) {
      signupPhoneInlineAlert.textContent = "Phone number must have 10 numeric characters";
      signupPhone.insertAdjacentElement("afterend", signupPhoneInlineAlert);
    } else if (!isOnlyNumbers(signupPhone.value)) {
      signupPhoneInlineAlert.textContent = "Phone number can contain only numbers";
      signupPhone.insertAdjacentElement("afterend", signupPhoneInlineAlert);
    } else {
      inputValues[4] = signupPhone.value;
    }
  }

  function quitSignupPhoneAlerts() {
    signupPhoneInlineAlert.remove();
  }

  // ADDRESS
  var signupAddress = document.getElementById("signup-address");
  signupAddress.addEventListener("blur", validateAddress);
  signupAddress.addEventListener("focus", quitSignupAddressAlerts);
  var signupAddressInlineAlert = document.createElement("p");
  signupAddressInlineAlert.classList.add("inline-alerts");

  function validateAddress() {
    if (signupAddress.value == "") {
      signupAddressInlineAlert.textContent = "Address is a required field";
      signupAddress.insertAdjacentElement("afterend", signupAddressInlineAlert);
    } else if (signupAddress.value.length < 5) {
      signupAddressInlineAlert.textContent = "Address must have at least 5 characters";
      signupAddress.insertAdjacentElement("afterend", signupAddressInlineAlert);
    } else if (!addressValidator(signupAddress.value)) {
      signupAddressInlineAlert.textContent = "Address must contain letters, numbers and a space between";
      signupAddress.insertAdjacentElement("afterend", signupAddressInlineAlert);
    } else {
      inputValues[5] = signupAddress.value;
    }
  }

  function quitSignupAddressAlerts() {
    signupAddressInlineAlert.remove();
  }

  // CITY
  var signupCity = document.getElementById("signup-city");
  signupCity.addEventListener("blur", validateCity);
  signupCity.addEventListener("focus", quitSignupCityAlerts);
  var signupCityInlineAlert = document.createElement("p");
  signupCityInlineAlert.classList.add("inline-alerts");

  function validateCity() {
    if (signupCity.value == "") {
      signupCityInlineAlert.textContent = "City name is a required field";
      signupCity.insertAdjacentElement("afterend", signupCityInlineAlert);
    } else if (signupCity.value.length < 3) {
      signupCityInlineAlert.textContent = "City name must have at least 3 characters";
      signupCity.insertAdjacentElement("afterend", signupCityInlineAlert);
    } else {
      inputValues[6] = signupCity.value;
    }
  }

  function quitSignupCityAlerts() {
    signupCityInlineAlert.remove();
  }

  // ZIP CODE
  var signupZip = document.getElementById("signup-zip-code");
  signupZip.addEventListener("blur", validateZipCode);
  signupZip.addEventListener("focus", quitSignupZipAlerts);
  var signupZipInlineAlert = document.createElement("p");
  signupZipInlineAlert.classList.add("inline-alerts");

  function validateZipCode() {
    if (signupZip.value == "") {
      signupZipInlineAlert.textContent = "ZIP Code is a required field";
      signupZip.insertAdjacentElement("afterend", signupZipInlineAlert);
    } else if (
      !((signupZip.value.length <= 5) && (signupZip.value.length >= 4))
    ) {
      signupZipInlineAlert.textContent = "ZIP code must have 4 o 5 characters";
      signupZip.insertAdjacentElement("afterend", signupZipInlineAlert);
    } else if (!isOnlyNumbers(signupZip.value)) {
      signupZipInlineAlert.textContent = "ZIP code can contain only numbers";
      signupZip.insertAdjacentElement("afterend", signupZipInlineAlert);
    } else {
      inputValues[7] = signupZip.value;
    }
  }

  function quitSignupZipAlerts() {
    signupZipInlineAlert.remove();
  }

  // EMAIL
  var signupEmail = document.getElementById("signup-email");
  signupEmail.addEventListener("blur", validateEmail);
  signupEmail.addEventListener("focus", quitSignupEmailAlerts);
  var signupEmailInlineAlert = document.createElement("p");
  signupEmailInlineAlert.classList.add("inline-alerts");

  function validateEmail() {
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (signupEmail.value == "") {
      signupEmailInlineAlert.textContent = "Email is required";
      signupEmail.insertAdjacentElement("afterend", signupEmailInlineAlert);
    } else if (!emailRegExp.test(signupEmail.value)) {
      signupEmailInlineAlert.textContent = "Email is not valid";
      signupEmail.insertAdjacentElement("afterend", signupEmailInlineAlert);
    } else {
      inputValues[8] = signupEmail.value;
    }
  }

  function quitSignupEmailAlerts() {
    signupEmailInlineAlert.remove();
  }

  // PASSWORD
  var signupPassword = document.getElementById("signup-pass");
  signupPassword.addEventListener("blur", validatePassword);
  signupPassword.addEventListener("focus", quitSignupPasswordAlerts);
  var signupPasswordInlineAlert = document.createElement("p");
  signupPasswordInlineAlert.classList.add("inline-alerts");

  function validatePassword() {
    if (signupPassword.value.length == 0) {
      signupPasswordInlineAlert.textContent = "Password is required";
      signupPassword.insertAdjacentElement("afterend", signupPasswordInlineAlert);
    } else if ((signupPassword.value.length < 8) && !hasNumbersAndChar(signupPassword.value)) {
      signupPasswordInlineAlert.textContent =
        "Password must have at least 8 characters including numbers and letters";
      signupPassword.insertAdjacentElement("afterend", signupPasswordInlineAlert);
    } else if (signupPassword.value.length < 8) {
      signupPasswordInlineAlert.textContent =
        "Password must have at least 8 characters";
      signupPassword.insertAdjacentElement("afterend", signupPasswordInlineAlert);
    } else if (!hasNumbersAndChar(signupPassword.value)) {
      signupPasswordInlineAlert.textContent =
        "Password must contain numbers and letters";
      signupPassword.insertAdjacentElement("afterend", signupPasswordInlineAlert);
    } else {
      inputValues[9] = signupPassword.value;
    }
  }

  function quitSignupPasswordAlerts() {
    signupPasswordInlineAlert.remove();
  }

  // REPEATED PASSWORD
  var signupRepeatedPassword = document.getElementById("signup-repeated-pass");
  signupRepeatedPassword.addEventListener("blur", validateRepeatedPassword);
  signupRepeatedPassword.addEventListener("focus", quitSignupRepeatedPasswordAlerts);
  var signupRepeatedPasswordInlineAlert = document.createElement("p");
  signupRepeatedPasswordInlineAlert.classList.add("inline-alerts");

  function validateRepeatedPassword() {
    if (signupRepeatedPassword.value.length == 0) {
      signupRepeatedPasswordInlineAlert.textContent = "You must repeat the password";
      signupRepeatedPassword.insertAdjacentElement("afterend", signupRepeatedPasswordInlineAlert);
    } else if (signupRepeatedPassword.value != signupPassword.value) {
      signupRepeatedPasswordInlineAlert.textContent = "The passwords are not the same";
      signupRepeatedPassword.insertAdjacentElement("afterend", signupRepeatedPasswordInlineAlert);
    } else {
      inputValues[10] = signupRepeatedPassword.value;
    }
  }

  function quitSignupRepeatedPasswordAlerts() {
    signupRepeatedPasswordInlineAlert.remove();
  }

  // CREATE BUTTON
  var signupCreateButton = document.getElementById("signup-create-button");
  var signupModal = document.getElementById("signup-modal");
  var signupModalCloseButton = document.getElementsByClassName("close")[0];
  var signupModalTitle = document.getElementById("modal-title");
  var signupModalContent = document.getElementsByClassName("modal-content")[0];
  var inlineAlerts = document.getElementsByClassName("inline-alerts");
  var signupModalListItems = document.getElementsByClassName("modal-list-item");

  signupCreateButton.addEventListener("click", signupCreateButtonModal);
  signupModalCloseButton.addEventListener("click", signupCreateButtonModal);

  function signupCreateButtonModal() {
    validateName(signupName);
    validateSurname(signupLastName);
    validateIDNumber(signupIDNumber);
    validateBirth(signupBirth);
    validatePhone(signupPhone);
    validateAddress(signupAddress);
    validateCity(signupCity);
    validateZipCode(signupZip);
    validateEmail(signupEmail);
    validatePassword(signupPassword);
    validateRepeatedPassword(signupRepeatedPassword);

    signupModalTitle.innerHTML =
      inlineAlerts.length > 0 ? "ERROR" : "Sign up successful!";

    for (var x = signupModalListItems.length; x > 0; x--) {
      signupModalContent.removeChild(signupModalContent.lastChild);
    }

    if (inlineAlerts.length > 0) {
      for (var x = 0; x < inlineAlerts.length; x++) {
        var listItem = document.createElement("p");
        listItem.classList.add("modal-list-item");
        listItem.innerHTML = ''.concat(x + 1, ': ', inlineAlerts[x].innerHTML);
        signupModalContent.insertAdjacentElement("beforeend", listItem);
      }
    } else {
      for (var x = 0; x < inputValues.length; x++) {
        var listItem = document.createElement("p");
        listItem.classList.add("modal-list-item");
        listItem.innerHTML = ''.concat(inputLabels[x], ': ', inputValues[x]);
        signupModalContent.insertAdjacentElement("beforeend", listItem);
      }
    }
    signupModal.classList.toggle("show-modal");
  }
};

/*--------------- AUX FUNCTIONS, VALIDATORS AND UTILITIES ---------------*/
// i could have this functions on other file and import the functions i need

function hasNumbers(myString) {
  // the array numbers contain all the numbers
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  // if the char on index x is included in numbers, it is a number, so return true.
  for (var x = 0; x < myString.length; x++) {
    if (numbers.includes(myString[x])) {
      return true;
    }
  }
  return false;
}

function hasNumbersAndChar(myString) {
  var num = 0;
  var char = 0;

  // if the character is a number, i sum one to numbers. Else, i sum to char
  // if both are more than zero, there are numbers and chars! So the function return true.
  for (var x = 0; x < myString.length; x++) {
    if (hasNumbers(myString[x])) {
      num++;
    } else {
      char++;
    }
    if (num > 0 && char > 0) {
      return true;
    }
  }
  return false;
}

function isOnlyNumbers(myString) {
  // if it is not a number, this returns false
  for (var x = 0; x < myString.length; x++) {
    if (!hasNumbers(myString[x])) {
      return false;
    }
  }
  return true;
}

// correct address => true
// wrong address   => false
function addressValidator(myString) {
  var spaceTrigger = false;
  var space = [" "];

  var alphaTrigger = false;
  var num = 0;
  var char = 0;

  // first verify there is a space (not first or last)
  for (var x = 1; x < myString.length - 1; x++) {
    if (space.includes(myString[x])) {
      spaceTrigger = true;
      break;
    }
  }

  // then i verify if there are numbers and characters
  for (var x = 0; x < myString.length; x++) {
    // if it is a space, continue with next iteration
    if (space.includes(myString[x])) {
      continue;
    }
    if (hasNumbers(myString[x])) {
      num++;
    } else {
      char++;
    }
    if (num > 0 && char > 0) {
      alphaTrigger = true;
    }
  }

  return spaceTrigger && alphaTrigger;
}

// everything must be transformed in a Date prototype so everything can be instantiated
function isFullAge(date) {
  var date = new Date(date);
  var thisMoment = new Date(Date.now());

  return new Date(thisMoment - date).getFullYear() - 1970 >= 18;
}

/* 
NOTES FOR ANYONE WHO MANTAIN THIS CODE IN THE FUTURE (A.K.A. ME IN A WEEK/MONTH/YEAR/CENTURY):
- ELEMENTS ARE ORDERED BY APPEARANCE IN THE HTML FILE.
- FUNCTIONS TO VALIDATE ARE AT THE END, JUST BEFORE THIS, PLEASE MANTAIN THE ORDER.
- EACH ELEMENT MUST HAVE THE SELECTOR, THE BLUR AND FOCUS EVENTS AND THEN AN ELEMENT FOR THE OBSERVATIONS.
- THIS IS NOT PYTHON, BE CAREFUL WITH & AND &&
- IN SOME CASES, YOU MIGHT BE WONDERING, WHY DON'T YOU USE REGEX? WELL... IT'S INTENDED.
- SAME APPLIES FOR EVERYTHING THAT CAN BE DONE WITH ES6 OR NEWER.
- HAVE FUN!
*/

// a comment line for those regex i did not use F
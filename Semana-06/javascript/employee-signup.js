/* NOTES AT THE END WITH SOME RULES */

window.onload = function () {
  // NAME
  var signupName = document.getElementById('signup-name');
  signupName.addEventListener('blur', validateName);
  signupName.addEventListener('focus', quitSignupNameAlerts);
  var signupNameInlineAlert = document.createElement('p');
  signupNameInlineAlert.classList.add('inline-alerts');

  function validateName() {
    if (signupName.value == '') {
      signupNameInlineAlert.textContent = 'This is a required field';
      signupName.insertAdjacentElement('afterend', signupNameInlineAlert);
    } else if (signupName.value.length < 3) {
      signupNameInlineAlert.textContent =
        'Name must have at least 3 characters';
      signupName.insertAdjacentElement('afterend', signupNameInlineAlert);
    } else if (hasNumbers(signupName.value)) {
      signupNameInlineAlert.textContent = 'Name can\'t contain a number';
      signupName.insertAdjacentElement('afterend', signupNameInlineAlert);
    }
  }

  function quitSignupNameAlerts() {
    signupNameInlineAlert.remove();
  }

  // SURNAME
  var signupSurname = document.getElementById('signup-surname');
  signupSurname.addEventListener('blur', validateSurname);
  signupSurname.addEventListener('focus', quitSignupSurnameAlerts);
  var signupSurnameInlineAlert = document.createElement('p');
  signupSurnameInlineAlert.classList.add('inline-alerts');

  function validateSurname() {
    if (signupSurname.value == '') {
      signupSurnameInlineAlert.textContent = 'This is a required field';
      signupSurname.insertAdjacentElement('afterend', signupSurnameInlineAlert);
    } else if (signupSurname.value.length < 3) {
      signupSurnameInlineAlert.textContent =
        'Surname must have at least 3 characters';
      signupSurname.insertAdjacentElement('afterend', signupSurnameInlineAlert);
    } else if (hasNumbers(signupSurname.value)) {
      signupSurnameInlineAlert.textContent = 'Surname can\'t contain a number';
      signupSurname.insertAdjacentElement('afterend', signupSurnameInlineAlert);
    }
  }

  function quitSignupSurnameAlerts() {
    signupSurnameInlineAlert.remove();
  }

  // ID NUMBER
  var signupIDNumber = document.getElementById('signup-idn');
  signupIDNumber.addEventListener('blur', validateIDNumber);
  signupIDNumber.addEventListener('focus', quitSignupIDNumberAlerts);
  var signupIDNumberInlineAlert = document.createElement('p');
  signupIDNumberInlineAlert.classList.add('inline-alerts');

  function validateIDNumber() {
    if (signupIDNumber.value == '') {
      signupIDNumberInlineAlert.textContent = 'This is a required field';
      signupIDNumber.insertAdjacentElement('afterend', signupIDNumberInlineAlert);
    } else if (signupIDNumber.value.length < 8) {
      signupIDNumberInlineAlert.textContent =
        'ID Number must have at least 8 characters';
      signupIDNumber.insertAdjacentElement('afterend', signupIDNumberInlineAlert);
    } else if (!isOnlyNumbers(signupIDNumber.value)) {
      signupIDNumberInlineAlert.textContent = 'ID Number can contain only numbers';
      signupIDNumber.insertAdjacentElement('afterend', signupIDNumberInlineAlert);
    }
  }

  function quitSignupIDNumberAlerts() {
    signupIDNumberInlineAlert.remove();
  }

  // BIRTH
  var signupBirth = document.getElementById('signup-birth-date');
  signupBirth.addEventListener('blur', validateBirth);
  signupBirth.addEventListener('focus', quitSignupBirthAlerts);
  var signupBirthInlineAlert = document.createElement('p');
  signupBirthInlineAlert.classList.add('inline-alerts');

  function validateBirth() {
    if (signupBirth.value == '') {
      signupBirthInlineAlert.textContent = 'This is a required field';
      signupBirth.insertAdjacentElement('afterend', signupBirthInlineAlert);
    } else if (!isFullAge(signupBirth.value)) {
      signupBirthInlineAlert.textContent = 'You must be +18';
      signupBirth.insertAdjacentElement('afterend', signupBirthInlineAlert);
    }
  }

  function quitSignupBirthAlerts() {
    signupBirthInlineAlert.remove();
  }

  // PHONE
  var signupPhone = document.getElementById('signup-phone');
  signupPhone.addEventListener('blur', validatePhone);
  signupPhone.addEventListener('focus', quitSignupPhoneAlerts);
  var signupPhoneInlineAlert = document.createElement('p');
  signupPhoneInlineAlert.classList.add('inline-alerts');

  function validatePhone() {
    if (signupPhone.value == '') {
      signupPhoneInlineAlert.textContent = 'This is a required field';
      signupPhone.insertAdjacentElement('afterend', signupPhoneInlineAlert);
    } else if (
      (signupPhone.value.length != 10) &
      !isOnlyNumbers(signupPhone.value)
    ) {
      signupPhoneInlineAlert.textContent =
        'Phone number must have 10 characters \n Phone number can contain only numbers';
      signupPhone.insertAdjacentElement('afterend', signupPhoneInlineAlert);
    } else if (signupPhone.value.length != 10) {
      signupPhoneInlineAlert.textContent =
        'Phone number must have 10 characters';
      signupPhone.insertAdjacentElement('afterend', signupPhoneInlineAlert);
    } else if (!isOnlyNumbers(signupPhone.value)) {
      signupPhoneInlineAlert.textContent =
        'Phone number can contain only numbers';
      signupPhone.insertAdjacentElement('afterend', signupPhoneInlineAlert);
    }
  }

  function quitSignupPhoneAlerts() {
    signupPhoneInlineAlert.remove();
  }

  // ADDRESS
  var signupAddress = document.getElementById('signup-address');
  signupAddress.addEventListener('blur', validateAddress);
  signupAddress.addEventListener('focus', quitSignupAddressAlerts);
  var signupAddressInlineAlert = document.createElement('p');
  signupAddressInlineAlert.classList.add('inline-alerts');

  function validateAddress() {
    if (signupAddress.value == '') {
      signupAddressInlineAlert.textContent = 'This is a required field';
      signupAddress.insertAdjacentElement('afterend', signupAddressInlineAlert);
    } else if (signupAddress.value.length < 5) {
      signupAddressInlineAlert.textContent =
        'Address must have at least 5 characters';
      signupAddress.insertAdjacentElement('afterend', signupAddressInlineAlert);
    } else if (!addressValidator(signupAddress.value)) {
      signupAddressInlineAlert.textContent =
        'Address must contain letters, numbers and a space between';
      signupAddress.insertAdjacentElement('afterend', signupAddressInlineAlert);
    }
  }

  function quitSignupAddressAlerts() {
    signupAddressInlineAlert.remove();
  }

  // CITY
  var signupCity = document.getElementById('signup-city');
  signupCity.addEventListener('blur', validateCity);
  signupCity.addEventListener('focus', quitSignupCityAlerts);
  var signupCityInlineAlert = document.createElement('p');
  signupCityInlineAlert.classList.add('inline-alerts');

  function validateCity() {
    if (signupCity.value == '') {
      signupCityInlineAlert.textContent = 'This is a required field';
      signupCity.insertAdjacentElement('afterend', signupCityInlineAlert);
    } else if (signupCity.value.length < 3) {
      signupCityInlineAlert.textContent =
        'City name must have at least 3 characters';
      signupCity.insertAdjacentElement('afterend', signupCityInlineAlert);
    }
  }

  function quitSignupCityAlerts() {
    signupCityInlineAlert.remove();
  }

  // ZIP CODE
  var signupZip = document.getElementById('signup-zip-code');
  signupZip.addEventListener('blur', validateZipCode);
  signupZip.addEventListener('focus', quitSignupZipAlerts);
  var signupZipInlineAlert = document.createElement('p');
  signupZipInlineAlert.classList.add('inline-alerts');

  function validateZipCode() {
    if (signupZip.value == '') {
      signupZipInlineAlert.textContent = 'This is a required field';
      signupZip.insertAdjacentElement('afterend', signupZipInlineAlert);
    } else if (
      !((signupZip.value.length <= 5) & (signupZip.value.length >= 4))
    ) {
      signupZipInlineAlert.textContent = 'ZIP code must have 4 o 5 characters';
      signupZip.insertAdjacentElement('afterend', signupZipInlineAlert);
    } else if (!isOnlyNumbers(signupZip.value)) {
      signupZipInlineAlert.textContent = 'ZIP code can contain only numbers';
      signupZip.insertAdjacentElement('afterend', signupZipInlineAlert);
    }
  }

  function quitSignupZipAlerts() {
    signupZipInlineAlert.remove();
  }

  // EMAIL
  var signupEmail = document.getElementById('signup-email');
  signupEmail.addEventListener('blur', validateEmail);
  signupEmail.addEventListener('focus', quitSignupEmailAlerts);
  var signupEmailInlineAlert = document.createElement('p');
  signupEmailInlineAlert.classList.add('inline-alerts');

  function validateEmail() {
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (signupEmail.value == '') {
      signupEmailInlineAlert.textContent = 'Email is required';
      signupEmail.insertAdjacentElement('afterend', signupEmailInlineAlert);
    } else if (!emailRegExp.test(signupEmail.value)) {
      signupEmailInlineAlert.textContent = 'Email is not valid';
      signupEmail.insertAdjacentElement('afterend', signupEmailInlineAlert);
    }
  }

  function quitSignupEmailAlerts() {
    signupEmailInlineAlert.remove();
  }

  // PASSWORD
  var signupPassword = document.getElementById('signup-pass');
  signupPassword.addEventListener('blur', validatePassword);
  signupPassword.addEventListener('focus', quitSignupPasswordAlerts);
  var signupPasswordInlineAlert = document.createElement('p');
  signupPasswordInlineAlert.classList.add('inline-alerts');

  function validatePassword() {
    if (signupPassword.value.length == 0) {
      signupPasswordInlineAlert.textContent = 'Password is required';
      signupPassword.insertAdjacentElement(
        'afterend',
        signupPasswordInlineAlert
      );
    } else if (
      (signupPassword.value.length < 8) &
      !hasNumbersAndChar(signupPassword.value)
    ) {
      signupPasswordInlineAlert.textContent =
        'Password must have at least 8 characters\n Password must contain numbers and letters';
      signupPassword.insertAdjacentElement('afterend', signupPasswordInlineAlert);
    } else if (signupPassword.value.length < 8) {
      signupPasswordInlineAlert.textContent = 'Password must have at least 8 characters';
      signupPassword.insertAdjacentElement('afterend', signupPasswordInlineAlert);
    } else if (!hasNumbersAndChar(signupPassword.value)) {
      signupPasswordInlineAlert.textContent = 'Password must contain numbers and letters';
      signupPassword.insertAdjacentElement('afterend', signupPasswordInlineAlert);
    }
  }

  function quitSignupPasswordAlerts() {
    signupPasswordInlineAlert.remove();
  }

  // REPEATED PASSWORD
  var signupRepeatedPassword = document.getElementById('signup-repeated-pass');
  signupRepeatedPassword.addEventListener('blur', validateRepeatedPassword);
  signupRepeatedPassword.addEventListener('focus',quitSignupRepeatedPasswordAlerts);
  var signupRepeatedPasswordInlineAlert = document.createElement('p');
  signupRepeatedPasswordInlineAlert.classList.add('inline-alerts');

  function validateRepeatedPassword() {
    if (signupRepeatedPassword.value.length == 0) {
      signupRepeatedPasswordInlineAlert.textContent = 'This is a required field';
      signupRepeatedPassword.insertAdjacentElement('afterend', signupRepeatedPasswordInlineAlert);
    } else if (signupRepeatedPassword.value != signupPassword.value) {
      signupRepeatedPasswordInlineAlert.textContent = 'The passwords are not the same';
      signupRepeatedPassword.insertAdjacentElement('afterend', signupRepeatedPasswordInlineAlert);
    }
  }

  function quitSignupRepeatedPasswordAlerts() {
    signupRepeatedPasswordInlineAlert.remove();
  }

  // CREATE BUTTON
  var signupCreateButton = document.getElementById('signup-create-button');
  var signupModal = document.getElementById('signup-modal');
  var signupModalCloseButton = document.getElementsByClassName('close')[0];
  var signupModalTitle = document.getElementById('modal-title');
  var signupModalContent = document.getElementsByClassName('modal-content')[0];
  
  signupCreateButton.addEventListener('click', signupCreateButtonModal);
  signupModalCloseButton.addEventListener('click', signupCreateButtonModal);

  function signupCreateButtonModal () {
    signupModal.classList.toggle('show-modal');
    signupModalTitle.innerHTML='Successful signup! Yay!';
    signupModalContent.innerHTML =`
    Name: ${signupName.value} 
    Last name: ${signupSurname.value} 
    ID number: ${signupIDNumber.value} 
    Birth: ${signupBirth.value} 
    Phone: ${signupPhone.value} 
    Address: ${signupAddress.value} 
    City: ${signupCity.value} 
    Zip code: ${signupZip.value} 
    Email: ${signupEmail.value}`;

  }

};


/*--------------- AUX FUNCTIONS, VALIDATORS AND UTILITIES ---------------*/

function hasNumbers(myString) {
  // the array numbers contain all the numbers
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

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
  var space = [' '];

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
    if ((num > 0) && (char > 0)) {
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
/* NOTES AT THE END WITH SOME RULES */

window.onload = function () {
  // AUX VARIABLES
  var inputValues = [];
  var inputLabels = ['Name', 'Last name', 'ID number', 'Birth date', 'Phone', 'Address', 'City', 'Zip code', 
  'Email', 'Password', 'Repeated password'];



  // NAME
  var signupName = document.getElementById('signup-name');
  signupName.onblur = validateName;
  signupName.onfocus = quitSignupNameAlerts;
  var signupNameInlineAlert = document.createElement('p');
  signupNameInlineAlert.classList.add('inline-alerts');

  function validateName() {
    var isValidated = false;

    if (signupName.value.trim() == '') {
      signupNameInlineAlert.textContent = 'Name is a required field';
      signupName.insertAdjacentElement('afterend', signupNameInlineAlert);
      inputValues[0] = 'Error! '.concat(signupNameInlineAlert.textContent);
    } else if (signupName.value.trim().length < 3) {
      signupNameInlineAlert.textContent = 'Name must have at least 3 characters';
      signupName.insertAdjacentElement('afterend', signupNameInlineAlert);
      inputValues[0] = 'Error! '.concat(signupNameInlineAlert.textContent);
    } else if (!isChars(signupName.value)) {
      signupNameInlineAlert.textContent = 'Name can only contain letters';
      signupName.insertAdjacentElement('afterend', signupNameInlineAlert);
      inputValues[0] = 'Error! '.concat(signupNameInlineAlert.textContent);
    } else {
      inputValues[0] = signupName.value.trim();
      isValidated = true;
    }
    return isValidated;
  }

  function quitSignupNameAlerts() {
    signupNameInlineAlert.remove();
  }

  // LAST NAME
  var signupLastName = document.getElementById('signup-last-name');
  signupLastName.onblur = validateSurname;
  signupLastName.onfocus = quitSignupSurnameAlerts;
  var signupSurnameInlineAlert = document.createElement('p');
  signupSurnameInlineAlert.classList.add('inline-alerts');

  function validateSurname() {
    var isValidated = false;

    if (signupLastName.value.trim() == '') {
      signupSurnameInlineAlert.textContent = 'Last name is a required field';
      signupLastName.insertAdjacentElement('afterend', signupSurnameInlineAlert);
      inputValues[1] = 'Error! '.concat(signupSurnameInlineAlert.textContent);
    } else if (signupLastName.value.trim().length < 3) {
      signupSurnameInlineAlert.textContent = 'Last name must have at least 3 characters';
      signupLastName.insertAdjacentElement('afterend', signupSurnameInlineAlert);
      inputValues[1] = 'Error! '.concat(signupSurnameInlineAlert.textContent);
    } else if (!isChars(signupLastName.value)) {
      signupSurnameInlineAlert.textContent = 'Last name can only contain letters';
      signupLastName.insertAdjacentElement('afterend', signupSurnameInlineAlert);
      inputValues[1] = 'Error! '.concat(signupSurnameInlineAlert.textContent);
    } else {
      inputValues[1] = signupLastName.value.trim();
      isValidated = true;
    }

    return isValidated;
  }

  function quitSignupSurnameAlerts() {
    signupSurnameInlineAlert.remove();
  }

  // ID NUMBER
  var signupIDNumber = document.getElementById('signup-idn');
  signupIDNumber.onblur = validateIDNumber;
  signupIDNumber.onfocus = quitSignupIDNumberAlerts;
  var signupIDNumberInlineAlert = document.createElement('p');
  signupIDNumberInlineAlert.classList.add('inline-alerts');

  function validateIDNumber() {
    var isValidated = false;

    if (signupIDNumber.value == '') {
      signupIDNumberInlineAlert.textContent = 'ID Number is a required field';
      signupIDNumber.insertAdjacentElement('afterend', signupIDNumberInlineAlert);
      inputValues[2] = 'Error! '.concat(signupIDNumberInlineAlert.textContent);
    } 
    else if (!(signupIDNumber.value.length == 8 || signupIDNumber.value.length == 7)) {
      signupIDNumberInlineAlert.textContent =
      'ID Number must have 7 or 8 characters';
      signupIDNumber.insertAdjacentElement('afterend', signupIDNumberInlineAlert);
      inputValues[2] = 'Error! '.concat(signupIDNumberInlineAlert.textContent);
    } 
    else if (!(isOnlyNumbers(signupIDNumber.value))) {
      signupIDNumberInlineAlert.textContent = 'ID Number can contain only numbers';
      signupIDNumber.insertAdjacentElement('afterend', signupIDNumberInlineAlert);
      inputValues[2] = 'Error! '.concat(signupIDNumberInlineAlert.textContent);
    } 
    else {
      inputValues[2] = signupIDNumber.value;
      isValidated = true;
    }

    return isValidated;
  }

  function quitSignupIDNumberAlerts() {
    signupIDNumberInlineAlert.remove();
  }

  // BIRTH
  var signupBirth = document.getElementById('signup-birth-date');
  signupBirth.onblur = validateBirth;
  signupBirth.onfocus = quitSignupBirthAlerts;
  var signupBirthInlineAlert = document.createElement('p');
  signupBirthInlineAlert.classList.add('inline-alerts');

  function validateBirth() {
    var isValidated = false;

    if (signupBirth.value == '') {
      signupBirthInlineAlert.textContent = 'Birth date is a required field';
      signupBirth.insertAdjacentElement('afterend', signupBirthInlineAlert);
      inputValues[3] = 'Error! '.concat(signupBirthInlineAlert.textContent);
    } else if (!isFullAge(signupBirth.value)) {
      signupBirthInlineAlert.textContent = 'You must be +18';
      signupBirth.insertAdjacentElement('afterend', signupBirthInlineAlert);
      inputValues[3] = 'Error! '.concat(signupBirthInlineAlert.textContent);
    } else {
      inputValues[3] = fromYearMonthDayToMonthDayYear(signupBirth.value);
      isValidated = true; 
    }

    return isValidated;
  }

  function quitSignupBirthAlerts() {
    signupBirthInlineAlert.remove();
  }

  // PHONE
  var signupPhone = document.getElementById('signup-phone');
  signupPhone.onblur = validatePhone;
  signupPhone.onfocus = quitSignupPhoneAlerts;
  var signupPhoneInlineAlert = document.createElement('p');
  signupPhoneInlineAlert.classList.add('inline-alerts');

  function validatePhone() {
    var isValidated = false;

    if (signupPhone.value == '') {
      signupPhoneInlineAlert.textContent = 'Phone is a required field';
      signupPhone.insertAdjacentElement('afterend', signupPhoneInlineAlert);
      inputValues[4] = 'Error! '.concat(signupPhoneInlineAlert.textContent);
    } else if ((signupPhone.value.length != 10) && !isOnlyNumbers(signupPhone.value)) {
      signupPhoneInlineAlert.textContent = 'Phone number must have 10 numeric characters';
      signupPhone.insertAdjacentElement('afterend', signupPhoneInlineAlert);
      inputValues[4] = 'Error! '.concat(signupPhoneInlineAlert.textContent);
    } else if (signupPhone.value.length != 10) {
      signupPhoneInlineAlert.textContent = 'Phone number must have 10 numeric characters';
      signupPhone.insertAdjacentElement('afterend', signupPhoneInlineAlert);
      inputValues[4] = 'Error! '.concat(signupPhoneInlineAlert.textContent);
    } else if (!isOnlyNumbers(signupPhone.value)) {
      signupPhoneInlineAlert.textContent = 'Phone number can contain only numbers';
      signupPhone.insertAdjacentElement('afterend', signupPhoneInlineAlert);
      inputValues[4] = 'Error! '.concat(signupPhoneInlineAlert.textContent);
    } else {
      inputValues[4] = signupPhone.value;
      isValidated = true;
    }

    return isValidated;
  }

  function quitSignupPhoneAlerts() {
    signupPhoneInlineAlert.remove();
  }

  // ADDRESS
  var signupAddress = document.getElementById('signup-address');
  signupAddress.onblur = validateAddress;
  signupAddress.onfocus = quitSignupAddressAlerts;
  var signupAddressInlineAlert = document.createElement('p');
  signupAddressInlineAlert.classList.add('inline-alerts');

  function validateAddress() {
    var isValidated = false;

    if (signupAddress.value.trim() == '') {
      signupAddressInlineAlert.textContent = 'Address is a required field';
      signupAddress.insertAdjacentElement('afterend', signupAddressInlineAlert);
      inputValues[5] = 'Error! '.concat(signupAddressInlineAlert.textContent);
    } else if (signupAddress.value.trim().length < 5) {
      signupAddressInlineAlert.textContent = 'Address must have at least 5 characters';
      signupAddress.insertAdjacentElement('afterend', signupAddressInlineAlert);
      inputValues[5] = 'Error! '.concat(signupAddressInlineAlert.textContent);
    } else if (!addressValidator(signupAddress.value)) {
      signupAddressInlineAlert.textContent = 'Address must contain letters, numbers and a space between';
      signupAddress.insertAdjacentElement('afterend', signupAddressInlineAlert);
      inputValues[5] = 'Error! '.concat(signupAddressInlineAlert.textContent);
    } else {
      inputValues[5] = signupAddress.value;
      isValidated = true;
    }

    return isValidated;
  }

  function quitSignupAddressAlerts() {
    signupAddressInlineAlert.remove();
  }

  // CITY
  var signupCity = document.getElementById('signup-city');
  signupCity.onblur = validateCity;
  signupCity.onfocus = quitSignupCityAlerts;
  var signupCityInlineAlert = document.createElement('p');
  signupCityInlineAlert.classList.add('inline-alerts');

  function validateCity() {
    var isValidated = false;

    if (signupCity.value.trim() == '') {
      signupCityInlineAlert.textContent = 'City name is a required field';
      signupCity.insertAdjacentElement('afterend', signupCityInlineAlert);
      inputValues[6] = 'Error! '.concat(signupCityInlineAlert.textContent);
    } else if (signupCity.value.trim().length < 3) {
      signupCityInlineAlert.textContent = 'City name must have at least 3 characters';
      signupCity.insertAdjacentElement('afterend', signupCityInlineAlert);
      inputValues[6] = 'Error! '.concat(signupCityInlineAlert.textContent);
    } else {
      inputValues[6] = signupCity.value;
      isValidated = true;
    }

    return isValidated;
  }

  function quitSignupCityAlerts() {
    signupCityInlineAlert.remove();
  }

  // ZIP CODE
  var signupZip = document.getElementById('signup-zip-code');
  signupZip.onblur = validateZipCode;
  signupZip.onfocus = quitSignupZipAlerts;
  var signupZipInlineAlert = document.createElement('p');
  signupZipInlineAlert.classList.add('inline-alerts');

  function validateZipCode() {
    var isValidated = false;

    if (signupZip.value == '') {
      signupZipInlineAlert.textContent = 'ZIP Code is a required field';
      signupZip.insertAdjacentElement('afterend', signupZipInlineAlert);
      inputValues[7] = 'Error! '.concat(signupZipInlineAlert.textContent);
    } else if (
      !((signupZip.value.length <= 5) && (signupZip.value.length >= 4))
    ) {
      signupZipInlineAlert.textContent = 'ZIP code must have 4 o 5 characters';
      signupZip.insertAdjacentElement('afterend', signupZipInlineAlert);
      inputValues[7] = 'Error! '.concat(signupZipInlineAlert.textContent);
    } else if (!isOnlyNumbers(signupZip.value)) {
      signupZipInlineAlert.textContent = 'ZIP code can contain only numbers';
      signupZip.insertAdjacentElement('afterend', signupZipInlineAlert);
      inputValues[7] = 'Error! '.concat(signupZipInlineAlert.textContent);
    } else {
      inputValues[7] = signupZip.value;
      isValidated = true;
    }

    return isValidated;
  }

  function quitSignupZipAlerts() {
    signupZipInlineAlert.remove();
  }

  // EMAIL
  var signupEmail = document.getElementById('signup-email');
  signupEmail.onblur = validateEmail;
  signupEmail.onfocus = quitSignupEmailAlerts;
  var signupEmailInlineAlert = document.createElement('p');
  signupEmailInlineAlert.classList.add('inline-alerts');

  function validateEmail() {
    var isValidated = false;
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (signupEmail.value.trim() == '') {
      signupEmailInlineAlert.textContent = 'Email is required';
      signupEmail.insertAdjacentElement('afterend', signupEmailInlineAlert);
      inputValues[8] = 'Error! '.concat(signupEmailInlineAlert.textContent);
    } else if (!emailRegExp.test(signupEmail.value)) {
      signupEmailInlineAlert.textContent = 'Email is not valid';
      signupEmail.insertAdjacentElement('afterend', signupEmailInlineAlert);
      inputValues[8] = 'Error! '.concat(signupEmailInlineAlert.textContent);
    } else {
      inputValues[8] = signupEmail.value;
      isValidated = true;
    }

    return isValidated;
  }

  function quitSignupEmailAlerts() {
    signupEmailInlineAlert.remove();
  }

  // PASSWORD
  var signupPassword = document.getElementById('signup-pass');
  signupPassword.onblur = validatePassword;
  signupPassword.onfocus = quitSignupPasswordAlerts;
  var signupPasswordInlineAlert = document.createElement('p');
  signupPasswordInlineAlert.classList.add('inline-alerts');

  function validatePassword() {
    var isValidated = false;

    if (signupPassword.value.length == 0) {
      signupPasswordInlineAlert.textContent = 'Password is required';
      signupPassword.insertAdjacentElement('afterend', signupPasswordInlineAlert);
      inputValues[9] = 'Error! '.concat(signupPasswordInlineAlert.textContent);
    } else if ((signupPassword.value.length < 8) && !hasNumbersAndChar(signupPassword.value)) {
      signupPasswordInlineAlert.textContent =
        'Password must have at least 8 characters including numbers and letters';
      signupPassword.insertAdjacentElement('afterend', signupPasswordInlineAlert);
      inputValues[9] = 'Error! '.concat(signupPasswordInlineAlert.textContent);
    } else if (signupPassword.value.length < 8) {
      signupPasswordInlineAlert.textContent =
        'Password must have at least 8 characters';
      signupPassword.insertAdjacentElement('afterend', signupPasswordInlineAlert);
      inputValues[9] = 'Error! '.concat(signupPasswordInlineAlert.textContent);
    } else if (!hasNumbersAndChar(signupPassword.value)) {
      signupPasswordInlineAlert.textContent =
        'Password must contain only numbers and letters';
      signupPassword.insertAdjacentElement('afterend', signupPasswordInlineAlert);
      inputValues[9] = 'Error! '.concat(signupPasswordInlineAlert.textContent);
    } else {
      inputValues[9] = signupPassword.value;
      isValidated = true;
    }

    return isValidated;
  }

  function quitSignupPasswordAlerts() {
    signupPasswordInlineAlert.remove();
  }

  // REPEATED PASSWORD
  var signupRepeatedPassword = document.getElementById('signup-repeated-pass');
  signupRepeatedPassword.onblur = validateRepeatedPassword;
  signupRepeatedPassword.onfocus = quitSignupRepeatedPasswordAlerts;
  var signupRepeatedPasswordInlineAlert = document.createElement('p');
  signupRepeatedPasswordInlineAlert.classList.add('inline-alerts');

  function validateRepeatedPassword() {
    var isValidated = false;

    if (signupRepeatedPassword.value.length == 0) {
      signupRepeatedPasswordInlineAlert.textContent = 'You must repeat the password';
      signupRepeatedPassword.insertAdjacentElement('afterend', signupRepeatedPasswordInlineAlert);
      inputValues[10] = 'Error! '.concat(signupRepeatedPasswordInlineAlert.textContent);
    } else if (signupRepeatedPassword.value != signupPassword.value) {
      signupRepeatedPasswordInlineAlert.textContent = 'The passwords are not the same';
      signupRepeatedPassword.insertAdjacentElement('afterend', signupRepeatedPasswordInlineAlert);
      inputValues[10] = 'Error! '.concat(signupRepeatedPasswordInlineAlert.textContent);
    } else {
      inputValues[10] = signupRepeatedPassword.value;
      isValidated = true;
    }

    return isValidated;
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
  var inlineAlerts = document.getElementsByClassName('inline-alerts');
  var signupModalListItems = document.getElementsByClassName('modal-list-item');

  signupCreateButton.onclick = signupCreateButtonModal;
  signupModalCloseButton.onclick = function() {
    signupModal.classList.toggle('show-modal');
  };

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
      inlineAlerts.length > 0 ? 'ERROR' : 'Sign up successful!';

    for (var x = signupModalListItems.length; x > 0; x--) {
      signupModalContent.removeChild(signupModalContent.lastChild);
    }

    for (var x = 0; x < inputValues.length; x++) {
      var listItem = document.createElement('p');
      listItem.classList.add('modal-list-item');

      if (inputValues[x].slice(0,5) == 'Error') {
        listItem.classList.add('error-text');
      }
      else {
        listItem.classList.add('correct-text');
      }

      listItem.innerHTML = ''.concat(inputLabels[x], ': ', inputValues[x]);
      signupModalContent.insertAdjacentElement('beforeend', listItem);
    }
    
    signupModal.classList.toggle('show-modal');

    var validationsList = [
      validateName(signupName),
      validateSurname(signupLastName),
      validateIDNumber(signupIDNumber),
      validateBirth(signupBirth),
      validatePhone(signupPhone),
      validateAddress(signupAddress),
      validateCity(signupCity),
      validateZipCode(signupZip),
      validateEmail(signupEmail),
      validatePassword(signupPassword),
      validateRepeatedPassword(signupRepeatedPassword)
    ];

    if (!validationsList.includes(false)) {
      var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
      var selectors = [
        signupName,
        signupLastName,
        signupIDNumber,
        signupBirth,
        signupPhone,
        signupAddress,
        signupCity,
        signupZip,
        signupEmail,
        signupPassword
      ];

      signupFetch(url, selectors);
    }
  }

    // CHECK LOCALSTORAGE
  // local storage have {id, name, lastName, dni, dob, phone, address, city, zip, email, password}
  if (localStorage.getItem('id') != null) {
    signupName.value = localStorage.getItem("name");
    signupLastName.value = localStorage.getItem("lastName");
    signupIDNumber.value = localStorage.getItem("dni");
    signupBirth.value = localStorage.getItem("dob");
    signupPhone.value = localStorage.getItem("phone");
    signupAddress.value = localStorage.getItem("address");
    signupCity.value = localStorage.getItem("city");
    signupZip.value = localStorage.getItem("zip");
    signupEmail.value = localStorage.getItem("email");
    signupPassword.value = localStorage.getItem("password");
    signupRepeatedPassword.value = localStorage.getItem("password");
  }
};

/*--------------- AUX FUNCTIONS, VALIDATORS AND UTILITIES ---------------*/
// i could have this functions on other file and import the functions i need

// string -> boolean
// has numbers => true
// has not numbers => false
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

// string -> boolean
// has only letters => true
// has numbers and letters => false
// has spaces numbers and letters => false
function isChars(myString) {
  for (var x = 0 ; x < myString.length; x++) {
    if (!((myString[x] >= 'a' && myString[x] <= 'z') || (myString[x] >= 'A' && myString[x] <= 'Z'))) {
      return false;
    }
  }
  return true;
}

// string -> boolean
// has only letters => true
// has letters and/or spaces => true
// has numbers and letters => false
// has spaces numbers and letters => false
function isCharsOrSpace(myString) {
  for (var x = 0 ; x < myString.length; x++) {
    if (!((myString[x] >= 'a' && myString[x] <= 'z') 
    || (myString[x] >= 'A' && myString[x] <= 'Z' 
    || myString[x] == ' '))) {
      return false;
    }
  }
  return true;
}

// string -> boolean
// has numbers and letters => true
// has numbers but no letters => false
// has letter but no numbers => false
function hasNumbersAndChar(myString) {
  var num = false;
  var char = false;

  // if the character is a number, i sum one to numbers. Else, i sum to char
  // if both are more than zero, there are numbers and chars! So the function return true.
  for (var x = 0; x < myString.length; x++) {
    if (hasNumbers(myString[x])) {
      num = true;
    } else if (isChars(myString[x])) {
      char = true;
    } else {
      return false;
    }
  }

  return num && char;
}

// string -> boolean
// numbers without letters => true
// numbers and letters => false
// only letters => false
function isOnlyNumbers(myString) {
  for (var x = 0; x < myString.length; x++) {
    if (!hasNumbers(myString[x])) {
      return false;
    }
  }
  return true;
}

// string -> boolean
// space between words with letters and numbers => true
// letters and numbers but with no space => false
// space not between words => false
function addressValidator(myString) {
  var trimmedString = myString.trim();
  var spaceTrigger = false;
  var space = [' '];

  var alphaTrigger = false;
  var num = 0;
  var char = 0;

  // then verify there is a space (not first or last) after trim
  for (var x = 1; x < trimmedString.length - 1; x++) {
    if (space.includes(trimmedString[x])) {
      spaceTrigger = true;
      break;
    }
  }

  // then i verify if there are numbers and characters
  for (var x = 0; x < trimmedString.length; x++) {
    // if it is a space, continue with next iteration
    if (space.includes(trimmedString[x])) {
      continue;
    }
    if (hasNumbers(trimmedString[x])) {
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
// date -> bool
// date - today < 18 => false
// date - today >= 18 => true
function isFullAge(date) {  
  var inputDate = new Date(date);
  var thisMoment = new Date(Date.now());

  return new Date(thisMoment - inputDate).getFullYear() - 1970 >= 18;
}

// YYYY-MM-DD -> MM/DD/YYYY
// because i have yyyy-mm-dd format and the backend request mm/dd/yyyy :( 
function fromYearMonthDayToMonthDayYear(date) {
  var year = date.substr(0, 4);
  var month = date.substr(5, 2);
  var day = date.substr(8, 2);
  var newDate = month.concat('/', day, '/', year)

  return newDate;
}

// MM/DD/YYYY -> YYYY-MM-DD
// because i have yyyy-mm-dd format and the backend request mm/dd/yyyy :( 
  function fromMonthDayYearToYearMonthDay(date) {
    var year = date.substr(6, 4);
    var month = date.substr(0, 2);
    var day = date.substr(3, 2);
    var newDate = year.concat('-', month, '-', day)
  
    return newDate;
  }
// string -> string
// 'this-is-not-camel' => 'thisIsNotCamel'
// 'that-was-awesome' => 'thatWasAwesome'
// in case any name parameter is written on kebab
function kebabToCamel(str) {
  var myArr = str.split('-');
  for (var x = 1 ; x < myArr.length ; x++) {
    myArr[x] = myArr[x].substring(0, 1).toUpperCase().concat(myArr[x].substring(1));
  }

  return myArr.join('');
}

// list -> string
// [name, password] => '?name=nameinput&password=passwordinput'
// so i can generalize a bit the query params
function joinQueryParams(selectorsList) {
  var myArr = [];

  for (var x = 0 ; x < selectorsList.length ; x++) {

    // So the date is formatted as MM/DD/YYYY instead of YYYY-MM-DD
    if (selectorsList[x].name != 'dob') {
      myArr[x] = kebabToCamel(selectorsList[x].name).concat('=', selectorsList[x].value);
    } else {
      myArr[x] = kebabToCamel(selectorsList[x].name).concat('=', fromYearMonthDayToMonthDayYear(selectorsList[x].value));
    }
  }

  return '?'.concat(myArr.join('&'));
}

// string, list -> alert
// url is a string
// selectorsList is a list of selectors 
function signupFetch(url, selectorsList) {
  var fetchUrl = url.concat(joinQueryParams(selectorsList));
  fetch(fetchUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonResponse) {
      var header = jsonResponse.success ? 'Login successful!' : 'Error!';
      alert(header.concat('\n', jsonResponse.msg));

      // data is {id, name, lastName, dni, dob, phone, address, city, zip, email, password}
      if (jsonResponse.success) {
        var data = jsonResponse.data;
        storeRequestOnLocalStorage(data);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

// if id exists, then i don't change it
function storeRequestOnLocalStorage(data) {
  if(localStorage.getItem('id') == null) {
    localStorage.setItem("id", data.id);
    localStorage.setItem("name", data.name);
    localStorage.setItem("lastName", data.lastName);
    localStorage.setItem("dni", data.dni);
    localStorage.setItem("dob", fromMonthDayYearToYearMonthDay(data.dob));
    localStorage.setItem("phone", data.phone);
    localStorage.setItem("address", data.address);
    localStorage.setItem("city", data.city);
    localStorage.setItem("zip", data.zip);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
  }
}

/* 
NOTES FOR ANYONE WHO MANTAIN THIS CODE IN THE FUTURE (A.K.A. ME IN A WEEK/MONTH/YEAR/CENTURY):
- ELEMENTS ARE ORDERED BY APPEARANCE IN THE HTML FILE.
- FUNCTIONS TO VALIDATE ARE AT THE END, JUST BEFORE THIS, PLEASE MANTAIN THE ORDER.
- EACH ELEMENT MUST HAVE THE SELECTOR, THE BLUR AND FOCUS EVENTS AND THEN AN ELEMENT FOR THE OBSERVATIONS.
- THIS IS NOT PYTHON, BE CAREFUL WITH & AND &&
- IN SOME CASES, YOU MIGHT BE WONDERING, WHY DON'T YOU USE REGEX? WELL... I'M NOT ALLOWED'.
- SAME APPLIES FOR EVERYTHING THAT CAN BE DONE WITH ES6 OR NEWER.
- HAVE FUN!

// a comment line for those regex i did not use F
*/
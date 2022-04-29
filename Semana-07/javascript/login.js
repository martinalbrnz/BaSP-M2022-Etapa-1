window.onload = function () {
  // AUX VARIABLES
  var inputValues = [];
  var inputLabels  = ['Email', 'Password', 'Remember password'];
  // EMAIL VALIDATION
  var loginEmail = document.getElementById('login-email');
  loginEmail.onblur = validateEmail;
  loginEmail.onfocus = quitEmailAlerts;
  var emailInlineAlert = document.createElement('p');
  emailInlineAlert.classList.add('inline-alerts');

  function validateEmail() {
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var isValidated = false;
    
    if (loginEmail.value == '') {
      emailInlineAlert.textContent = 'Email is required';
      loginEmail.insertAdjacentElement('afterend', emailInlineAlert);
      inputValues[0] = 'Error! '.concat(emailInlineAlert.textContent);
    } else if (!emailRegExp.test(loginEmail.value)) {
      emailInlineAlert.textContent = 'Email is not valid';
      loginEmail.insertAdjacentElement('afterend', emailInlineAlert);
      inputValues[0] = 'Error! '.concat(emailInlineAlert.textContent);
    } else {
      inputValues[0] = loginEmail.value;
      isValidated = true;
    }
    return isValidated;
  }

  function quitEmailAlerts() {
    emailInlineAlert.remove();
  }

  // PASSWORD VALIDATION

  var loginPassword = document.getElementById('login-pass');
  loginPassword.onblur = validatePassword;
  loginPassword.onfocus = quitPasswordAlerts;
  var passwordInlineAlert = document.createElement('p');
  passwordInlineAlert.classList.add('inline-alerts');

  function validatePassword() {
    var isValidated = false;

    if (loginPassword.value.length == 0) {
      passwordInlineAlert.textContent = 'Password is required';
      loginPassword.insertAdjacentElement('afterend', passwordInlineAlert);
      inputValues[1] = 'Error! '.concat(passwordInlineAlert.textContent);
    } else if (loginPassword.value.length < 8) {
      passwordInlineAlert.textContent =
        'Password must have at least 8 characters';
      loginPassword.insertAdjacentElement('afterend', passwordInlineAlert);
      inputValues[1] = 'Error! '.concat(passwordInlineAlert.textContent);
    } else {
      inputValues[1] = loginPassword.value;
      isValidated = true;
    }
    return isValidated;
  }

  function quitPasswordAlerts() {
    passwordInlineAlert.remove();
  }

  // LOGIN BUTTON

  var loginCreateButton = document.getElementsByClassName('login-button')[0];

  var loginModal = document.getElementById('login-modal');
  var loginModalCloseButton = document.getElementsByClassName('close')[0];
  var loginModalTitle = document.getElementById('modal-title');
  var loginRememberMe = document.getElementById('remember-me');
  var loginModalContent = document.getElementsByClassName('modal-content')[0];
  var inlineAlerts = document.getElementsByClassName('inline-alerts');
  var loginModalListItems = document.getElementsByClassName('modal-list-item');
  
  loginCreateButton.addEventListener('click', loginCreateButtonModal);
  loginModalCloseButton.addEventListener('click', function() {
    loginModal.classList.toggle('show-modal');
  });
  
  function loginCreateButtonModal() {
    validateEmail(loginEmail);
    validatePassword(loginPassword);
    
    loginModalTitle.innerHTML = inlineAlerts.length > 0 ? 'ERROR' : 'Login successful!';

    inputValues[2] = loginRememberMe.checked;

    for (var x = loginModalListItems.length; x > 0; x--) {
      loginModalContent.removeChild(loginModalContent.lastChild);
    }

    for (var x = 0; x < inputValues.length; x++) {
      var listItem = document.createElement('p');
      listItem.classList.add('modal-list-item');

      if (typeof(inputValues[x]) != 'boolean' && inputValues[x].slice(0,5) == 'Error') {
        listItem.classList.add('error-text');
      }
      else if (typeof(inputValues[x]) != 'boolean') {
        listItem.classList.add('correct-text');
      }
      
      listItem.innerHTML = ''.concat(inputLabels[x], ': ', inputValues[x]);
      loginModalContent.insertAdjacentElement('beforeend', listItem);
    }
    
    loginModal.classList.toggle('show-modal');

    if (validatePassword(loginPassword) && validateEmail(loginEmail)) {
      var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
      var selectors = [loginEmail, loginPassword];

      loginFetch(url, selectors);
    }
  };
};

/*--------------- AUX FUNCTIONS, VALIDATORS AND UTILITIES ---------------*/
// i could have this functions on other file and import the functions i need

// list -> string
// [name, password]=> '?name=nameinput&password=passwordinput'
function joinQueryParams(selectorsList) {
  var myArr = [];
  for (var x = 0 ; x < selectorsList.length ; x++) {
    myArr[x] = selectorsList[x].name.concat('=', selectorsList[x].value);
  }

  return '?'.concat(myArr.join('&'));
}

// string, list -> alert
// url is a string
// selectorsList is a list of selectors 
function loginFetch(url, selectorsList) {
  var fetchUrl = url.concat(joinQueryParams(selectorsList));
  fetch(fetchUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonResponse) {
      var header = jsonResponse.success ? 'Login successful!' : 'Error!';
      alert(header.concat('\n', jsonResponse.msg));
    })
    .catch(function(error) {
      console.log(error);
    });
}
/* 
NOTES FOR ANYONE WHO MANTAIN THIS CODE IN THE FUTURE (A.K.A. ME IN A WEEK/MONTH/YEAR/CENTURY):
- ELEMENTS ARE ORDERED BY APPEARANCE IN THE HTML FILE.
- FUNCTIONS TO VALIDATE ARE AT THE END, JUST BEFORE THIS, PLEASE MANTAIN THE ORDER.
- EACH ELEMENT MUST HAVE THE SELECTOR, THE BLUR AND FOCUS EVENTS AND THEN AN ELEMENT FOR THE OBSERVATIONS.
- THIS IS NOT PYTHON, BE CAREFUL WITH & AND &&
- IN SOME CASES, YOU MIGHT BE WONDERING, WHY DON'T YOU USE REGEX? WELL... I'M NOT ALLOWED.
- SAME APPLIES FOR EVERYTHING THAT CAN BE DONE WITH ES6 OR NEWER.
- HAVE FUN!
*/

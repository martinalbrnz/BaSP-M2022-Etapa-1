window.onload = function () {
  // AUX VARIABLES
  var inputValues = [];
  var inputLabels  = ['Email', 'Password', 'Remember password'];
  // EMAIL VALIDATION
  var loginEmail = document.getElementById('login-email');
  loginEmail.addEventListener('blur', validateEmail);
  loginEmail.addEventListener('focus', quitEmailAlerts);
  var emailInlineAlert = document.createElement('p');
  emailInlineAlert.classList.add('inline-alerts');

  function validateEmail() {
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    
    if (loginEmail.value == '') {
      emailInlineAlert.textContent = 'Email is required';
      loginEmail.insertAdjacentElement('afterend', emailInlineAlert);
    } else if (!emailRegExp.test(loginEmail.value)) {
      emailInlineAlert.textContent = 'Email is not valid';
      loginEmail.insertAdjacentElement('afterend', emailInlineAlert);
    } else {
      inputValues[0] = loginEmail.value;
    }
  }

  function quitEmailAlerts() {
    emailInlineAlert.remove();
  }

  // PASSWORD VALIDATION

  var loginPassword = document.getElementById('login-pass');
  loginPassword.addEventListener('blur', validatePassword);
  loginPassword.addEventListener('focus', quitPasswordAlerts);
  var passwordInlineAlert = document.createElement('p');
  passwordInlineAlert.classList.add('inline-alerts');

  function validatePassword() {
    if (loginPassword.value.length == 0) {
      passwordInlineAlert.textContent = 'Password is required';
      loginPassword.insertAdjacentElement('afterend', passwordInlineAlert);
    } else if (loginPassword.value.length < 8) {
      passwordInlineAlert.textContent =
        'Password must have at least 8 characters';
      loginPassword.insertAdjacentElement('afterend', passwordInlineAlert);
    } else {
      inputValues[1] = loginPassword.value;
    }
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
  loginModalCloseButton.addEventListener('click', loginCreateButtonModal);
  
  function loginCreateButtonModal() {
    validateEmail(loginEmail);
    validatePassword(loginPassword);
    
    loginModalTitle.innerHTML = inlineAlerts.length > 0 ? "ERROR" : "Login successful!";

    inputValues[2] = loginRememberMe.checked;

    for (var x = loginModalListItems.length; x > 0; x--) {
      loginModalContent.removeChild(loginModalContent.lastChild);
    }

    if (inlineAlerts.length > 0) {
      for (var x = 0; x < inlineAlerts.length; x++) {
        var listItem = document.createElement("p");
        listItem.classList.add("modal-list-item");
        listItem.innerHTML = ''.concat(x + 1, ': ', inlineAlerts[x].innerHTML);
        loginModalContent.insertAdjacentElement("beforeend", listItem);
      }
    } else {
      for (var x = 0; x < inputValues.length; x++) {
        var listItem = document.createElement("p");
        listItem.classList.add("modal-list-item");
        listItem.innerHTML = ''.concat(inputLabels[x], ': ', inputValues[x]);
        loginModalContent.insertAdjacentElement("beforeend", listItem);
      }
    }
    
    loginModal.classList.toggle('show-modal');
  };
};

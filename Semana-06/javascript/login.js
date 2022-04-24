window.onload = function () {
  var loginEmail = document.getElementById("login-email");
  var loginPassword = document.getElementById("login-pass");
  var emailInlineAlert = document.createElement("p");
  emailInlineAlert.classList.add("inline-alerts");

  var passwordInlineAlert = document.createElement("p");
  passwordInlineAlert.classList.add("inline-alerts");

  loginEmail.addEventListener("blur", validateEmail);
  loginPassword.addEventListener("blur", validatePassword);

  loginEmail.addEventListener("focus", quitEmailAlerts);
  loginPassword.addEventListener("focus", quitPasswordAlerts);

  function validateEmail() {
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (loginEmail.value == "") {
      emailInlineAlert.textContent = "* Email is required";
      loginEmail.insertAdjacentElement("afterend", emailInlineAlert);
    } else if (!emailRegExp.test(loginEmail.value)) {
      emailInlineAlert.textContent = "* Email is not valid";
      loginEmail.insertAdjacentElement("afterend", emailInlineAlert);
    }
  }

  function validatePassword() {
    if (loginPassword.value.length == 0) {
      passwordInlineAlert.textContent = "* Password is required";
      loginPassword.insertAdjacentElement("afterend", passwordInlineAlert);
    } else if (loginPassword.value.length < 8) {
      passwordInlineAlert.textContent =
        "* Password must have at least 8 characters";
      loginPassword.insertAdjacentElement("afterend", passwordInlineAlert);
    }
  }

  function quitEmailAlerts() {
    emailInlineAlert.remove();
  }

  function quitPasswordAlerts() {
    passwordInlineAlert.remove();
  }
};

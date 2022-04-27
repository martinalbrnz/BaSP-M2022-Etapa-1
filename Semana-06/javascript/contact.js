// WIP

window.onload = function() {
  // AUX VARIABLES
  var inputValues = [];
  var inputLabels = ['Name', 'Email', 'Area', 'Message'];

  // CONTACT NAME 
  var contactName = document.getElementById('contact-name');
  contactName.onblur = validateName;
  contactName.onfocus = quitContactNameAlerts;
  var contactNameInlineAlert = document.createElement('p');
  contactNameInlineAlert.classList.add('inline-alerts');

  function validateName() {
    if (contactName.value == '') {
      contactNameInlineAlert.textContent = 'Name is a required field';
      contactName.insertAdjacentElement('afterend', contactNameInlineAlert);
    } else if (contactName.value.length < 3) {
      contactNameInlineAlert.textContent = 'Name must have at least 3 characters';
      contactName.insertAdjacentElement('afterend', contactNameInlineAlert);
    } else if (hasNumbers(contactName.value)) {
      contactNameInlineAlert.textContent = 'Name can\'t contain a number';
      contactName.insertAdjacentElement('afterend', contactNameInlineAlert);
    } else {
      inputValues[0] = contactName.value;
    }
  }

  function quitContactNameAlerts() {
    contactNameInlineAlert.remove();
  }

  // CONTACT EMAIL
  var contactEmail = document.getElementById('contact-email');
  contactEmail.onblur = validateEmail;
  contactEmail.onfocus = quitContactEmailAlerts;
  var contactEmailInlineAlert = document.createElement('p');
  contactEmailInlineAlert.classList.add('inline-alerts');

  function validateEmail() {
    var emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (contactEmail.value == '') {
      contactEmailInlineAlert.textContent = 'Email is required';
      contactEmail.insertAdjacentElement('afterend', contactEmailInlineAlert);
    } else if (!emailRegExp.test(contactEmail.value)) {
      contactEmailInlineAlert.textContent = 'Email is not valid';
      contactEmail.insertAdjacentElement('afterend', contactEmailInlineAlert);
    } else {
      inputValues[1] = contactEmail.value;
    }
  }

  function quitContactEmailAlerts() {
    contactEmailInlineAlert.remove();
  }

  // CONTACT AREA 
  var contactArea = document.getElementById('contact-area');
  contactArea.onblur = validateArea;
  contactArea.onfocus = quitContactAreaAlerts;
  var contactAreaInlineAlert = document.createElement('p');
  contactAreaInlineAlert.classList.add('inline-alerts');

  var possibleAreas = ['Human Resources', 'IT', 'Commerce'];

  function validateArea() {
    if (!possibleAreas.includes(contactArea.value)){
      contactAreaInlineAlert.textContent = 'Area is not valid';
      contactArea.insertAdjacentElement('afterend', contactAreaInlineAlert);
    } else {
      inputValues[2] = contactArea.value;
    }
  }

  function quitContactAreaAlerts() {
    contactAreaInlineAlert.remove();
  }

  // CONTACT MESSAGE 
  var contactMessage = document.getElementById('contact-message');
  contactMessage.onblur = validateMessage;
  contactMessage.onfocus = quitContactMessageAlerts;
  var contactMessageInlineAlert = document.createElement('p');
  contactMessageInlineAlert.classList.add('inline-alerts');
  
  function validateMessage() {
    if (contactMessage.value == '') {
      contactMessageInlineAlert.textContent = 'Message is a required field';
      contactMessage.insertAdjacentElement('afterend', contactMessageInlineAlert);
    } else if (contactMessage.value.length < 3) {
      contactMessageInlineAlert.textContent = 'Message must have at least 3 characters';
      contactMessage.insertAdjacentElement('afterend', contactMessageInlineAlert);
    } else {
      inputValues[3] = contactMessage.value;
    }
  }
        
  function quitContactMessageAlerts() {
    contactMessageInlineAlert.remove();
  }

  // SEND MESSAGE BUTTON
  var contactCreateButton = document.getElementsByClassName("contact-form-send")[0];
  var contactModal = document.getElementById("contact-modal");
  var contactModalCloseButton = document.getElementsByClassName("close")[0];
  var contactModalTitle = document.getElementById("modal-title");
  var contactModalContent = document.getElementsByClassName("modal-content")[0];
  var inlineAlerts = document.getElementsByClassName("inline-alerts");
  var contactModalListItems = document.getElementsByClassName("modal-list-item");

  contactCreateButton.onclick = contactCreateButtonModal;
  contactModalCloseButton.onclick = contactCreateButtonModal;

  function contactCreateButtonModal() {
    validateName(contactName);
    validateEmail(contactEmail);
    validateArea(contactArea);
    validateMessage(contactMessage);

    contactModalTitle.innerHTML = inlineAlerts.length > 0 ? "ERROR" : "Message sent!";

    for (var x = contactModalListItems.length; x > 0; x--) {
      contactModalContent.removeChild(contactModalContent.lastChild);
    }

    if (inlineAlerts.length > 0) {
      for (var x = 0; x < inlineAlerts.length; x++) {
        var listItem = document.createElement("p");
        listItem.classList.add("modal-list-item");
        listItem.innerHTML = ''.concat(x + 1, ': ', inlineAlerts[x].innerHTML);
        contactModalContent.insertAdjacentElement("beforeend", listItem);
      }
    } else {
      for (var x = 0; x < inputValues.length; x++) {
        var listItem = document.createElement("p");
        listItem.classList.add("modal-list-item");
        listItem.innerHTML = ''.concat(inputLabels[x], ': ', inputValues[x]);
        contactModalContent.insertAdjacentElement("beforeend", listItem);
      }
    }
    contactModal.classList.toggle("show-modal");
  }

  // RESET BUTTON 

  var contactResetButton = document.getElementsByClassName("contact-form-reset")[0];
  contactResetButton.onclick = contactResetFields;

  function contactResetFields() {
    // Delete inline alerts
    contactNameInlineAlert.remove();
    contactEmailInlineAlert.remove();
    contactAreaInlineAlert.remove();
    contactMessageInlineAlert.remove();

    // reset field values to default
    contactName.value = '';
    contactArea.value = 'Select area';
    contactEmail.value = '';
    contactMessage.value = '';
  }
}

/*--------------- AUX FUNCTIONS, VALIDATORS AND UTILITIES ---------------*/
// i could have this functions on other file and import the functions i need

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
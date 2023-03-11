"use strict";

const $ = (selector) => document.querySelector(selector);

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const onReset = (evt) => {
  //TODO:: Reset the reset-able fields
};

const onSubmit = (evt) => {
  resetErrors();

  //TODO:: Use this boolean to keep track of any errors because you need to prevent the settings
  //       from updating if even one field is wrong
  let formErrors = false;

  //TODO:: Make sure name fields are not empty
 /* $(document).ready(function() {
    $('#update_profile').click(function() {
        var value = document.getElementById('first_name').value;
        if (value === '') {
            alert('Enter your name');
        }
    })
});

$(document).ready(function() {
  $('#update_profile').click(function() {
      var value = document.getElementById('last_name').value;
      if (value === '') {
          alert('Enter your name');
      }
  })
});

*/
  //TODO:: Validate email with the Regular Expression
  function update_profile() {
    const input = document.querySelector("#email");
    const display = document.querySelector("#email_error");
    if (input.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
      display.innerHTML = input.value + ' is valid';
    } else {
      display.innerHTML = input.value + ' is not a valid email';
    }
  }
  //TODO:: Validate password with the Regular Expression
  //TODO:: Validate passwords to be matching

  //TODO:: Make sure date of birth is in the past.

  //TODO:: check you formErrors boolean and update the fields if still false

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#update_profile").addEventListener("click", onSubmit);

  $("#reset_form").addEventListener("click", onReset);

});

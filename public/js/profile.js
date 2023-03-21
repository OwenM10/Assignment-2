"use strict";

const $ = (selector) => document.querySelector(selector);

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const onReset = (evt) => {
  resetErrors();
  //TODO:: Reset the reset-able fields
  $("#first_name").value = "";
  $("#last_name").value = "";
  $("#email").value = "";
  $("#password").value = "";
  $("#confirm_password").value = "";

  evt.preventDefault();
};

const resetErrors = () => {
  $("#name_error").textContent = "";
  $("#password_error").textContent = "";
  $("#email_error").textContent = "";
};

const onSubmit = (evt) => {
  resetErrors();
  evt.preventDefault();
  //TODO:: Use this boolean to keep track of any errors because you need to prevent the settings
  //       from updating if even one field is wrong
  let formErrors = false;

  //TODO:: Make sure name fields are not empty
  //TODO:: Validate email with the Regular Expression
  //TODO:: Validate password with the Regular Expression
  //TODO:: Validate passwords to be matching
  //TODO:: Make sure date of birth is in the past.
  //TODO:: check you formErrors boolean and update the fields if still false

  let firstName = $("#first_name").value;
  let lastName = $("#last_name").value;
  let email = $("#email").value;
  let password = $("#password").value;
  let confirmPassword = $("#confirm_password").value;
  let dob = new Date($("#dob").value);
  let today = new Date();

  if (firstName == "" || lastName == "") {
    $("#name_error").textContent = "Name fields can't be empty.";
    formErrors = true;
  }
  if (!emailRegEx.test(email)) {
    $("#email_error").textContent = "Email is not valid.";
    formErrors = true;
  }

  if (!passwordRegEx.test(password)) {
    $("#password_error").textContent = "Password is not secure.";
    formErrors = true;
  }

  if (password != confirmPassword) {
    $("#password_error").textContent = "Passwords do not match.";
    formErrors = true;
  }

  if (today.setHours(0, 0, 0, 0) < dob) {
    $("#dob_error").textContent = "Date of birth is not valid.";
    formErrors = true;
  }

  if (!formErrors) {
    $("user_dob").textContent = dob.toDateString();

    $("#user_password_last_changed").textContent = today.toDateString();

    $("#user_email").textContent = $("#email");
    $("#user_last_name").textContent = $("#last_name");
    $("#user_first_name").textContent = $("#first_name");
  }

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#update_profile").addEventListener("click", onSubmit);

  $("#reset_form").addEventListener("click", onReset);
});

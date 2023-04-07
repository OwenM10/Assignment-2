"use strict";

const $ = (selector) => document.querySelector(selector);
// Defines the regex for the email format required
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// Defines the regex for the password format required
const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;
// When reset button is clicked it will reset first name, last name, email, password, and password conf
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
// Clears any error messages
const resetErrors = () => {
  $("#name_error").textContent = "";
  $("#password_error").textContent = "";
  $("#email_error").textContent = "";
};

const onSubmit = (evt) => {
  resetErrors();
  evt.preventDefault();
  // Defines variable formErrors
  let formErrors = false;

 
//assigns value of input with id of first_name to variable "firstName"
  let firstName = $("#first_name").value;
  //assigns value of input with id of last_name to variable "lastName"
  let lastName = $("#last_name").value;
  //assigns value of input with id of email to variable "email"
  let email = $("#email").value;
  //assigns value of input with id of password to variable "password"
  let password = $("#password").value;
  //assigns value of input with id of confirm_password to variable "confirmPassword"
  let confirmPassword = $("#confirm_password").value;
  //assigns value of input with id of dob to variable "dob"
  let dob = new Date($("#dob").value);
  //assigns value of new Date to variable "today"
  let today = new Date();
// Checks for errors
  if (firstName == "" || lastName == "") {
    $("#name_error").textContent = "Name fields can't be empty.";
    formErrors = true;
  }
  // Checks for errors
  if (!emailRegEx.test(email)) {
    $("#email_error").textContent = "Email is not valid.";
    formErrors = true;
  }
// Checks for errors
  if (!passwordRegEx.test(password)) {
    $("#password_error").textContent = "Password is not secure.";
    formErrors = true;
  }
// Checks for errors
  if (password != confirmPassword) {
    $("#password_error").textContent = "Passwords do not match.";
    formErrors = true;
  }
// Checks for errors

  if (today.setHours(0, 0, 0, 0) < dob) {
    $("#dob_error").textContent = "Date of birth is not valid.";
    formErrors = true;
  }
// Will set values if no errors are present
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

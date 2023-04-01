"use strict";

const $ = (selector) => document.querySelector(selector);

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const onReset = (evt) => {
  resetErrors();
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


hdg2.classlist.toggle("#name_error");
hdg2.classlist.toggle("#password_error");
hdg2.classlist.toggle("#email_error");



const onSubmit = (evt) => {
  resetErrors();
  evt.preventDefault();

  let formErrors = false;


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

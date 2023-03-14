"use strict";

const $ = (selector) => document.querySelector(selector);

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const onReset = (evt) => {
  resetErrors();
  //TODO:: Reset the reset-able fields
  $("#notifications").checked = true;
  $("#eco").checked = true;
  $("#tempature").value = 21;
  $("#location").value = "L7W 4T8";

  evt.preventDefault();
};

const resetErrors = () => {
  $("#temperature_error").textContent = "";
  $("#location_error").textContent = "";
  console.error("Fields Reset");
};

const onSubmit = (evt) => {
  evt.preventDefault();

  //TODO::Reset any errors before submitting
  resetErrors();
  //TODO:: Set notifications since it doesn't need to be validated
  let notifications = $("#notifications").checked;

  $("#setting_notifications").textContent = notifications ? "On" : "Off";

  //TODO:: Set lighting mode with a for loop since it doesn't need to be validated
  let lightingModeOptions = document.querySelectorAll("[name='lighting_mode']");

  for (let i = 0; i < lightingModeOptions.length; i++) {
    if (lightingModeOptions[i].checked) {
      $("#setting_lighting_mode").textContent = lightingModeOptions[i].value;
    }
  }

  //TODO:: Validate the postal code with the Regular Expression,
  //TODO:: Display an error if not valid
  let location = $("#location").value;

  if (postalRegEx.test(location)) {
    $("#setting_location").textContent = location;
  } else {
    $("#location_error").textContent =
      "Please set a properly 'X0X 0X0' formatted address.";
  }

  //TODO:: Validate the temperature by checking the range and if it's a number
  //TODO:: Display an error if not valid

  let temperature = $("#temperature").value;
  let temperatureError = $("#temperature_error");

  if (isNaN(temperature) || temperature == "") {
    temperatureError.textContent = "This is not a valid temperature selection.";
  } else if (temperature > 25 || temperature < 10) {
    temperatureError.textContent =
      "Please select a temperature between 10 and 25 C";
  } else {
    $("#setting_temperature").textContent = temperature;
  }
};
/*
  if (15 < $("#temperature").value && $("#temperature").value < 25) {
    $("#setting_temperature").textContent = $("#temperature").value;
  } else {
    $("#temperature_error").textContent = "ERROR";
  }
};
*/
document.addEventListener("DOMContentLoaded", () => {
  //TODO:: Add current date
  $("#date_display").textContent = new Date().toDateString();
  //TODO:: Add Reset Form listener
  $("#reset_form").addEventListener("click", onReset);
  //TODO:: Add Submit Form listener
  $("#update_settings").addEventListener("click", onSubmit);
});

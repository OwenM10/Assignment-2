"use strict";
// document.querySelector assigned selector $
const $ = (selector) => document.querySelector(selector);
// make sure postal code is in proper format
const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;


//Resets dashboard settings to default values when reset button is pressed
const onReset = (evt) => {
  resetErrors();
  
  $("#notifications").checked = true;
  $("#eco").checked = true;
  $("#temperature").value = 21;
  $("#location").value = "L7W 4T8";

  evt.preventDefault();
};
//Defines resetErrors function where when called will reset/clear the temp and location errors
const resetErrors = () => {
  $("#temperature_error").textContent = "";
  $("#location_error").textContent = "";
  console.error("Fields Reset");
};
//Defines onSubmit function
const onSubmit = (evt) => {
  //prevents default values
  evt.preventDefault();

  //calls reset errors function
  resetErrors();
  
  //declares variable notifications and assigns it the boolean value of whether the checkbox with the ID notifications is checked or not.
  let notifications = $("#notifications").checked;
//sets setting_notifications to "on" or "off" based on notifications value
  $("#setting_notifications").textContent = notifications ? "On" : "Off";

  //selects all the elements that have a name attribute of lighting_mode and assigns them to a variable lightingModeOptions
  let lightingModeOptions = document.querySelectorAll("[name='lighting_mode']");
//selects all lighting_mode attribute and assigns to variable lighting mode options
  for (let i = 0; i < lightingModeOptions.length; i++) {
    if (lightingModeOptions[i].checked) {
      $("#setting_lighting_mode").textContent = lightingModeOptions[i].value;
    }
  }

  //assigns value of input with id of loaction to variable "location"
  let location = $("#location").value;
//if the entered postal format is valid it will set setting_location to value of location
//if not valid format will display message
  if (postalRegEx.test(location)) {
    $("#setting_location").textContent = location;
  } else {
    $("#location_error").textContent =
      "Please set a properly 'X0X 0X0' formatted address.";
  }

 
//assigns value of input with id of temperature to variable "temperature"
  let temperature = $("#temperature").value;
 // assigns element with id of temperature_error to variable "temperatureError" 
  let temperatureError = $("#temperature_error");
//checks if temperature is valid
//if not, will display error message
//If valid will set setting_temperature to variable value of "temperature"
  if (isNaN(temperature) || temperature == "") {
    temperatureError.textContent = "This is not a valid temperature selection.";
  } else if (temperature > 25 || temperature < 10) {
    temperatureError.textContent =
      "Please select a temperature between 10 and 25 C";
  } else {
    $("#setting_temperature").textContent = temperature;
  }
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////




//decalre function called TempTimerFunction
function TempTimerFunction() {
  // Get the input time value
  const timeInput = document.getElementById("time");
//defines format for time
  const timeRegex = /^([0-9]{1,2}):([0-9]{2})$/;
  //gets value of input and puts in variable inputTime
  const inputTime = timeInput.value;
//declares variable ogtemp and stores temperature value
  let ogtemp = temperature;
  //get value of element with id of temp and stores in variable "temp"
  let temp = $("#temp").value;
  $("#setting_temperature").textContent = temp;
  // Convert the input time to total minutes
  if (timeRegex.test(inputTime)) {
    const [hours, minutes] = inputTime.split(":");
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);

    // Set the countdown target time in milliseconds
    const timeSet = totalMinutes * 60 * 1000;
    const now = new Date().getTime();
    const countDownDate = now + timeSet;

    // Update the countdown every second
    const timer = setInterval(function() {
      const currentDate = new Date().getTime();
      const distance = countDownDate - currentDate;

      // Calculate the remaining time in hours, minutes, and seconds
      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the remaining time in the tempTimer element
      document.getElementById("tempTimer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

      // Clear the interval and display a message when the countdown is finished
      if (distance <= 0) {
        clearInterval(timer);
        $("#setting_temperature").textContent = $("#temperature").value;
        document.getElementById("tempTimer").innerHTML = "Countdown finished!";
      }
    }, 1000);
  } else {
    console.log("Invalid time format.");
  }
}

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  
  $("#date_display").textContent = new Date().toDateString();
  
  $("#reset_form").addEventListener("reset", onReset);
  
  $("#update_settings").addEventListener("click", onSubmit);
  //$("#start_timer").addEventListener("click", onSubmit);
});

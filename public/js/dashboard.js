"use strict";

const $ = (selector) => document.querySelector(selector);

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;



const onReset = (evt) => {
  resetErrors();
  
  $("#notifications").checked = true;
  $("#eco").checked = true;
  $("#temperature").value = 21;
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

  
  resetErrors();
  
  let notifications = $("#notifications").checked;

  $("#setting_notifications").textContent = notifications ? "On" : "Off";

  
  let lightingModeOptions = document.querySelectorAll("[name='lighting_mode']");

  for (let i = 0; i < lightingModeOptions.length; i++) {
    if (lightingModeOptions[i].checked) {
      $("#setting_lighting_mode").textContent = lightingModeOptions[i].value;
    }
  }

  
  let location = $("#location").value;

  if (postalRegEx.test(location)) {
    $("#setting_location").textContent = location;
  } else {
    $("#location_error").textContent =
      "Please set a properly 'X0X 0X0' formatted address.";
  }

 

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
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////





function TempTimerFunction() {

console.log ("BOZO");




const timeInput = document.getElementById("time");


  const timeRegex = /^([0-9]{1,2}):([0-9]{2})$/;
  const inputTime = timeInput.value;

  if (timeRegex.test(inputTime)) {
    const [hours, minutes] = inputTime.split(":");
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    console.log("Total minutes:", totalMinutes);
  } else {
    console.log("Invalid time format.");
  }
;

// Get today's date and time
const now = new Date().getTime();

// Set the date we're counting down to
const timeSet = 0; // Replace with the target time in milliseconds
const countDownDate = now - timeSet;

// Update the count down every 1 second
const timer = setInterval(function() {

  // Get the current date and time
  const currentDate = new Date().getTime();
    
  // Find the distance between the current time and the count down date
  const distance = countDownDate - currentDate;
    
  // Time calculations for hours, minutes and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id=tempTimer
  document.getElementById("tempTimer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    
}, 1000);
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

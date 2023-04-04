"use strict";

const $ = (selector) => document.querySelector(selector); // selects an element in the DOM

const division = ()=>{ // defines a function called division that takes no parameters

    let division1 = $("#division_1").value; // gets the value of an input field with id "division_1"
    console.log(division1); // logs the value of division1 to the console

    let division2 = $("#division_2").value; // gets the value of an input field with id "division_2"
    console.log(division2); // logs the value of division2 to the console

    let result = division1 / division2; // divides division1 by division2 and assigns the result to the variable result

    $("#division_result").value = result; // sets the value of an input field with id "division_result" to the value of result
    $("#int_division_result").value = parseInt(result); // sets the value of an input field with id "int_division_result" to the integer value of result
    $("#floor_division_result").value = Math.floor(result); // sets the value of an input field with id "floor_division_result" to the floor value of result
    $("#ceiling_division_result").value = Math.ceil(result); // sets the value of an input field with id "ceiling_division_result" to the ceiling value of result
    $("#rounded_division_result").value = Math.round(result); // sets the value of an input field with id "rounded_division_result" to the rounded value of result
}

const modulo = ()=> { // defines a function called modulo that takes no parameters
    let modulo1 = $("#modulo_1").value; // gets the value of an input field with id "modulo_1"
    let modulo2 = $("#modulo_2").value; // gets the value of an input field with id "modulo_2"

    let result = modulo1 % modulo2; // calculates the modulo (remainder) of modulo1 divided by modulo2 and assigns the result to the variable result

    $("#modulo_result").value = result; // sets the value of an input field with id "modulo_result" to the value of result
}

const forLoopIteration = ()=> { // defines a function called forLoopIteration that takes no parameters
    let loopLength = $("#for_limit").value; // gets the value of an input field with id "for_limit" and assigns it to the variable loopLength
    console.log(loopLength); // logs the value of loopLength to the console

    let loopIncrement = parseFloat($("#for_increment").value); // gets the value of an input field with id "for_increment", parses it as a float, and assigns it to the variable loopIncrement
    console.log(loopIncrement); // logs the value of loopIncrement to the console

    let loopCounter = parseFloat($("#for_counter").value); // gets the value of an input field with id "for_counter", parses it as a float, and assigns it to the variable loopCounter
    console.log(loopCounter); // logs the value of loopCounter to the console

    let incrementDirection = $("#for_increment_direction"); // gets the value of an input field with id "for_increment_direction" and assigns it to the variable incrementDirection
    console.log(incrementDirection); // logs the value of incrementDirection to the console

    if (incrementDirection === "negative"){ // checks if the value of incrementDirection is "negative"
        loopIncrement = loopIncrement * -1; // if it is, multiplies loopIncrement by -1
    
    for (let i = 0; i < loopLength; i++){

    loopCounter = loopCounter + loopIncrement

    }
    
    
    $("#for_result").value = loopCounter;
}
}
//Add all calculation functions
document.addEventListener("DOMContentLoaded", () => {
    $("#division_btn").addEventListener("click", division);
    $("#modulo_btn").addEventListener("click", modulo);
    $("#for_loop_btn").addEventListener("click", forLoopIteration);
});

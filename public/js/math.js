"use strict";

const $ = (selector) => document.querySelector(selector); 
// defines a function called division 
const division = ()=>{ 
// gets the value of an input field with id "division_1"
    let division1 = $("#division_1").value; 
    // logs the value of division1 to the console
    console.log(division1); 
// gets the value of an input field with id "division_2"
    let division2 = $("#division_2").value; 
    // logs the value of division2 to the console
    console.log(division2); 
// divides division1 by division2 and assigns the result to the variable resul
    let result = division1 / division2; 
// sets the value of an input field with id "division_result" to the value of result
    $("#division_result").value = result; 
    // sets the value of an input field with id "int_division_result" to the integer value of result
    $("#int_division_result").value = parseInt(result); 
    // sets the value of an input field with id "floor_division_result" to the floor value of result
    $("#floor_division_result").value = Math.floor(result);
    // sets the value of an input field with id "ceiling_division_result" to the ceiling value of result 
    $("#ceiling_division_result").value = Math.ceil(result); 
    // sets the value of an input field with id "rounded_division_result" to the rounded value of result
    $("#rounded_division_result").value = Math.round(result); 
}
// defines a function called modulo 
const modulo = ()=> { 
    // gets the value of an input field with id "modulo_1"
    let modulo1 = $("#modulo_1").value;
    // gets the value of an input field with id "modulo_2" 
    let modulo2 = $("#modulo_2").value; 
// calculates the modulo of modulo1 divided by modulo2 and assigns the result to the variable result
    let result = modulo1 % modulo2; 
// sets the value of an input field with id "modulo_result" to the value of result
    $("#modulo_result").value = result; 
}
// defines a function called forLoopIteration
const forLoopIteration = ()=> { 
    // gets the value of an input field with id "for_limit" and assigns it to the variable loopLength
    let loopLength = $("#for_limit").value; 
    // logs the value of loopLength to the console
    console.log(loopLength); 
// gets the value of an input field with id "for_increment" parses it as a float, and assigns it to the variable loopIncrement
    let loopIncrement = parseFloat($("#for_increment").value); 
    // logs the value of loopIncrement to the console
    console.log(loopIncrement); 
// gets the value of an input field with id "for_counter", parses it as a float, and assigns it to the variable loopCounter
    let loopCounter = parseFloat($("#for_counter").value); 
    // logs the value of loopCounter to the console
    console.log(loopCounter); 
// gets the value of an input field with id "for_increment_direction" and assigns it to the variable incrementDirection
    let incrementDirection = $("#for_increment_direction"); 
    // logs the value of incrementDirection to the console
    console.log(incrementDirection); 
// checks if the value of incrementDirection is "negative"
    if (incrementDirection === "negative"){ 
        // if it is, multiplies loopIncrement by -1
        loopIncrement = loopIncrement * -1; 
    
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

"use strict";

const $ = (selector) => document.querySelector(selector);

const division = ()=>{

    let division1 = $("#division_1").value;
    console.log(division1);

    let division2 = $("#division_2").value;
    console.log(division2);

    let result = division1 / division2; 


    $("#division_result").value = result;
    $("#int_division_result").value = parseInt(result);
    $("#floor_division_result").value = Math.floor(result);
    $("#ceiling_division_result").value = Math.ceil(result);
    $("#rounded_division_result").value = Math.round(result);

}

const modulo = ()=> {
    let modulo1 = $("#modulo_1").value;
    let modulo2 = $("#modulo_2").value;

    let result = modulo1 % modulo2;

    $("#modulo_result").value = result;
}


const forLoopIteration = ()=> {
    let loopLength = $("#for_limit").value;
    console.log(loopLength);

    let loopIncrement = parseFloat($("#for_increment").value);
    console.log(loopIncrement);

    let loopCounter = parseFloat($("#for_counter").value);
    console.log(loopCounter);

    let incrementDirection = $("#for_increment_direction");
    console.log(incrementDirection);

    if (incrementDirection === "negative"){
        loopIncrement = loopIncrement * -1;
    }
    
    for (let i = 0; i < loopLength; i++){

    loopCounter = loopCounter + loopIncrement

    }
    
    
    $("#for_result").value = loopCounter;
}

//Add all calculation functions
document.addEventListener("DOMContentLoaded", () => {
    $("#division_btn").addEventListener("click", division);
    $("#modulo_btn").addEventListener("click", modulo);
    $("#for_loop_btn").addEventListener("click", forLoopIteration);
});

"use strict";

const $ = (selector) => document.querySelector(selector);



var slider_img = document.querySelector('.slider-img');
//Defines a array for the images under the variable "images"
var images = ['bmw.jpg', 'ferrari.jpg', 'koenigsegg.jpg', 'pagani.jpg', 'porche.jpeg'];
//current img index
var i =0; 
// when the prev button is pressed it subtracts one from the image index
function prev(){
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}
// when the next button is pressed it adds one to the image index
function next(){
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'images/'+images[i] );
}

setInterval(function(){
    next();
}, 4000);

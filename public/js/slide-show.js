"use strict";

const $ = (selector) => document.querySelector(selector);



var slider_img = document.querySelector('.slider-img');
var images = ['bmw.jpg', 'ferrari.jpg', 'koenigsegg.jpg', 'pagani.jpg', 'porche.jpeg'];
var i =0; //current img index

function prev(){
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}

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

"use strict";

const $ = (selector) => document.querySelector(selector);

let imageCounter = 0;


const caption = $("#caption");
const mainImage = $("#main_image");
let imageCache = [];

const swapImage = ()=>{
    imageCounter = (imageCounter +1) % imageCache.length;

    mainImage.src = imageCache[imageCounter].src;
    mainImage.alt = imageCache[imageCounter].alt;

    caption.textContent = imageCache[imageCounter].alt;
}

document.addEventListener("DOMContentLoaded", () => {
    

    const links= document.querySelectorAll("a");

    let image;

    

    for (let link of links){
        image = new Image();

        image.src = link.href;
        image.alt = link.title;

        imageCache.push(image);
    }

    setInterval(swapImage,1000);


   


});

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
"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Coding Challenge 3

   Debug
   Author: Ethan Jay
   Date:   6/2/2023


*/
var thisDay = new Date();
var wDay = thisDay.getDay();
var imgSrc = " ";

switch(wDay) {
  case 0: 
  imgSrc = "sunday.png"; 
  break;
  case 1: 
  imgSrc = "monday.png"; 
  break;
  case 2: 
  imgSrc = "tuesday.png"; 
  break;
  case 3: 
  imgSrc = "wednesday.png"; 
  break;
  case 4: 
  imgSrc = "thursday.png"; 
  break;
  case 5: 
  imgSrc = "friday.png"; 
  break;
  case 6: 
  imgSrc = "saturday.png"; 
  break;
  
}

var htmlCode = "<img src="+imgSrc+" alt='' />"
document.getElementById("banner").innerHTML = htmlCode;

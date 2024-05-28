"use strict";
/*
  Написать функцию, которая принимает min и max
  и возвращает случайное целое число между ними, включая их
*/

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

console.log(randomNumber(13, 39));
console.log(randomNumber(13, 39));
console.log(randomNumber(13, 39));

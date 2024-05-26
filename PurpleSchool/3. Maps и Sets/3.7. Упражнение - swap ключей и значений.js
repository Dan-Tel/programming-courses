"use strict";
// Необходимо поменять местами ключи и значения в следующем Map
let weatherMap = new Map([
  ["London", 10],
  ["Moscow", 7],
  ["Paris", 14],
]);

let modifiedWeatherMap = new Map(
  [...weatherMap].map(([key, value]) => [value, key])
);

console.log(modifiedWeatherMap);

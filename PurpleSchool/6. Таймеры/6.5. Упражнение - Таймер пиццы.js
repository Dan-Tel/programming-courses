"use strict";

/*
  Таймер пиццы
  Сделать таймер пиццы (функцию, принимающую время),
  который будет выводить в консоль секунды,
  оставшиеся до готовности пиццы и сообщение по готовности.
  00:04
  00:03
  00:02
  00:01
  00:00
  🍕!!!
*/

function pizzaTimer(time) {
  const pizzaInterval = setInterval(() => {
    time--;
    const date = new Date(time * 1000);

    const options = {
      minute: "2-digit",
      second: "2-digit",
    };

    console.log(date.toLocaleTimeString([], options));

    if (!date.getMinutes() && !date.getSeconds()) {
      console.log("🍕!!!");
      clearInterval(pizzaInterval);
    }
  }, 1000);
}

pizzaTimer(5);

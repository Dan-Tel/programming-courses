"use strict";

/*
  Сделать функцию, которая принимает пользователся и
  проверяет, есть ли у негро сегодня день рождения или нет
*/

const user1 = {
  name: "Vasia",
  birthday: "12/23/2022",
};

function isBirthday({ birthday }) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);

  return (
    currentDate.getDate() == birthdayDate.getDate() &&
    currentDate.getMonth() == birthdayDate.getMonth()
  );
}

console.log(isBirthday(user1));

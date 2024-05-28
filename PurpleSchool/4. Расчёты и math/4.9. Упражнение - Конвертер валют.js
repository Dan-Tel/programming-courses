"use strict";
/*
  Напишите функцию, которая принимает 3 параметра:
  - Сумма
  - Валюта исходная
  - Валюта для конвертации
  И возвращает строку уже сконвертированной суммы с постфксом
  валюты. Если не смог, то null.
  Для примера 3 валюты.
*/

function converter(sum, initialCurrency, resultantCurrency) {
  const CURRENCY_MULTIPLIERS = {
    RUB: {
      RUB: 1,
      KZT: 4.98,
      USD: 0.011,
    },
    KZT: {
      RUB: 0.21,
      KZT: 1,
      USD: 0.0023,
    },
    USD: {
      RUB: 91.63,
      KZT: 442.06,
      USD: 1,
    },
  };

  const LOCALES = {
    RUB: "ru-RU",
    KZT: "kz-KZ",
    USD: "en-US",
  };

  const options = {
    style: "currency",
    currency: resultantCurrency,
  };

  if (
    ["RUB", "KZT", "USD"].includes(initialCurrency) &&
    ["RUB", "KZT", "USD"].includes(resultantCurrency)
  ) {
    return new Intl.NumberFormat(LOCALES[resultantCurrency], options).format(
      sum * CURRENCY_MULTIPLIERS[initialCurrency][resultantCurrency]
    );
  } else {
    return null;
  }
}

console.log(converter(505, "RUB", "KZT"));
console.log(converter(32000, "KZT", "USD"));
console.log(converter(100, "USD", "RUB"));
console.log(converter(103, "JPY", "RUB"));

"use strict";

/*
  Реализовать на функциях и прототипах корзину товаров с методами
  - Добавить товар
  - Увеличить число товаров
  - Уменьшить число товаров (удалить если их 0)
*/

const product = { id: 1, name: "Bread", count: 1 };

const Cart = function () {
  this.products = {};
};

Cart.prototype.addProduct = function ({ id, name, count }) {
  this.products[id] = { name, count };
};

Cart.prototype.increaseAmount = function (id) {
  this.products[id].count++;
};

Cart.prototype.decreaseAmount = function (id) {
  this.products[id].count--;

  if (!this.products[id].count) {
    delete this.products[id];
  }
};

const cart = new Cart();
cart.addProduct(product);
cart.increaseAmount(1);
cart.decreaseAmount(1);

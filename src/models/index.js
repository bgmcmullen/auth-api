'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const todoModel = require('./todo/model.js');
const userModel = require('../auth/models/users.js');
const productModel = require('./products/model.js')
const cartModel = require('./cart/model.js');
const Collection = require('./data-collection.js');

const environment = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const testOrProduction = (environment === 'test' || environment === 'production');

const sequelize = new Sequelize(DATABASE_URL, testOrProduction ? {logging: false} : {});
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const todo = todoModel(sequelize, DataTypes);
const product = productModel(sequelize, DataTypes);
const cart = cartModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
  todo: new Collection(todo),
  products: new Collection(product),
  cart: new Collection(cart)
};

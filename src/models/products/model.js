'use strict';

const productModel = (sequelize, DataTypes) => sequelize.define('Products', {
  name: { type: DataTypes.STRING, required: true },
  description: { type: DataTypes.STRING, required: false },
  info: { type: DataTypes.TEXT, required: false },
  image: { type: DataTypes.STRING, required: false },
  category: { type: DataTypes.STRING, required: true },
  price: { type: DataTypes.FLOAT, required: true },
  inStock: { type: DataTypes.INTEGER, required: true }
});

module.exports = productModel;
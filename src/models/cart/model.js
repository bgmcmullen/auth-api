'use strict';

const cartModel = (sequelize, DataTypes) => sequelize.define('Cart', {
  productCounts: { type: DataTypes.JSONB, required: true },
  products: { type: DataTypes.JSONB, required: true },
  totalCost: { type: DataTypes.FLOAT, required: true },
  totalItems: { type: DataTypes.INTEGER, required: true }
});

module.exports = cartModel;
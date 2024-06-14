'use strict';

const toDoModel = (sequelize, DataTypes) => sequelize.define('Todo', {

  id: { type: DataTypes.STRING, required: true, primaryKey: true, },
  assignee: { type: DataTypes.STRING, required: true },
  complete: { type: DataTypes.BOOLEAN, required: true, default: false },
  difficulty: { type: DataTypes.INTEGER, required: true, default: 3 },
  text: { type: DataTypes.STRING, required: true }
});

module.exports = toDoModel;

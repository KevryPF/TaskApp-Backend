const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  prioritylevel: {
    type: Sequelize.STRING
  },

  completionstatus: {
    type: Sequelize.BOOLEAN
  }

});

module.exports = Task;
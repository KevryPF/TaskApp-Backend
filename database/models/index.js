const Employee = require('./Employee');
const Task = require('./Task');

Employee.hasMany(Task);
Task.belongsTo(Employee);

module.exports = {
    Employee,
    Task
};

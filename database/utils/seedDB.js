const { Employee, Task } = require('../models');

const seedDB = async () => {

	const dummyEmployee = await Employee.create({
        firstname: "Juan",
        lastname: "Federico",
        department: "Financing"
	});
    
    const dummyEmployee2 = await Employee.create({
        firstname: "Joanna",
        lastname: "Marivel",
        department: "Customer Service"
	});

	const dummyTask = await Task.create({
        description: "Paper work",
        prioritylevel: "HIGH",
        completetionstatus: false

	});


	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;
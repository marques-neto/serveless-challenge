const EmployeeService = require('../services/employeeService');
const service = new EmployeeService();

module.exports.createEmployee = async (event) => {
    const { id, name, age, role } = JSON.parse(event.body);
    const employee = await service.createEmployee(id, name, age, role);
    return {
        statusCode: 201,
        body: JSON.stringify(employee),
    };
};

module.exports.getEmployeeById = async (event) => {
    const { id } = event.pathParameters;
    const employee = await service.getEmployeeById(id);
    if (!employee) {
        return {
            statusCode: 404,
            body: JSON.stringify({ error: 'Employee not found' }),
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify(employee),
    };
};

module.exports.updateEmployee = async (event) => {
    const { id } = event.pathParameters;
    const { name, age, role } = JSON.parse(event.body);
    const employee = await service.updateEmployee(id, name, age, role);
    return {
        statusCode: 200,
        body: JSON.stringify(employee),
    };
};

module.exports.deleteEmployee = async (event) => {
    const { id } = event.pathParameters;
    await service.deleteEmployee(id);
    return {
        statusCode: 204,
    };
};

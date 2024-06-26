const EmployeeRepository = require('../repositories/employeeRepository');
const Employee = require('../models/employee');

class EmployeeService {
    constructor() {
        this.repository = new EmployeeRepository();
    }

    async createEmployee(id, name, age, role) {
        const employee = new Employee(id, name, age, role);
        return await this.repository.createEmployee(employee);
    }

    async getEmployeeById(id) {
        return await this.repository.getEmployeeById(id);
    }

    async updateEmployee(id, name, age, role) {
        const employee = new Employee(id, name, age, role);
        return await this.repository.updateEmployee(employee);
    }

    async deleteEmployee(id) {
        await this.repository.deleteEmployee(id);
    }
}

module.exports = EmployeeService;

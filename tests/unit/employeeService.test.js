const EmployeeService = require('../../src/services/employeeService');

test('should create an employee', async () => {
    const service = new EmployeeService();
    const employee = await service.createEmployee('1', 'John Doe', 30, 'Developer');
    expect(employee).toEqual({
        id: '1',
        name: 'John Doe',
        age: 30,
        role: 'Developer'
    });
});

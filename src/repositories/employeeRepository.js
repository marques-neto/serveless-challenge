const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.DYNAMODB_TABLE;

class EmployeeRepository {
    async createEmployee(employee) {
        const params = {
            TableName: tableName,
            Item: employee
        };
        try {
            await dynamoDb.put(params).promise();
            return employee;
        } catch (error) {
            console.error('Error creating employee:', error);
            throw error;
        }
    }

    async getEmployeeById(id) {
        const params = {
            TableName: tableName,
            Key: { id }
        };
        const result = await dynamoDb.get(params).promise();
        return result.Item;
    }

    async updateEmployee(employee) {
        const params = {
            TableName: tableName,
            Item: employee
        };
        await dynamoDb.put(params).promise();
        return employee;
    }

    async deleteEmployee(id) {
        const params = {
            TableName: tableName,
            Key: { id }
        };
        await dynamoDb.delete(params).promise();
    }
}

module.exports = EmployeeRepository;

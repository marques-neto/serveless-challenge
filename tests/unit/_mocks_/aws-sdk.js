const putPromise = jest.fn().mockImplementation(() => ({
    promise: jest.fn().mockResolvedValue({}) // Aqui você pode simular o retorno desejado do DynamoDB
}));

const getPromise = jest.fn().mockImplementation(() => ({
    promise: jest.fn().mockResolvedValue({ Item: { id: '1', name: 'John Doe', age: 30, role: 'Developer' } })
}));

const deletePromise = jest.fn().mockImplementation(() => ({
    promise: jest.fn().mockResolvedValue({})
}));

const DocumentClient = jest.fn().mockImplementation(() => ({
    put: jest.fn().mockImplementation((params) => ({ promise: () => putPromise(params) })),
    get: jest.fn().mockImplementation((params) => ({ promise: () => getPromise(params) })),
    delete: jest.fn().mockImplementation((params) => ({ promise: () => deletePromise(params) })),
}));

module.exports = {
    DynamoDB: {
        DocumentClient
    },
    config: {
        update: jest.fn()
    }
};

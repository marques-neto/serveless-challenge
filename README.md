# serveless-challenge
# Atendimento ao Funcionário

Este projeto é uma aplicação Serverless usando AWS Lambda para gerenciar dados de funcionários.

## Estrutura do Projeto

- **src/**: Contém o código-fonte da aplicação.
- **tests/**: Contém os testes unitários.
- **serverless.yml**: Configuração do Serverless Framework.
- **jest.config.js**: Configuração do Jest.

## Requisitos

- Node.js
- Serverless Framework
- AWS CLI

## Configuração

1. Instale as dependências:
    ```bash
    npm install
    ```

2. Configure o AWS CLI:
    ```bash
    aws configure
    ```

## Deploy

Faça o deploy da aplicação:
```bash
serverless deploy

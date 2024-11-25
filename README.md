# API ADS Labs

Este projeto é o back-end de uma API de sistema CRUD,  desenvolvido como parte de um projeto de extensão ADS Labs. Ele foi projetado para gerenciar listas de tarefas relacionadas a seus respectivos responsáveis, oferecendo funcionalidades para organizar e acompanhar o progresso de atividades de forma eficiente.

## Instalação

1. Clone o repositório:
    ```bash
   git clone https://github.com/Julia-Virgilio/API-ADS-Labs
2. Entre no diretório
3. Instale as pendências
    ```bash
   npm install
5. Execute o projeto
    ```bash
   npm start

### Como a aplicação não possui frontend, será necessário uma aplicação para teste de APIs Rest

## Uso e funcionalidades

1. Criação, edição e exclusão de tarefas e responsáveis;
2. Modelo de tarefa:
   - Título (obrigatório);
   - Descrição (opcional);
   - Data limite (obrigatório, formato YYYY-MM-DD);
   - Concluída (obrigatório)
3. Modelo de responsável:
   - Nome (obrigatório);
   - Data de nascimento (obrigatório)
5. Listagens especiais nas portas:
    Para listar todas as tarefas de um responsável:
   `GET /tarefa/?idResp=(id do responsável)`
   Para listar tarefas pendentes de um responsável:
   `GET /tarefa/?idResp=(id do responsável)&concluida=false`
   Para listar responsáveis sem tarefas pendentes:
   `GET /responsavel/?listarsempendencias=true`
   Para listar tarefas pendentes de um responsável:
   `GET /tarefa/?tarefaspendentes=(idResp)`

## Tecnologias usadas:
- Node.js
- Docker
- MySQL

## Autor:
Desenvolvido por [Júlia Carvalho](https://github.com/Julia-Virgilio)



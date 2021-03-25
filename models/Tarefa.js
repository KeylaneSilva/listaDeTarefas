const  Sequelize  = require('sequelize');
const db = require('./db');

const Tarefa = db.sequelize.define('tarefas',{
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo:{
        type: db.Sequelize.TEXT
    },

    dataDeEntrega:{
        type: db.Sequelize.DATE
    }
})

module.exports = Tarefa;
const Sequelize = require('sequelize');

//conexao com mysql
const sequelize = new Sequelize('listaDeTarefas', 'root', 'Keylane@1',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
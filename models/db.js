//conexão com o bando de dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

console.log("foi")

//exportar
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
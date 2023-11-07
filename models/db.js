//conexão com o bando de dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', '7410852', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
})

console.log("foi")

//exportar
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
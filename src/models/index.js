const dbConfig = require("../config/db.config")(0); // yang diselect db pertama
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAlias: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
    logging: console.log, // untuk cek query
});
const db = {};
db.Sequelize = Sequelize; // untuk all fungsi Sequelize
db.sequelize = sequelize; // untuk koneksi db

module.exports = db;
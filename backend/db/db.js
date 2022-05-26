import {Sequelize} from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

// const db = new Sequelize('pos', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

const db = new Sequelize(process.env.DB, process.env.USERNAME, process.env.PASS, {
    host: process.env.HOST,
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
});

export default db;
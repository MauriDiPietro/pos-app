import db from '../db/db.js';
import {DataTypes} from 'sequelize';


const SaleModel = db.define('sale', {
    date: {
        type: DataTypes.DATEONLY
    },
    detail: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    condition: {
        type: DataTypes.STRING
    }
});

export default SaleModel;
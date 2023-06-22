"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOption = void 0;
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
dotenv.config();
exports.dataSourceOption = {
    type: 'postgres',
    host: process.env.HOST,
    database: `${process.env.DATABASE}-${process.env.NODE_ENV}`,
    port: +process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    entities: [],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: process.env.NODE_ENV === 'development' ? true : false,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOption);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map
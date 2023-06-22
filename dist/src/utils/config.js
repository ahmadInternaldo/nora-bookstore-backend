"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG_FEATURES = exports.CONFIG_ROOTS = void 0;
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_1 = require("../../db/data-source");
exports.CONFIG_ROOTS = [
    config_1.ConfigModule.forRoot({
        isGlobal: true,
    }),
    typeorm_1.TypeOrmModule.forRoot(data_source_1.dataSourceOption),
];
exports.CONFIG_FEATURES = [
    typeorm_1.TypeOrmModule.forFeature([]),
    jwt_1.JwtModule.register({
        global: true,
        signOptions: {
            expiresIn: '7d',
        },
        secret: process.env.SECRET_KEY,
    }),
];
//# sourceMappingURL=config.js.map
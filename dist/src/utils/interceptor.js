"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let Interceptor = class Interceptor {
    intercept(context, next) {
        const logger = () => {
            var _a;
            const { body, url, query, params, headers, hostname, method, originalUrl, path, httpVersion, } = context.switchToHttp().getRequest();
            const response = context.switchToHttp().getResponse();
            return {
                statusCode: (_a = response.statusCode) !== null && _a !== void 0 ? _a : response,
                date: new Date().toISOString(),
                body,
                url,
                query,
                params,
                headers,
                hostname,
                method,
                originalUrl,
                path,
                httpVersion,
            };
        };
        return next.handle().pipe((0, operators_1.tap)((response) => {
            common_1.Logger.log(process.env.NODE_ENV === 'development'
                ? Object.assign(Object.assign({}, logger()), response) : JSON.stringify(Object.assign(Object.assign({}, logger()), response)));
        }));
    }
};
Interceptor = __decorate([
    (0, common_1.Injectable)()
], Interceptor);
exports.Interceptor = Interceptor;
//# sourceMappingURL=interceptor.js.map
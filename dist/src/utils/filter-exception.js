"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const statusCode = exception.getStatus();
        const responseMessage = exception.getResponse();
        const { message, error } = responseMessage;
        const response = ctx.getResponse();
        const { body, url, query, params, headers, hostname, method, originalUrl, path, httpVersion, } = response.req;
        const logger = {
            statusCode,
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
            message: message !== null && message !== void 0 ? message : responseMessage,
            success: null,
            error: error !== null && error !== void 0 ? error : 'Internal Server Error',
        };
        if (+statusCode >= 500) {
            common_1.Logger.error(process.env.NODE_ENV === 'development'
                ? logger
                : JSON.stringify(logger));
        }
        else {
            common_1.Logger.warn(process.env.NODE_ENV === 'development'
                ? logger
                : JSON.stringify(logger));
        }
        response.status(statusCode).json({
            message: message !== null && message !== void 0 ? message : responseMessage,
            success: '',
            error: error !== null && error !== void 0 ? error : 'Internal Server Error',
        });
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=filter-exception.js.map
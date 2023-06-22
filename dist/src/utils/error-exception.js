"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
const common_1 = require("@nestjs/common");
class CustomError {
    constructor(error) {
        this.error = error;
    }
    execute() {
        var _a, _b, _c, _d;
        throw new common_1.HttpException((_a = this.error.response) !== null && _a !== void 0 ? _a : this.error.message, (_d = (_c = (_b = this.error.response) === null || _b === void 0 ? void 0 : _b.statusCode) !== null && _c !== void 0 ? _c : this.error.status) !== null && _d !== void 0 ? _d : common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=error-exception.js.map
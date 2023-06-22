"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSuccess = void 0;
class CustomSuccess {
    constructor(message, success = 'success', error = null) {
        this.message = message;
        this.success = success;
        this.error = error;
    }
    execute() {
        return {
            message: this.message,
            success: this.success,
            error: this.error,
        };
    }
}
exports.CustomSuccess = CustomSuccess;
//# sourceMappingURL=transform.js.map
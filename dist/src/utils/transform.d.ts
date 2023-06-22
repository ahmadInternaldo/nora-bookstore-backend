export declare class CustomSuccess {
    private message;
    private success;
    private error;
    constructor(message: any, success?: string, error?: string);
    execute(): {
        message: any;
        success: string;
        error: string;
    };
}

export declare class ValidationTypeNotFoundError implements Error {
    private _message;
    private _name;
    constructor(_message?: string);
    readonly name: string;
    readonly message: string;
}

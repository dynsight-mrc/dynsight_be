import { CustomError } from "./custom-error";

export class MongodbConnectionError extends CustomError{
    statusCode: number=500
    reason = "Error while connecting to mongodb"
    
    constructor(){
        super("Error while connecting to mongodb")
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [{message:this.reason}]
    }

}
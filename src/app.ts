import express  from "express"
import "express-async-errors"

import { json } from "body-parser";
import { TestController } from "./company-occupant/routes/Test/test-controller";
import { TestRepository } from "./company-occupant/routes/Test/tes-respository";
import { errorHandler } from "./common/middlewares/error-handler";
import { NotFoundError } from "./common/errors/not-found-error";
//import { NotFoundError } from "./common/errors/not-found-error";


const app = express()
app.use(json());


const testService = new TestRepository()
const test = new TestController(testService)

app.use("/test",test.router)
app.all("*", async()=>{
    throw new NotFoundError();
    
})

app.use(errorHandler)

export {app}

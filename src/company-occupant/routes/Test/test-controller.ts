import { NextFunction, Router, Request, Response } from "express";
import { TestService } from "./test-service";
import { TestRepository } from "./tes-respository";
import { Device } from "../../../databases/mongodb/models/device";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import 'express-async-errors'


export class TestController {
  private _router: Router;

  constructor(testRepo:TestRepository) {
    this._router = Router();
    const testService = new TestService(testRepo)   
    this._router.get("/", (req: Request, res: Response, next: NextFunction) => {
      console.log("middleware");
      next();
    });

    this._router.get("/", async (req: Request, res: Response, next: NextFunction) => {
      let msg = await testService.fct1()
      return res.sendStatus(200)
    });

    this._router.get("/error", (req: Request, res: Response,next:NextFunction) => {
      throw new BadRequestError("this is page error")
    });


    
  }

  public get router() {
    return this._router;
  }
}

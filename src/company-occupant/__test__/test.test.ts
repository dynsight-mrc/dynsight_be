import request  from "supertest";
import { app } from "../../app";


it("should send code 200",async ()=>{
    await request(app)
    .get("/test")
    .send({})
    .expect(200)
})
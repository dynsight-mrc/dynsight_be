import { Device } from "../../../databases/mongodb/models/device"
import { TestRepository } from "./tes-respository"

export class TestService{
    constructor(private testRespo : TestRepository){

    }

    async fct1():Promise<any> {
      let devices = await this.testRespo.getDevices()
      return devices
    }
}

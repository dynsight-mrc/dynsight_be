import { Device, DeviceDoc } from "../../../databases/mongodb/models/device"

export class TestRepository{
    constructor(){

    }


    public async getDevices():Promise<DeviceDoc[]>{
        let devices = await Device.find({})   
       
         
        return devices
    }
}
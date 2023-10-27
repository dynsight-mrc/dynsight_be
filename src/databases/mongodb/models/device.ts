import mongoose, { Schema } from "mongoose";

const deviceSchema = new Schema({
  name: { type: String, required: true },
});

interface DeviceAttrs {
  name: string;
}

export interface DeviceDoc extends mongoose.Document {
  name: string;
}

interface DeviceModel extends mongoose.Model<DeviceDoc> {}

const Device = mongoose.model<DeviceDoc, DeviceModel>("Device", deviceSchema);

export { Device };

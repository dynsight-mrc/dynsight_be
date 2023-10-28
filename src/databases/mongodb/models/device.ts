import mongoose, { Schema, model } from "mongoose";

interface DeviceAttrs {
  name: string;
}

interface DeviceDoc extends mongoose.Document {
  name: string;
}

interface DeviceModel extends mongoose.Model<DeviceDoc> {
  build(attr: DeviceAttrs): DeviceModel;
}

const deviceSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        (ret.id = doc._id), delete ret._id;
      },
    },
  }
);

deviceSchema.statics.build = (attrs: DeviceAttrs) => {
  return new Device(attrs);
};

const Device = mongoose.model<DeviceDoc, DeviceModel>("Device", deviceSchema);

export { Device };

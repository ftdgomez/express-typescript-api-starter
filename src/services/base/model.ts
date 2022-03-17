import mongoose from "mongoose";
/**
 * replace with your own model
 */
export interface IModel {}
const schema = new mongoose.Schema<IModel>({});
const Model = mongoose.model<IModel>("Model", schema);
export default Model;

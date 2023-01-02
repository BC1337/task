import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    imgUrl: String,
})

const Model = mongoose.model("Products", dataSchema);

export default Model;

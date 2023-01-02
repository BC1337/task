import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    checkbox:{
        value1: { type: Boolean, required: true, default: false },
        value2: { type: Boolean, required: true, default: false }
    },
    name: String,
    email: String,
    eID: Number,
    enum: ['One', 'Two', 'Three'],
    file: String,
})

const Model = mongoose.model("Products", dataSchema);

export default Model;

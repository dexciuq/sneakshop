const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    order: {
        type: Number,
        required: true
    },
    list: [
        {
            name: String,
            quantity: Number,
            cost: Number
        }
    ]
});

module.exports =  mongoose.model("Orders", orderSchema)
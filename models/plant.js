const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;

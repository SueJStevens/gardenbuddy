const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var virtualPlantSchema = new Schema({
  name: String,
  commonName: String,
  image: [String],
  lastWatered: { type: Date },
  wateringFrequency: { type: Number },
  user_id: String,
  createdOn: { type: Date, default: Date.now }
}, { collection: 'virtualPlant' });

const VirtualPlant = mongoose.model("VirtualPlant", virtualPlantSchema);

module.exports = VirtualPlant;

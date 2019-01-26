const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var plantSchema = new Schema({
  name: String,
  commonName: String,
  image: String,
  lastWatered: { type: Date },
  wateringFrequency: { type: Integer },
  user_id: { type: Object },
  createdOn: { type: Date, default: Date.now }
}, { collection: 'virtualPlant' });

const VirtualPlant = mongoose.model("VirtualPlant", virtualPlantSchema);

module.exports = VirtualPlant;

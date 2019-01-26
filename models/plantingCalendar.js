const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var plantingCalendarSchema = new Schema({
  plantCategories: [String],
  commonName: String,
  sowCal: [{
    zone: String,
    zones: [String],
    sowType: String,
    dtRangeStart: { type: Date },
    dtRangeStart: { type: Date } 
  }],
  createdOn: { type: Date, default: Date.now }
}, { collection: 'plantingCalendar' });

const PlantingCalendar = mongoose.model("plantingCalendar", plantingCalendarSchema);

module.exports = PlantingCalendar;

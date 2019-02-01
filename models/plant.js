const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var plantSchema = new Schema({
  plantCategories: [String],
  plantClass: [String],
  commonName: String,
  variety: String,
  plantAttrURL: String,
  plantAttributes: {
    DaysToMaturity: String,
    Sun: String,
    Height: String,
    PlantingTime: String,
    Thin: String,
    LeafTexture: String,
    FruitSize: String,
    FruitWeight: String,
    FruitBearing: String,
    Type: String,
    Spread: String,
    SowMethod: String,
    SowTime: String,
    LifeCycle: String,
    SoilpH: String,
    OrnamentalUse: String,
    ResistantTo: String,
    Flowering: String,
    BloomDuration: String,
    BloomSeason: String,
    Flowercolor: String,
    FoodUse: String,
    GrowthHabit: String,
    Genus: String,
    AdditionalUses: String
  },
  zone: String,
  zones: [String],
  compatable: [String],
  combative: [String],
  photourl: String,
  createdOn: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;

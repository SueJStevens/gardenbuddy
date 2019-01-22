const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var phm_all_zipcodeSchema = new Schema({
    trange: { type: String },
    zipcode: { type: String },
    zone: { type: String },
    zonetitle: { type: String }
});

const Phm_all_zipcode = mongoose.model("Zipcode", phm_all_zipcodeSchema);

module.exports = Phm_all_zipcode;

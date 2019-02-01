const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var notificationSchema = new Schema({
  dtNotification: { type: Date },
  from_user_id: String,
  from_name: String,
  msg: String,
  completed: Boolean,
  createdOn: { type: Date, default: Date.now }
}, { collection: 'virtualPlant' });

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;

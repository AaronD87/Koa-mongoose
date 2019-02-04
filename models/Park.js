const mongoose = require('mongoose');

const ParkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  visitors: { type: Number, required: true }

});

const Park = mongoose.model('Park', ParkSchema);

module.exports = Park;

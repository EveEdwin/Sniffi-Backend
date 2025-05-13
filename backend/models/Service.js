// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  status: { type: String, required: true, default: 'Explore →' },
  route: { type: String, required: true },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;

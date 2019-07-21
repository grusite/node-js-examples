const mongoose = require("mongoose");

const advertisementSchema = mongoose.Schema({
  nombre: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]
});

const Ad = mongoose.model("Ad", advertisementSchema);

export default Ad;

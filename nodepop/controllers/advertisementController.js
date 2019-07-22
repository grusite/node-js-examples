const Ad = require("../models/advertisement");

module.exports = {
  async listAds(req, res) {
    return Ad.find();
  },
  async addAd(req, res) {
    const advertisement = new Ad({
      nombre: "prueba",
      venta: true,
      precio: 130,
      foto: "prueba.png",
      tags: ["pruebaTag1", "pruebaTag2"]
    });
    return await advertisement.save();
  }
};

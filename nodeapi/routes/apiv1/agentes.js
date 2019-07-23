"use strict";

const express = require("express");
const router = express.Router();
const Agentes = require("../../models/Agentes");

router.get("/", async (req, res, next) => {
  // res.json({ success: true });

  // Manejarlo con callbacks
  // Agentes.find().exec((err, agentes) => {
  //   if (err) {
  //     next(err);
  //     return;
  //   }
  //   res.json({ success: true, agentes: agentes });
  // });

  // Lo usamos con async/await mejor y manejamos el error
  try {
    const agentes = await Agentes.find();
    res.json({ success: true, agentes: agentes });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

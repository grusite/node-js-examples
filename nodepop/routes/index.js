var express = require("express");
var router = express.Router();
const { query, validationResult } = require("express-validator");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET all advertisements. */
router.get("/apiv1/anuncios", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET ads with filter. */
router.get(
  "/",
  [
    query("start").isNumeric(),
    query("limit").isNumeric(),
    query("sort").isAlphanumeric(),
    query("tag").isAlphanumeric()
  ],
  (req, res, next) => {
    res.render("index", { title: "Express" });
  }
);

module.exports = router;

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/paramenruta/:numero", (req, res, next) => {
  console.log("req.params ", req.params);
  res.render("index", { title: "paramenruta" });
  // res.send("OK");
});

router.get(
  "/params/:id([0-9]+)/piso/:piso/puerta/:puerta",
  (req, res, next) => {
    console.log("req.params ", req.params);
    res.render("index", {
      title:
        "Params id " +
        req.params.id +
        " piso " +
        req.params.piso +
        " puerta " +
        req.params.puerta
    });
  }
);

router.get("/enquerystring", (req, res, next) => {
  console.log("req.query ", req.query);
  res.render("index", {
    title: "Params queries " + req.query.color + req.query.talla
  });
});

router.post("/rutapost", (req, res, next) => {
  console.log("req.body ", req.body);
  res.render("index", {
    title: "Params queries " + req.body.color
  });
  // res.send("OK");
});

module.exports = router;

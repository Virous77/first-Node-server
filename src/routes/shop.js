const express = require("express");

const router = express.Router();
const products = require("./admin");

router.get("/", (req, res) => {
  const product = products.products;
  res.render("shop", { prods: product, docTitle: "shop" });
});

module.exports = router;

const express = require("express");
const path = require("path");

const router = express.Router();
const products = require("./admin");

router.get("/", (req, res) => {
  // console.log(products.products);
  // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  const product = products.products;
  res.render("shop", { prods: product, docTitle: "shop" });
});

module.exports = router;

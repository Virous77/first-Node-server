const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const product = [];

router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "admin.html"));
});

router.post("/add", (req, res) => {
  const message = req.body.title;

  if (!message) {
    res.redirect("/admin/add");
    return;
  }

  fs.writeFileSync("message.text", message);
  product.unshift({ id: Math.random() * 100, title: message });
  res.redirect("/");
});

exports.routes = router;
exports.products = product;

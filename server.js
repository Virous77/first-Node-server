require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const shopRoutes = require("./src/routes/shop");
const adminRoutes = require("./src/routes/admin");

const app = express();

app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
app.use(shopRoutes);
app.use("/admin", adminRoutes.routes);
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT);

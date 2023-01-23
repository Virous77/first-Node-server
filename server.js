require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRoutes);
app.use("/admin", adminRoutes.routes);
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT);

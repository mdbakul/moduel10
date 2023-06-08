const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Server is connected"))
  .catch((e) => console.log(e));

let express = require("express");

let app = express();

let allproduct = require("./allproduct");

app.get("/products", (req, res) => {
  res.json(allproduct);
});

app.listen(3000, () => console.log("Server is running"));

let color = require("colors");

let result = require("./user");

async function love() {
  try {
    let finallove = new result({
      name: "Jhalmuri",
      price: 25,
      description: "Good product",
      Date: "08.06.023",
    });

    await finallove.save();
  } catch (e) {
    console.log(color.bold.underline.red(e));
  }
}

love();

// আমি অসু্স্থ ঠিকমত ক্লাস করতে পারি না । যতটুটকু করেছি ততটুকু থেকে Assinmet করেছি ।

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Server is connected"))
  .catch((e) => console.log(e));

let final = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlenght: 25,
    required: true,
  },
  price: {
    validate(value) {
      if (value < 25) {
        throw new Error("This is not valid value");
      }
    },
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
});

let result = mongoose.model("finals", final);

module.exports = result;

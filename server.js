const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/MoviesCrudApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useFindAndModify: false,
});

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });

mongoose.connection.on("connected", () => {
  console.log("connected to database");
});
mongoose.connection.on("error", () => {
  console.log("failed to connect to database");
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("server started on port 5000");
});

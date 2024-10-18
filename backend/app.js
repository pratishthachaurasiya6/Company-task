const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/bookRouter");
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://pratishthachaurasiya6:RYeATMhOuKXG4frL@cluster0.y3x5f.mongodb.net/book?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected");
  })
  .then(() => {
    app.listen(3200, () => {
      console.log(`Server is running on http://localhost:3200`);
    });
  })

  .catch((e) => {
    console.log("error" + e);
  });

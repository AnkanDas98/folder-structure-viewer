const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const directoryController = require("./controller/directoryController");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => console.log(error));

app.use("/api/directory/:id", directoryController.singleDirectory);
app.use("/api/store/directory/:id", directoryController.save);
app.use("/api/delete/directory/:id", directoryController.delete);
app.use("/api/directory", directoryController.alldirectories);

app.listen(8000, () => {
  console.log("Application Running!");
});

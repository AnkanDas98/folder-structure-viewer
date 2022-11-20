const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

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

const dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(dirname, "/client/build")));
  app.get("*", (req, res, next) =>
    res.sendFile(
      path.resolve(dirname, "client", "build", "index.html").normalize()
    )
  );
} else {
  app.get("/", (req, res, next) => {
    res.send("Api is running.....");
  });
}

app.listen(8000, () => {
  console.log("Application Running!");
});

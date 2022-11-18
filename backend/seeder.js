const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const Directory = require("./models/directory");
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Database Connected");
});

const importData = async () => {
  const directory = new Directory({
    name: "Documents",
    isRoot: false,
  });

  try {
    const savedDirectory = await directory.save();
    console.log(savedDirectory);
  } catch (error) {
    console.log(error);
  }
};

importData();

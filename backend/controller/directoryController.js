const Directory = require("../models/directory");

exports.alldirectories = async (req, res) => {
  try {
    const data = await Directory.find({ isRoot: true });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Server Error!" });
  }
};

exports.singleDirectory = async (req, res) => {
  console.log(req.params.id);
  try {
    const data = await Directory.find({ parentId: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

exports.save = async (req, res) => {};

exports.delete = async (req, res) => {};

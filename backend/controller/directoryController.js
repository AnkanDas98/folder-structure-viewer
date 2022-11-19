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
  try {
    const data = await Directory.find({ parentId: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

exports.save = async (req, res) => {
  try {
    await Directory.findOneAndUpdate(
      { _id: req.params.id },
      { hasChild: true }
    );
    const directory = new Directory({
      name: req.body.name,
      isRoot: false,
      hasChild: false,
      parentId: req.params.id,
    });
    const data = await directory.save();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.delete = async (req, res) => {
  try {
    const directory = await Directory.find({ _id: req.params.id });
    if (directory[0].hasChild) {
      const data = await Directory.deleteMany({ parentId: req.params.id });
      console.log(data);
    }
    const data = await Directory.deleteOne({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

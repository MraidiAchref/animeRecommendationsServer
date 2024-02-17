const { request } = require("../../app");
const AnimeModel = require("./anime.model");

exports.create = async (req, res) => {
  await AnimeModel.create(req.body);
  return res.sendStatus(201);
};

exports.delete = async (req, res) => {
  await AnimeModel.deleteOne({ uid: req.body.uid });
  return res.sendStatus(204);
};

exports.update = async (req, res) => {
  const updateResult = await AnimeModel.updateOne({ uid: req.body.uid },req.body );
  if (updateResult.modifiedCount === 0) {
    return res.sendStatus(404); // Not Found, if no document is updated
  }
  return res.sendStatus(200); // OK, document updated successfully
};


exports.read = async (req, res) => {
    const anime = await AnimeModel.findOne({ uid: req.params.uid });
    console.log(anime) ;
    if (!anime) {
      return res.sendStatus(404); // Not Found, if the document does not exist
    }
    return res.status(200).json(anime).json; // OK, return the document data

};

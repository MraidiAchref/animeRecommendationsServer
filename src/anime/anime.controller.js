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
  const updateResult = await AnimeModel.updateOne(
    { uid: req.body.uid },
    req.body
  );
  if (updateResult.modifiedCount === 0) {
    return res.sendStatus(404); // Not Found 
  }
  return res.sendStatus(200); //  successfully
};

exports.read = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.params.uid });
  console.log(anime);
  if (!anime) {
    return res.sendStatus(404); 
  }
  return res.status(200).json(anime); 
};

exports.readAllByUid = async (req, res) => {
  const animeList = await AnimeModel.find({ uid: req.params.uid });

 
  if (animeList.length === 0) {
    return res.sendStatus(404); 
  }

  return res.status(200).json(animeList); 
};

exports.readByRank = async (req, res) => {

  const rank = parseInt(req.params.ranked, 10);  // 10 is the radix and means that the conversion will be to decimal number

  // Find all documents where rank is greater than the const rank  //  $gt : condition meaning greater than 
  const animeList = await AnimeModel.find({ ranked: { $gt: rank } });

  
  if (animeList.length === 0) {
    return res.sendStatus(404); 
  }

  return res.status(200).json(animeList);
};

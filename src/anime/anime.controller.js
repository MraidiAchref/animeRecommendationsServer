const { request } = require("../../app");
const AnimeModel = require("./anime.model");

exports.create = async (req, res) => {
  await AnimeModel.create(req.body);
};

exports.delete = async (req, res) => {
  await AnimeModel.deleteOne({ anime_uid: req.body.anime_uid });
};

exports.update = async (req, res) => {
  const updateResult = await AnimeModel.updateOne(
    { anime_uid: req.body.anime_uid },
    req.body
  );
  if (updateResult.modifiedCount === 0) {
    throw new Error('NOT_FOUND')
  }
  return res.sendStatus(200); //  successfully
};

exports.read = async (req, res) => {
  const anime = await AnimeModel.findOne({ anime_uid: req.params.anime_uid }).populate('reviews');
  console.log(anime);
  if (!anime) {
      throw new Error('NOT_FOUND') 
  }
  return res.status(200).json(anime); 
};

exports.readAllByUid = async (req, res) => {
  const animeList = await AnimeModel.find({ anime_uid: req.params.anime_uid });

 
  if (animeList.length === 0) throw new Error('NOT_FOUND') 


  return res.status(200).json(animeList); 
};

exports.readByRank = async (req, res) => {

  const rank = parseInt(req.params.ranked, 10);  // 10 is the radix and means that the conversion will be to decimal number

  // Find all documents where rank is greater than the const rank  //  $gt : condition meaning greater than 
  const animeList = await AnimeModel.find({ ranked: { $gt: rank } });

  
  if (animeList.length === 0) throw new Error('NOT_FOUND') 

  return res.status(200).json(animeList);
};

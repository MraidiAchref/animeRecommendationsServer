const ReviewModel = require("./review.model");
const AnimeModel = require('../anime/anime.model')
exports.create = async (req, res) => {
  const anime = await AnimeModel.findOne({anime_uid : req.body.uid});
  if (!anime) returnres.sendStatus(404) ;

  const review = await ReviewModel.create(req.body);
  anime.reviews.push(review) ;
  await anime.save()
  return res.sendStatus(201);
};

exports.delete = async (req, res) => {
    await ReviewModel.deleteOne({uid : req.body.uid});
    return res.sendStatus(204);
  };


  exports.update = async (req, res) => {
    const updateResult = await ReviewModel.updateOne(
      { uid: req.body.uid },
      req.body
    );
    if (updateResult.modifiedCount === 0) {
      return res.sendStatus(404); // Not Found 
    }
    return res.sendStatus(200); //  successfully
  };



  exports.read = async (req, res) => {
    const review = await ReviewModel.findOne({ uid: req.params.uid });
    if (!review) {
      return res.sendStatus(404); 
    }
    return res.status(200).json(review); 
  };
  

  exports.readAllByUid = async (req, res) => {
    const reviewList = await ReviewModel.find({ uid: req.params.uid });
  
   
    if (reviewList.length === 0) {
      return res.sendStatus(404); 
    }
  
    return res.status(200).json(reviewList); 
  };

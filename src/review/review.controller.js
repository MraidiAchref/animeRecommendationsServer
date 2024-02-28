const ReviewModel = require("./review.model");
const AnimeModel = require("../anime/anime.model");
const {
  sendSuccessResponse,
  sendSuccessfulCreationResponse,
  sendSuccessfulReadResponse,
  sendSuccessfulDeleteResponse,
  sendSuccessfulUpdateResponse,
} = require("../utils/successHundler");

exports.create = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) throw new Error("NOT_FOUND");

  const review = await ReviewModel.create(req.body);
  anime.reviews.push(review);
  await anime.save();
  return sendSuccessfulCreationResponse(res, review);
};

exports.delete = async (req, res) => {
  const review = await ReviewModel.findOne({ uid: req.body.uid });
  if (!review) throw new Error("NOT_FOUND");

  const anime = await AnimeModel.findOne({ uid: req.body.anime_uid });
  if (!anime) throw new Error("NOT_FOUND");

  await ReviewModel.deleteOne({ uid: req.body.uid });
  anime.reviews.pull(review);
  await anime.save();

  return sendSuccessfulDeleteResponse(res);
};

exports.update = async (req, res) => {
  const updateResult = await ReviewModel.updateOne(
    { uid: req.body.uid },
    req.body
  );

  if (updateResult.modifiedCount === 0) throw new Error("NOT_FOUND");
  return sendSuccessfulUpdateResponse(res);
};

exports.read = async (req, res) => {
  const review = await ReviewModel.findOne({ uid: req.params.uid });
  if (!review) throw new Error("NOT_FOUND");

  return sendSuccessfulReadResponse(res,review);
};

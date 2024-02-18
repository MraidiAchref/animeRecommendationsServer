const ProfilesModel = require("./profiles.model");

exports.create = async (req, res) => {
  await ProfilesModel.create(req.body);
  return res.sendStatus(201);
};

exports.delete = async (req, res) => {
    await ProfilesModel.deleteOne({profile : req.body.profile});
    return res.sendStatus(204);
  };
  
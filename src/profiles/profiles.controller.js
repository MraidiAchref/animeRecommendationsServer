const ProfilesModel = require("./profiles.model");

exports.create = async (req, res) => {
  await ProfilesModel.create(req.body);
  return res.sendStatus(201);
};

exports.delete = async (req, res) => {
    await ProfilesModel.deleteOne({profile : req.body.profile});
    return res.sendStatus(204);
  };


  exports.update = async (req, res) => {
    const updateResult = await ProfilesModel.updateOne(
      { profile: req.body.profile },
      req.body
    );
    if (updateResult.modifiedCount === 0) {
      return res.sendStatus(404); // Not Found 
    }
    return res.sendStatus(200); //  successfully
  };



  exports.read = async (req, res) => {
    const profile = await ProfilesModel.findOne({ profile: req.params.profile });
    if (!profile) {
      return res.sendStatus(404); 
    }
    return res.status(200).json(profile); 
  };
  

  exports.readAllByGender = async (req, res) => {
    const profileList = await ProfilesModel.find({ gender: req.params.gender });
  
   
    if (profileList.length === 0) {
      return res.sendStatus(404); 
    }
  
    return res.status(200).json(profileList); 
  };
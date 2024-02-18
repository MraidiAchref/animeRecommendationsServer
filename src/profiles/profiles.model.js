const mongoose = require("mongoose");

const { Schema } = mongoose;
const profilesSchema = new Schema(
  {
    profile: {
      type: String,
    },
    gender: {
      type: String,
    },
    birthday: {
      type: String,
    },
    favorites_anime: [
      {
        type: Number,
      },
    ],
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports =
  mongoose.models.Profiles || mongoose.model("Profiles", profilesSchema);

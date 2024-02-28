const mongoose = require("mongoose");

const { Schema } = mongoose;
const animeSchema = new Schema(
  {
    uid: {
      type: Number,
      unique : true ,
    },
    title: {
      type: String,
    },
    synopsis: {
      type: String,
    },
    genre: [
      {
        type: String,
      },
    ],
    aired: {
      type: String,
    },
    episodes: {
      type: Number,
    },
    members: {
      type: Number,
    },
    popularity: {
      type: Number,
    },
    ranked: {
      type: Number,
    },
    score: {
      type: Number,
    },
    img_url: {
      type: String,
    },
    link: {
      type: String,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.models.Anime || mongoose.model("Anime", animeSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: {
      type: String,
      default:
        "https://imgs.search.brave.com/MDL_w5NPOqc7zzyHhfb_jxELjqkiyzZmWFC8v0JC090/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vTUFESU0y/RWQ4Nk0vMS90aHVt/Ym5haWxfbGFyZ2Uv/Y2FudmEtbW91bnRh/aW4tc3VucmlzZS1N/QURJTTJFZDg2TS5q/cGc",
    },
  },
  price: Number,
  location: String,
  country: String,
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

require("dotenv").config();
const {MONGO_URI} = process.env

module.exports = {
  mongoURI:
    MONGO_URI,
  secretOrKey: 'random very very secret string',
};
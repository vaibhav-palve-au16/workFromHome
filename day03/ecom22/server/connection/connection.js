
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connect = async()=>{
    try {
        await mongoose.connect(process.env.URL);
        console.log("mongodb connected");
      } catch (error) {
        handleError(error);
      }
}
module.exports = {connect}
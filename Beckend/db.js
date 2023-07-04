const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/fooGood", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Return the Mongoose connection
    return mongoose.connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = main;

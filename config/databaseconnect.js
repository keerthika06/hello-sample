const databaseConnectt = () => {
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", true);
  const mongoDbUrl = process.env.DB_URL.toString();

  mongoose
    .connect(mongoDbUrl)
    .then(console.log("connected"))
    .catch((err) => console.log(err));
};
module.exports = databaseConnectt;

const express = require("express");
const router = express.Router();
const databaseConnect = require("./config/databaseconnect");
const port = process.env.PORT || 8000;

require("dotenv").config();

const userRouter = require("./routes/user");
const app = express();
app.use(express.urlencoded({ extended: true }));
router.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});
databaseConnect();
app.use("/", router);
app.use("/api/user", userRouter);

app.listen(port, () => console.log(`Running on port on ${port}`));

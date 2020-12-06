require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const userRouter = require("./routes/index");
const courseRouter = require("./routes/prouctRoute");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));

app.get("/test", (req, res, next) => {
  return res.json("Server Is Running");
});

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

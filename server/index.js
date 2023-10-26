const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoute = require("./routes/product");
const userRoute = require("./routes/users");

require("dotenv/config");

const app = express();

// used with react
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productRoute);
app.use(userRoute);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "t3LectureFour", //Collection Name
  })
  .then(() => console.log("Connected to t3LectureFour DB"))
  .catch((err) => {
    console.log("No Connection. Reason: " + err);
  });

const PORT = process.env.SERVER_PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server Started on port:${PORT}`);
});

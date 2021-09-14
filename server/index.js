const express = require("express");

// const axios = require("axios");
const {
  initilizeData,
  searchData,
  createData,
  incrementinglike
} = require("./controller/placeCntroller.js");
const mongoose = require("mongoose");

const app = express();
const port = 8080;

app.use(express.json());
// app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/initializeData", async (req, res, next) => {
  try {
    await initilizeData();
    res.send();
  } catch (err) {
    next(err);
  }
});

app.post("/search", async (req, res, next) => {
  try {
    let { page, count, type } = req.query;
    const { city } = req.body;
    if (!city) throw new Error("Please Provide a City");
    if (!count) count = 4
    let data = await searchData(+page, city, +count, type);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

app.post("/post", async (req, res, next) => {
  try {
    const { city, title, type, description, img, lat, lng } = req.body;
    let result = await createData(city, title, type, description, img, lat, lng);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});
app.get("/like/:id", async (req, res, next) => {
  try {
    await incrementinglike(req.params.id);
    res.send()
  } catch (err) {
    next(err);
  }
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err);
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
  setupMongoose();
});

const setupMongoose = () => {
  mongoose
    .connect("mongodb://localhost:27017/localGuide", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.error("db not connected", err);
    });
};

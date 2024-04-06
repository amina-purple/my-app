const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const app = express();
require("dotenv").config({path: "conf/.env"})
const IndexRouter = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use('/api', IndexRouter);

app.get('/', (req, res) => {
  res.json({ message: "Hello from server!" });
});

const start = async () => {
  try {
      await mongoose
          .connect(process.env.MONGODB_URI)
          .then(() => {
              console.log("Database is connected")
          })
          .catch((error) => console.error(error));
      app.listen(8000, () => {
          console.log('http://localhost:8000')
      })
  } catch (error) {
      console.error('Internal server error')
  }
}

start()

module.exports = app


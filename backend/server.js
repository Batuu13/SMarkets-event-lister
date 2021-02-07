const express = require("express");
const request = require("request");
const cors = require("cors");
require("dotenv").config();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const port = process.env.PORT;
const app = express();
app.use(cors(corsOptions));

app.use("/proxy", function (req, res) {
  req.pipe(request(process.env.API_URL + req.url)).pipe(res);
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));

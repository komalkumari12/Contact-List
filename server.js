const express = require("express");
const app = express();
require("dotenv").config();
require("./models/contact");
require("./database/connection");

const contactRouter = require("./router/contact");
app.use(express.json());

app.use("/api", contactRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const route = require("./routes");

app.use(express.json());
app.use("/api/v1", route);

app.listen(port, () => console.log("This application is running at port", port));
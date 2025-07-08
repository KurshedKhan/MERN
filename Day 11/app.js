const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const first = require("./router/first");
const second = require("./router/second");
const basedir = require("./utilities/util");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(first);
app.use(second);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(basedir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`This is my server : http://localhost:${PORT}`);
});

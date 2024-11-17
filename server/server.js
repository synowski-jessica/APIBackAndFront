const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const images = require("./routes/images");
app.use("/images", images);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

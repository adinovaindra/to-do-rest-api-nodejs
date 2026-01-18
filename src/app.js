const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200);
  res.json({
    status: "OK!",
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

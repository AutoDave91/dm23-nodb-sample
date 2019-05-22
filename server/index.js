const express = require("express");
const wishController = require("./controllers/wishController");
const app = express();

app.use(express.json());

app.get("/api/wishes", wishController.getWishes);
app.delete("/api/wishes/:name", wishController.deleteWish);
app.post("/api/wishes", wishController.addWish);

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`);
});

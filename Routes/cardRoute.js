const express = require('express');
const router = express.Router();
const { createCard,getCards}=  require("../controller/cardController");
router.post("createCard", (req, res) => {
    res.send('Welcome to the Card API!');
  });
router.get("getCard",getCards);

module.exports = router;

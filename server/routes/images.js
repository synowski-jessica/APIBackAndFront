const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=2&limit=99`
    );
    const data = await response.json();

    res.status(200).send(data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
    res.status(500).send(error);
  }
});

module.exports = router;

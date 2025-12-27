const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET all blogs
router.get("/", (req, res) => {
  db.all("SELECT * FROM blogs ORDER BY created_at DESC", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// ADD blog
router.post("/", (req, res) => {
  const { title, description, image } = req.body;

  db.run(
    "INSERT INTO blogs (title, description, image) VALUES (?, ?, ?)",
    [title, description, image],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;

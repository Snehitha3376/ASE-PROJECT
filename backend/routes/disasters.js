const express = require("express");
const db = require("../db");

const router = express.Router();

// Get all active disasters
router.get("/", async (req, res) => {
  try {
    const result = await db.query(
      `SELECT
        disaster_id,
        title,
        disaster_type,
        description,
        severity,
        location,
        latitude,
        longitude,
        safety_instructions,
        status,
        created_at
       FROM disasters
       WHERE status = 'Active'
       ORDER BY created_at DESC`
    );

    res.json(result.rows);

  } catch (error) {
    console.error("Disaster retrieval error:", error.message);

    res.status(500).json({
      message: "Unable to retrieve disaster information"
    });
  }
});

module.exports = router;
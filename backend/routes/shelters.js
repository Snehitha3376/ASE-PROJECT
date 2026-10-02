const express = require("express");
const db = require("../db");

const router = express.Router();

console.log("Shelters route loaded");


// ==============================
// GET ALL AVAILABLE SHELTERS
// ==============================

router.get("/", async (req, res) => {
  try {
    console.log("GET /api/shelters received");

    const result = await db.query(
      `SELECT
        shelter_id,
        name,
        address,
        latitude,
        longitude,
        capacity,
        available_spaces,
        contact_number,
        status,
        created_at
       FROM shelters
       WHERE status = 'Available'
       ORDER BY name ASC`
    );

    console.log(
      "Shelters found:",
      result.rows.length
    );

    res.json(result.rows);

  } catch (error) {

    console.error(
      "Shelter retrieval error:",
      error.message
    );

    res.status(500).json({
      message: "Unable to retrieve shelter information"
    });
  }
});


module.exports = router;
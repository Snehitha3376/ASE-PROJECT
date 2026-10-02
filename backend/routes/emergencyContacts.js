const express = require("express");
const db = require("../db");

const router = express.Router();

console.log("Emergency contacts route loaded");

// ==========================================
// GET ALL EMERGENCY CONTACTS
// ==========================================

router.get("/", async (req, res) => {
  try {
    console.log("GET /api/emergency-contacts received");

    const result = await db.query(
      `SELECT
        contact_id,
        service_name,
        phone_number,
        description,
        created_at
       FROM emergency_contacts
       ORDER BY service_name ASC`
    );

    console.log(
      "Emergency contacts found:",
      result.rows.length
    );

    res.json(result.rows);

  } catch (error) {

    console.error(
      "Emergency contact retrieval error:",
      error.message
    );

    res.status(500).json({
      message: "Unable to retrieve emergency contact information"
    });
  }
});

module.exports = router;
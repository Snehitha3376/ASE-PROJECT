const express = require("express");
const db = require("../db");

const router = express.Router();

console.log("Incidents route loaded");

// ==========================================
// SUBMIT INCIDENT REPORT
// ==========================================

router.post("/", async (req, res) => {
  try {
    const {
      user_id,
      disaster_id,
      description,
      location,
      latitude,
      longitude
    } = req.body;

    console.log("POST /api/incidents received");

    // Validate required fields
    if (!user_id || !description || !location) {
      return res.status(400).json({
        message: "User, description, and location are required"
      });
    }

    const result = await db.query(
      `INSERT INTO incident_reports
       (
         user_id,
         disaster_id,
         description,
         location,
         latitude,
         longitude,
         status
       )
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING
         report_id,
         user_id,
         disaster_id,
         description,
         location,
         latitude,
         longitude,
         status,
         created_at,
         updated_at`,
      [
        user_id,
        disaster_id || null,
        description,
        location,
        latitude || null,
        longitude || null,
        "Submitted"
      ]
    );

    console.log("Incident report created:", result.rows[0].report_id);

    res.status(201).json({
      message: "Incident report submitted successfully",
      report: result.rows[0]
    });

  } catch (error) {
    console.error(
      "Incident report creation error:",
      error.message
    );

    res.status(500).json({
      message: "Unable to submit incident report"
    });
  }
});


// ==========================================
// GET CITIZEN INCIDENT REPORTS
// ==========================================

router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    console.log(
      `GET /api/incidents/user/${userId} received`
    );

    const result = await db.query(
      `SELECT
        ir.report_id,
        ir.user_id,
        ir.disaster_id,
        ir.description,
        ir.location,
        ir.latitude,
        ir.longitude,
        ir.status,
        ir.created_at,
        ir.updated_at,
        d.title AS disaster_title
       FROM incident_reports ir
       LEFT JOIN disasters d
         ON ir.disaster_id = d.disaster_id
       WHERE ir.user_id = $1
       ORDER BY ir.created_at DESC`,
      [userId]
    );

    console.log(
      "Incident reports found:",
      result.rows.length
    );

    res.json(result.rows);

  } catch (error) {
    console.error(
      "Incident report retrieval error:",
      error.message
    );

    res.status(500).json({
      message: "Unable to retrieve incident reports"
    });
  }
});


module.exports = router;
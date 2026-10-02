const express = require("express");
const cors = require("cors");
const db = require("./db");

const authRoutes = require("./routes/auth");
const disasterRoutes = require("./routes/disasters");
const shelterRoutes = require("./routes/shelters");
const emergencyContactRoutes = require("./routes/emergencyContacts");
const incidentRoutes = require("./routes/incidents");

const app = express();
const PORT = 5000;


// ==============================
// MIDDLEWARE
// ==============================

app.use(cors());
app.use(express.json());


// ==============================
// API ROUTES
// ==============================

app.use("/api/auth", authRoutes);

app.use("/api/disasters", disasterRoutes);

app.use("/api/shelters", shelterRoutes);

app.use(
  "/api/emergency-contacts",
  emergencyContactRoutes
);

app.use(
  "/api/incidents",
  incidentRoutes
);


// ==============================
// HOME ROUTE
// ==============================

app.get("/", (req, res) => {
  res.json({
    message: "Local Disaster Management Hub API is running"
  });
});


// ==============================
// HEALTH CHECK
// ==============================

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend server is working"
  });
});


// ==============================
// START SERVER
// ==============================

console.log("About to start Express server...");

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});
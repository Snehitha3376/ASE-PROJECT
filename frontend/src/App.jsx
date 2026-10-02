import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import { useState, useEffect } from "react";

import "./App.css";


// ==================================================
// HOME PAGE
// ==================================================

function Home() {
  return (
    <div className="home-page">

      {/* =========================
          NAVIGATION
          ========================= */}

      <header className="home-header">

        <div className="home-logo">
          <span className="logo-icon">◆</span>
          Local Disaster Management Hub
        </div>

        <nav className="home-nav">

          <Link to="/">Home</Link>

          <a href="#alerts">Alerts</a>

          <a href="#safety">Safety</a>

          <a href="#resources">Resources</a>

          <Link
            to="/login"
            className="nav-login"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="nav-register"
          >
            Register
          </Link>

        </nav>

      </header>


      {/* =========================
          HERO
          ========================= */}

      <section className="home-hero">

        <div className="hero-content">

          <div className="hero-badge">
            LOCAL DISASTER INFORMATION PLATFORM
          </div>

          <h1>
            Stay Informed.
            <br />
            Stay Safe.
            <br />
            <span>Act Quickly.</span>
          </h1>

          <p>
            Local Disaster Management Hub provides centralized
            access to disaster alerts, safety instructions,
            emergency contacts, shelters, incident reporting,
            and affected-area information.
          </p>

          <div className="hero-actions">

            <Link
              to="/login"
              className="hero-primary-button"
            >
              Access Disaster Hub
            </Link>

            <a
              href="#safety"
              className="hero-secondary-button"
            >
              View Safety Information
            </a>

          </div>

        </div>


        <div className="hero-visual">

          <div className="disaster-card">

            <div className="disaster-card-header">
              <span className="status-dot"></span>
              Disaster Information
            </div>

            <div className="disaster-card-main">

              <div className="alert-symbol">
                !
              </div>

              <div>

                <h3>
                  Stay Prepared
                </h3>

                <p>
                  Access important disaster information
                  from one centralized platform.
                </p>

              </div>

            </div>


            <div className="disaster-card-stats">

              <div>

                <strong>
                  Alerts
                </strong>

                <span>
                  Active information
                </span>

              </div>


              <div>

                <strong>
                  Shelters
                </strong>

                <span>
                  Available locations
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          QUICK ACCESS
          ========================= */}

      <section
        className="quick-section"
        id="alerts"
      >

        <div className="section-heading">

          <span>
            QUICK ACCESS
          </span>

          <h2>
            Important Disaster Resources
          </h2>

          <p>
            Access essential information and services
            available through the disaster management hub.
          </p>

        </div>


        <div className="quick-grid">

          <div className="quick-card alert-card">

            <div className="quick-icon">
              !
            </div>

            <h3>
              Disaster Alerts
            </h3>

            <p>
              View active disaster alerts and important
              information about ongoing emergencies.
            </p>

          </div>


          <div className="quick-card">

            <div className="quick-icon">
              +
            </div>

            <h3>
              Shelter Information
            </h3>

            <p>
              Find available shelters and view their
              locations and available spaces.
            </p>

          </div>


          <div className="quick-card">

            <div className="quick-icon">
              ☎
            </div>

            <h3>
              Emergency Contacts
            </h3>

            <p>
              Access important emergency service
              contact information.
            </p>

          </div>


          <div className="quick-card">

            <div className="quick-icon">
              ✓
            </div>

            <h3>
              Incident Reporting
            </h3>

            <p>
              Submit incident information and track
              the status of submitted reports.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          SAFETY
          ========================= */}

      <section
        className="safety-section"
        id="safety"
      >

        <div className="section-heading">

          <span>
            SAFETY INFORMATION
          </span>

          <h2>
            Know What To Do During a Disaster
          </h2>

          <p>
            Access safety instructions to help you
            respond appropriately during different
            types of emergencies.
          </p>

        </div>


        <div className="safety-grid">

          <div className="safety-card">

            <div className="safety-number">
              01
            </div>

            <h3>
              Flood Safety
            </h3>

            <p>
              Follow safety instructions, avoid flooded
              areas, and move to designated safe locations.
            </p>

          </div>


          <div className="safety-card">

            <div className="safety-number">
              02
            </div>

            <h3>
              Earthquake Safety
            </h3>

            <p>
              Protect yourself from falling objects and
              follow appropriate evacuation guidance.
            </p>

          </div>


          <div className="safety-card">

            <div className="safety-number">
              03
            </div>

            <h3>
              Fire Safety
            </h3>

            <p>
              Move away from dangerous areas and follow
              emergency evacuation instructions.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          RESOURCES
          ========================= */}

      <section
        className="resources-section"
        id="resources"
      >

        <div className="section-heading">

          <span>
            PLATFORM FEATURES
          </span>

          <h2>
            One Platform for Disaster Management
          </h2>

        </div>


        <div className="resource-grid">

          <div className="resource-item">

            <h3>
              Interactive Map
            </h3>

            <p>
              Visualize disaster locations, affected
              areas, and available shelters.
            </p>

          </div>


          <div className="resource-item">

            <h3>
              Resource Dashboard
            </h3>

            <p>
              View summarized information about
              disasters, reports, shelters, and resources.
            </p>

          </div>


          <div className="resource-item">

            <h3>
              Citizen Reporting
            </h3>

            <p>
              Allow citizens to submit information
              about incidents and affected locations.
            </p>

          </div>


          <div className="resource-item">

            <h3>
              Administrative Management
            </h3>

            <p>
              Provide administrators with tools to
              manage disaster-related information.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CALL TO ACTION
          ========================= */}

      <section className="home-cta">

        <h2>
          Be Prepared. Stay Informed.
        </h2>

        <p>
          Access the Local Disaster Management Hub
          to view disaster information and available
          emergency resources.
        </p>

        <Link
          to="/login"
          className="hero-primary-button"
        >
          Enter Disaster Hub
        </Link>

      </section>


      {/* =========================
          FOOTER
          ========================= */}

      <footer className="home-footer">

        <div>

          <strong>
            Local Disaster Management Hub
          </strong>

          <p>
            Centralized local disaster information
            and management platform.
          </p>

        </div>


        <div>

          <p>
            Adaptive Software Engineering Project
          </p>

          <p>
            © 2026 Local Disaster Management Hub
          </p>

        </div>

      </footer>

    </div>
  );
}


// ==================================================
// LOGIN
// ==================================================

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");


  const handleLogin = async (event) => {

    event.preventDefault();

    setMessage("");

    setError("");


    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email,
            password
          })
        }
      );


      const data = await response.json();


      if (!response.ok) {

        setError(
          data.message || "Login failed"
        );

        return;
      }


      setMessage(data.message);


      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );


      if (data.user.role === "admin") {

        navigate("/admin");

      } else {

        navigate("/citizen");

      }


    } catch (error) {

      console.error(error);

      setError(
        "Unable to connect to the server. Make sure the backend is running."
      );

    }

  };


  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Login
        </h1>

        <p className="auth-subtitle">
          Login to the Local Disaster Management Hub
        </p>


        <form onSubmit={handleLogin}>

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />


          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />


          <button type="submit">
            Login
          </button>

        </form>


        {message && (

          <p className="success-message">
            {message}
          </p>

        )}


        {error && (

          <p className="error-message">
            {error}
          </p>

        )}


        <p className="auth-link">

          Don't have an account?{" "}

          <Link to="/register">
            Register
          </Link>

        </p>


        <Link to="/">
          ← Back to Home
        </Link>

      </div>

    </div>

  );
}


// ==================================================
// REGISTER
// ==================================================

function Register() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");


  const handleRegister = async (event) => {

    event.preventDefault();

    setMessage("");

    setError("");


    if (password !== confirmPassword) {

      setError(
        "Passwords do not match"
      );

      return;
    }


    if (password.length < 6) {

      setError(
        "Password must be at least 6 characters long"
      );

      return;
    }


    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            full_name: fullName,
            email: email,
            password: password
          })
        }
      );


      const data = await response.json();


      if (!response.ok) {

        setError(
          data.message || "Registration failed"
        );

        return;
      }


      setMessage(
        "Registration successful. Redirecting to login..."
      );


      setFullName("");

      setEmail("");

      setPassword("");

      setConfirmPassword("");


      setTimeout(() => {

        navigate("/login");

      }, 1500);


    } catch (error) {

      console.error(error);

      setError(
        "Unable to connect to the server. Make sure the backend is running."
      );

    }

  };


  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1>
          Create Account
        </h1>

        <p className="auth-subtitle">
          Register as a citizen
        </p>


        <form onSubmit={handleRegister}>

          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(event) =>
              setFullName(event.target.value)
            }
            required
          />


          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />


          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />


          <label>
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            required
          />


          <button type="submit">
            Create Account
          </button>

        </form>


        {message && (

          <p className="success-message">
            {message}
          </p>

        )}


        {error && (

          <p className="error-message">
            {error}
          </p>

        )}


        <p className="auth-link">

          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </p>


        <Link to="/">
          ← Back to Home
        </Link>

      </div>

    </div>

  );
}


// ==================================================
// CITIZEN DASHBOARD
// ==================================================

function CitizenDashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  return (

    <div className="dashboard-page">

      <h1>
        Citizen Dashboard
      </h1>

      <p>
        Welcome, {user?.full_name || "Citizen"}!
      </p>


      <div className="dashboard-grid">


        {/* Disaster Alerts */}

        <Link
          to="/citizen/alerts"
          className="dashboard-card dashboard-card-link"
        >

          <h2>
            Disaster Alerts
          </h2>

          <p>
            View active disaster alerts.
          </p>

        </Link>


        {/* Safety Instructions */}

        <div className="dashboard-card">

          <h2>
            Safety Instructions
          </h2>

          <p>
            View important safety information.
          </p>

        </div>


        {/* Shelters */}

        <Link
          to="/citizen/shelters"
          className="dashboard-card dashboard-card-link"
        >

          <h2>
            Shelters
          </h2>

          <p>
            Find available shelter locations.
          </p>

        </Link>


        {/* Emergency Contacts */}

        <div className="dashboard-card">

          <h2>
            Emergency Contacts
          </h2>

          <p>
            Access emergency contact information.
          </p>

        </div>


        {/* Incident Reporting */}

        <Link
          to="/citizen/incidents"
          className="dashboard-card dashboard-card-link"
        >

          <h2>
            Incident Reporting
          </h2>

          <p>
            Submit and track incident reports.
          </p>

        </Link>


        {/* Interactive Map */}

        <div className="dashboard-card">

          <h2>
            Interactive Map
          </h2>

          <p>
            View disasters, affected areas and shelters.
          </p>

        </div>

      </div>


      <Link to="/">
        ← Back to Home
      </Link>

    </div>

  );
}


// ==================================================
// DISASTER ALERTS
// ==================================================

function DisasterAlerts() {

  const [disasters, setDisasters] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  useEffect(() => {

    const fetchDisasters = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/disasters"
        );


        if (!response.ok) {

          throw new Error(
            "Unable to retrieve disaster information"
          );

        }


        const data = await response.json();

        setDisasters(data);


      } catch (error) {

        console.error(error);

        setError(
          "Unable to load disaster alerts. Please try again."
        );


      } finally {

        setLoading(false);

      }

    };


    fetchDisasters();

  }, []);


  return (

    <div className="dashboard-page">

      <h1>
        Disaster Alerts
      </h1>

      <p>
        View active disaster alerts and important
        safety information.
      </p>


      {loading && (

        <p>
          Loading disaster alerts...
        </p>

      )}


      {error && (

        <p className="error-message">
          {error}
        </p>

      )}


      {!loading &&
        !error &&
        disasters.length === 0 && (

          <div className="dashboard-card">

            <h2>
              No Active Disasters
            </h2>

            <p>
              There are currently no active disaster alerts.
            </p>

          </div>

        )}


      <div className="disaster-alert-list">

        {disasters.map((disaster) => (

          <div
            className="disaster-alert-card"
            key={disaster.disaster_id}
          >

            <div className="disaster-alert-header">

              <div>

                <h2>
                  {disaster.title}
                </h2>

                <span className="disaster-type">
                  {disaster.disaster_type}
                </span>

              </div>


              <span
                className={`severity-badge severity-${disaster.severity.toLowerCase()}`}
              >
                {disaster.severity}
              </span>

            </div>


            <p className="disaster-description">
              {disaster.description}
            </p>


            <div className="disaster-details">

              <div>

                <strong>
                  Location
                </strong>

                <span>
                  {disaster.location}
                </span>

              </div>


              <div>

                <strong>
                  Status
                </strong>

                <span>
                  {disaster.status}
                </span>

              </div>

            </div>


            <div className="safety-instructions">

              <h3>
                Safety Instructions
              </h3>

              <p>
                {disaster.safety_instructions}
              </p>

            </div>

          </div>

        ))}

      </div>


      <Link to="/citizen">
        ← Back to Citizen Dashboard
      </Link>

    </div>

  );
}


// ==================================================
// SHELTERS
// ==================================================

function Shelters() {

  const [shelters, setShelters] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  useEffect(() => {

    const fetchShelters = async () => {

      try {

        const response = await fetch(
          "http://localhost:5000/api/shelters"
        );


        if (!response.ok) {

          throw new Error(
            "Unable to retrieve shelter information"
          );

        }


        const data = await response.json();

        setShelters(data);


      } catch (error) {

        console.error(error);

        setError(
          "Unable to load shelter information. Please try again."
        );


      } finally {

        setLoading(false);

      }

    };


    fetchShelters();

  }, []);


  return (

    <div className="dashboard-page">

      <h1>
        Available Shelters
      </h1>

      <p>
        Find available shelter locations and
        view capacity and contact information.
      </p>


      {loading && (

        <p>
          Loading shelters...
        </p>

      )}


      {error && (

        <p className="error-message">
          {error}
        </p>

      )}


      {!loading &&
        !error &&
        shelters.length === 0 && (

          <div className="dashboard-card">

            <h2>
              No Available Shelters
            </h2>

            <p>
              There are currently no available shelters.
            </p>

          </div>

        )}


      <div className="shelter-list">

        {shelters.map((shelter) => (

          <div
            className="shelter-card"
            key={shelter.shelter_id}
          >

            <div className="shelter-card-header">

              <div>

                <h2>
                  {shelter.name}
                </h2>

                <span className="shelter-status">
                  {shelter.status}
                </span>

              </div>

            </div>


            <div className="shelter-address">

              <strong>
                Address
              </strong>

              <span>
                {shelter.address}
              </span>

            </div>


            <div className="shelter-details">

              <div>

                <strong>
                  Capacity
                </strong>

                <span>
                  {shelter.capacity}
                </span>

              </div>


              <div>

                <strong>
                  Available Spaces
                </strong>

                <span>
                  {shelter.available_spaces}
                </span>

              </div>


              <div>

                <strong>
                  Contact
                </strong>

                <span>
                  {shelter.contact_number}
                </span>

              </div>

            </div>


            <div className="shelter-location">

              <strong>
                Location
              </strong>

              <span>
                Latitude: {shelter.latitude}
              </span>

              <span>
                Longitude: {shelter.longitude}
              </span>

            </div>

          </div>

        ))}

      </div>


      <Link to="/citizen">
        ← Back to Citizen Dashboard
      </Link>

    </div>

  );
}


// ==================================================
// INCIDENT REPORTING
// ==================================================

function IncidentReporting() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [disasters, setDisasters] = useState([]);
  const [reports, setReports] = useState([]);
  const [disasterId, setDisasterId] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {

    const loadData = async () => {

      if (!user?.user_id) {
        setError(
          "User information is unavailable. Please login again."
        );
        setLoading(false);
        return;
      }

      try {

        const disasterResponse = await fetch(
          "http://localhost:5000/api/disasters"
        );

        if (!disasterResponse.ok) {
          throw new Error(
            "Unable to load disaster information"
          );
        }

        const disasterData = await disasterResponse.json();
        setDisasters(disasterData);

        const reportResponse = await fetch(
          `http://localhost:5000/api/incidents/user/${user.user_id}`
        );

        if (!reportResponse.ok) {
          throw new Error(
            "Unable to load incident reports"
          );
        }

        const reportData = await reportResponse.json();
        setReports(reportData);

      } catch (error) {
        console.error(error);
        setError(
          "Unable to load incident information. Please try again."
        );
      } finally {
        setLoading(false);
      }

    };

    loadData();

  }, [user?.user_id]);

  const handleSubmit = async (event) => {

    event.preventDefault();
    setMessage("");
    setError("");

    if (!user?.user_id) {
      setError(
        "User information is unavailable. Please login again."
      );
      return;
    }

    if (!description.trim() || !location.trim()) {
      setError(
        "Description and location are required."
      );
      return;
    }

    setSubmitting(true);

    try {

      const response = await fetch(
        "http://localhost:5000/api/incidents",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_id: user.user_id,
            disaster_id: disasterId
              ? Number(disasterId)
              : null,
            description: description.trim(),
            location: location.trim(),
            latitude: latitude
              ? Number(latitude)
              : null,
            longitude: longitude
              ? Number(longitude)
              : null
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message ||
          "Unable to submit incident report."
        );
        return;
      }

      setMessage(
        "Incident report submitted successfully."
      );

      setDisasterId("");
      setDescription("");
      setLocation("");
      setLatitude("");
      setLongitude("");

      if (data.report) {
        setReports((currentReports) => [
          data.report,
          ...currentReports
        ]);
      }

    } catch (error) {
      console.error(error);
      setError(
        "Unable to connect to the server. Make sure the backend is running."
      );
    } finally {
      setSubmitting(false);
    }

  };

  return (

    <div className="dashboard-page">

      <h1>
        Incident Reporting
      </h1>

      <p>
        Submit information about a disaster-related
        incident and track the status of your reports.
      </p>

      {loading && (
        <p>
          Loading incident information...
        </p>
      )}

      {message && (
        <p className="success-message">
          {message}
        </p>
      )}

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <div className="dashboard-card incident-form-card">

        <h2>
          Submit Incident Report
        </h2>

        <form onSubmit={handleSubmit}>

          <label>
            Related Disaster
          </label>

          <select
            value={disasterId}
            onChange={(event) =>
              setDisasterId(event.target.value)
            }
          >
            <option value="">
              Select a disaster (optional)
            </option>

            {disasters.map((disaster) => (
              <option
                key={disaster.disaster_id}
                value={disaster.disaster_id}
              >
                {disaster.title} - {disaster.location}
              </option>
            ))}
          </select>

          <label>
            Incident Description
          </label>

          <textarea
            placeholder="Describe the incident or situation..."
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            rows="5"
            required
          />

          <label>
            Location
          </label>

          <input
            type="text"
            placeholder="Enter the incident location"
            value={location}
            onChange={(event) =>
              setLocation(event.target.value)
            }
            required
          />

          <label>
            Latitude
          </label>

          <input
            type="number"
            step="any"
            placeholder="Optional latitude"
            value={latitude}
            onChange={(event) =>
              setLatitude(event.target.value)
            }
          />

          <label>
            Longitude
          </label>

          <input
            type="number"
            step="any"
            placeholder="Optional longitude"
            value={longitude}
            onChange={(event) =>
              setLongitude(event.target.value)
            }
          />

          <button
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? "Submitting..."
              : "Submit Incident Report"}
          </button>

        </form>

      </div>

      <div className="incident-reports-section">

        <h2>
          My Incident Reports
        </h2>

        {!loading &&
          reports.length === 0 && (
            <div className="dashboard-card">
              <h3>
                No Reports Yet
              </h3>
              <p>
                You have not submitted any incident reports.
              </p>
            </div>
          )}

        <div className="incident-report-list">

          {reports.map((report) => (

            <div
              className="dashboard-card incident-report-card"
              key={report.report_id}
            >

              <div className="incident-report-header">

                <div>
                  <h3>
                    Report #{report.report_id}
                  </h3>

                  {report.disaster_title && (
                    <p>
                      <strong>
                        Disaster:
                      </strong>{" "}
                      {report.disaster_title}
                    </p>
                  )}
                </div>

                <span className="incident-status">
                  {report.status}
                </span>

              </div>

              <p>
                <strong>
                  Description:
                </strong>{" "}
                {report.description}
              </p>

              <p>
                <strong>
                  Location:
                </strong>{" "}
                {report.location}
              </p>

              {(report.latitude !== null ||
                report.longitude !== null) && (
                <p>
                  <strong>
                    Coordinates:
                  </strong>{" "}
                  {report.latitude ?? "N/A"}, {" "}
                  {report.longitude ?? "N/A"}
                </p>
              )}

              <p className="incident-date">
                <strong>
                  Submitted:
                </strong>{" "}
                {new Date(
                  report.created_at
                ).toLocaleString()}
              </p>

            </div>

          ))}

        </div>

      </div>

      <Link to="/citizen">
        ← Back to Citizen Dashboard
      </Link>

    </div>

  );
}


// ==================================================
// ADMIN DASHBOARD
// ==================================================

function AdminDashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  return (

    <div className="dashboard-page">

      <h1>
        Administrator Dashboard
      </h1>

      <p>
        Welcome, {user?.full_name || "Administrator"}!
      </p>


      <div className="dashboard-grid">


        <div className="dashboard-card">

          <h2>
            Manage Disaster Alerts
          </h2>

          <p>
            Create and update disaster alerts.
          </p>

        </div>


        <div className="dashboard-card">

          <h2>
            Manage Incident Reports
          </h2>

          <p>
            Review citizen incident reports.
          </p>

        </div>


        <div className="dashboard-card">

          <h2>
            Manage Shelters
          </h2>

          <p>
            Manage shelter information.
          </p>

        </div>


        <div className="dashboard-card">

          <h2>
            Emergency Contacts
          </h2>

          <p>
            Manage emergency contact information.
          </p>

        </div>


        <div className="dashboard-card">

          <h2>
            Affected Areas
          </h2>

          <p>
            Manage disaster affected areas.
          </p>

        </div>


        <div className="dashboard-card">

          <h2>
            User Management
          </h2>

          <p>
            Manage system users.
          </p>

        </div>

      </div>


      <Link to="/">
        ← Back to Home
      </Link>

    </div>

  );
}


// ==================================================
// MAIN APPLICATION
// ==================================================

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/register"
          element={<Register />}
        />


        <Route
          path="/citizen"
          element={<CitizenDashboard />}
        />


        <Route
          path="/citizen/alerts"
          element={<DisasterAlerts />}
        />


        <Route
          path="/citizen/shelters"
          element={<Shelters />}
        />


        <Route
          path="/citizen/incidents"
          element={<IncidentReporting />}
        />


        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>

    </BrowserRouter>

  );
}


export default App;
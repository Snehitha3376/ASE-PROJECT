-- Local Disaster Management Hub
-- PostgreSQL Database Schema

-- USERS
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'citizen',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT users_role_check
    CHECK (role IN ('citizen', 'admin'))
);


-- DISASTERS
CREATE TABLE disasters (
    disaster_id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    disaster_type VARCHAR(50) NOT NULL,
    description TEXT,
    severity VARCHAR(20) NOT NULL,
    location VARCHAR(200),
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    safety_instructions TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT disasters_severity_check
    CHECK (severity IN ('Low', 'Medium', 'High', 'Critical')),

    CONSTRAINT disasters_status_check
    CHECK (status IN ('Active', 'Resolved'))
);


-- SHELTERS
CREATE TABLE shelters (
    shelter_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    address VARCHAR(250) NOT NULL,
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    capacity INTEGER,
    available_spaces INTEGER,
    contact_number VARCHAR(20),
    status VARCHAR(20) DEFAULT 'Available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT shelters_status_check
    CHECK (status IN ('Available', 'Full', 'Closed'))
);


-- EMERGENCY CONTACTS
CREATE TABLE emergency_contacts (
    contact_id SERIAL PRIMARY KEY,
    service_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(30) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- AFFECTED AREAS
CREATE TABLE affected_areas (
    area_id SERIAL PRIMARY KEY,
    disaster_id INTEGER NOT NULL,
    area_name VARCHAR(150) NOT NULL,
    description TEXT,
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_affected_area_disaster
    FOREIGN KEY (disaster_id)
    REFERENCES disasters(disaster_id)
    ON DELETE CASCADE
);


-- INCIDENT REPORTS
CREATE TABLE incident_reports (
    report_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    disaster_id INTEGER,
    description TEXT NOT NULL,
    location VARCHAR(250),
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    status VARCHAR(30) NOT NULL DEFAULT 'Submitted',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_incident_user
    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE,

    CONSTRAINT fk_incident_disaster
    FOREIGN KEY (disaster_id)
    REFERENCES disasters(disaster_id)
    ON DELETE SET NULL,

    CONSTRAINT incident_status_check
    CHECK (status IN ('Submitted', 'Under Review', 'Resolved', 'Rejected'))
);


-- RESOURCES
CREATE TABLE resources (
    resource_id SERIAL PRIMARY KEY,
    resource_name VARCHAR(150) NOT NULL,
    resource_type VARCHAR(100),
    quantity INTEGER DEFAULT 0,
    location VARCHAR(200),
    shelter_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_resource_shelter
    FOREIGN KEY (shelter_id)
    REFERENCES shelters(shelter_id)
    ON DELETE SET NULL
);
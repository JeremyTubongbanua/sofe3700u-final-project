USE supercooljobs;

CREATE TABLE IF NOT EXISTS `job_posting_status` (
    id INTEGER NOT NULL,
    listing_status TEXT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `job_type` (
    id INTEGER NOT NULL,
    job_type TEXT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `recruit_status` (
    id INTEGER NOT NULL,
    recruit_status TEXT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `company` (
    id INTEGER NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    company_location VARCHAR(255) NOT NULL,
    company_description TEXT NOT NULL,
    logo TEXT,
    PRIMARY KEY (id),
);

CREATE TABLE IF NOT EXISTS `job_posting` (
    id INTEGER NOT NULL,
    profession VARCHAR(255) NOT NULL,
    company_id INTEGER NOT NULL,
    job_type_id INTEGER NOT NULL,
    job_posting_title VARCHAR(255) NOT NULL,
    job_posting_description TEXT NOT NULL,
    job_posting_location VARCHAR(255) NOT NULL,
    salary INTEGER,
    picture TEXT,
    job_posting_status_id INTEGER NOT NULL,
    FOREIGN KEY (company_id) REFERENCES company (id)
    FOREIGN KEY (job_type_id) REFERENCES job_type (id)
    FOREIGN KEY (job_posting_status_id) REFERENCES job_posting_status (id)
    PRIMARY KEY (id, profession)
);

CREATE TABLE IF NOT EXISTS `recruit` (
    id INTEGER NOT NULL,
    u_name VARCHAR(255) NOT NULL,
    pass_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    bio TEXT,
    recruit_location VARCHAR(255),
    recruit_resume TEXT,
    picture TEXT,
    recruit_status INTEGER NOT NULL,
    PRIMARY KEY (id, profession),
    FOREIGN KEY (recruit_status) REFERENCES recruit_status (id)
);

CREATE TABLE IF NOT `recruiter` (
    id INTEGER NOT NULL,
    u_name VARCHAR(255),
);
USE supercooljobs;
CREATE TABLE IF NOT EXISTS `job_posting_status` (
    id INTEGER NOT NULL,
    job_posting_status TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `job_posting_type` (
    id INTEGER NOT NULL,
    job_posting_type TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `job_posting_frequency` (
    id INTEGER NOT NULL,
    job_posting_frequency TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `recruit_status` (
    id INTEGER NOT NULL,
    recruit_status TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `job_application_status` (
    id INTEGER NOT NULL,
    job_application_status TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `company` (
    id INTEGER NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    company_description TEXT NOT NULL,
    company_location VARCHAR(255),
    logo TEXT,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `job_posting` (
    id INTEGER NOT NULL,
    company_id INTEGER NOT NULL,
    job_posting_title VARCHAR(255) NOT NULL,
    job_posting_description TEXT NOT NULL,
    salary INTEGER,
    picture TEXT,
    job_posting_status_id INTEGER NOT NULL,
    job_posting_type_id INTEGER NOT NULL,
    job_posting_frequency_id INTEGER NOT NULL,
    FOREIGN KEY (company_id) REFERENCES company (id),
    FOREIGN KEY (job_posting_type_id) REFERENCES job_posting_type (id),
    FOREIGN KEY (job_posting_status_id) REFERENCES job_posting_status (id),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `recruit` (
    id INTEGER NOT NULL,
    u_name VARCHAR(255) NOT NULL,
    pass_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    recruit_location VARCHAR(255),
    bio TEXT,
    picture TEXT,
    recruit_resume TEXT,
    recruit_status_id INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (recruit_status_id) REFERENCES recruit_status (id)
);
CREATE TABLE IF NOT EXISTS `recruiter` (
    id INTEGER NOT NULL,
    company_id INTEGER,
    u_name VARCHAR(255) NOT NULL,
    pass_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    recruiter_location VARCHAR(255),
    bio TEXT,
    picture TEXT,
    FOREIGN KEY (company_id) REFERENCES company (id),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `job_application` (
    recruit_id INTEGER NOT NULL,
    job_posting_id INTEGER NOT NULL,
    application_status_id INTEGER NOT NULL,
    FOREIGN KEY (recruit_id) REFERENCES recruit (id),
    FOREIGN KEY (job_posting_id) REFERENCES job_posting (id),
    PRIMARY KEY (recruit_id, job_posting_id)
);
CREATE TABLE `recruit_professions` (
    recruit_id INTEGER NOT NULL,
    profession VARCHAR(255) NOT NULL,
    PRIMARY KEY (recruit_id, profession)
);
CREATE TABLE `job_posting_professions` (
    job_posting_id INTEGER NOT NULL,
    profession VARCHAR(255) NOT NULL,
    PRIMARY KEY (job_posting_id, profession)
);
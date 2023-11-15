-- View 6
-- See what company each recruiter in the system works for
DROP VIEW IF EXISTS view6;
CREATE VIEW view6 AS (
    SELECT recruiter.full_name 'Recruiter',
        company.company_name 'Company'
    FROM recruiter
        JOIN company ON recruiter.company_id = company.id
);
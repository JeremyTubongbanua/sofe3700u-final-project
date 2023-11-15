-- view 11

-- view all the job_postings that each company has posted
DROP VIEW IF EXISTS view11;

CREATE VIEW view11 AS (
    SELECT company.id AS 'company_id', job_posting.id AS 'job_posting_id'
    FROM company JOIN job_posting ON company.id = job_posting.company_id
);
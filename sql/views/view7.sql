-- view 7
-- Company, job offering, type, and salary, ordered by company name in ascending order

DROP VIEW IF EXISTS view7;

CREATE VIEW view7 AS (
    SELECT C.company_name 'Company',
        J.job_posting_title 'Job Title',
        O.job_posting_type 'Job Type',
        J.salary 'Salary'
    FROM job_posting J
        JOIN company C ON J.company_id = C.id
        JOIN job_posting_type O ON J.job_posting_type_id = O.id
);
-- view 3 
-- View all the job_posting_ids of the people who applied to job postings which had a greater salary than 65000
-- must use a correlated nested query

DROP VIEW IF EXISTS view3;  

CREATE VIEW view3 AS (
    SELECT recruits.id AS rid, recruits.u_name, recruits.full_name, job_posting.id AS jpid, job_posting.salary FROM (SELECT recruit.id, recruit.u_name, recruit.full_name 
    FROM recruit JOIN (SELECT *
    FROM job_application
    WHERE job_posting_id IN (
        SELECT id
        FROM job_posting
        WHERE salary > 30000
    )) AS job_apps ON recruit.id = job_apps.recruit_id) AS recruits, job_posting
    WHERE recruits.id = job_posting.id
    ORDER BY recruits.id
);
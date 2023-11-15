DROP VIEW IF EXISTS view1;

-- View all recruits and the job titles they’ve applied to

CREATE VIEW view1 AS (
    SELECT recruit.id, recruit.u_name, recruit.full_name, job_application.job_posting_id, job_posting.job_posting_title
    FROM recruit JOIN job_application ON recruit.id = job_application.recruit_id JOIN job_posting ON job_application.job_posting_id = job_posting.id
);
-- view 4
-- Show all information between a recruit and all the job applications they’ve applied to
-- uses UNION

DROP VIEW IF EXISTS view4;

CREATE VIEW view4 AS (
    SELECT * FROM recruit
    LEFT JOIN job_application ON recruit.id = job_application.recruit_id

    UNION 

    SELECT * FROM job_application 
    RIGHT JOIN recruit ON job_application.recruit_id = recruit.id
);
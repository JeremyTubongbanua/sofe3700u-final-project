-- View all recruits and the average salary of all the jobs they applied to

-- uses a nested query

DROP VIEW IF EXISTS view2;

CREATE VIEW view2 AS (
    SELECT r.recruit_id, r.recruit_name, AVG(j.job_salary) AS average_salary
    FROM recruits r
    INNER JOIN applications a ON r.recruit_id = a.recruit_id
    INNER JOIN jobs j ON a.job_id = j.job_id
    GROUP BY r.recruit_id, r.recruit_name
);
    
);

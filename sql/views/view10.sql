-- view 10
-- View jobs with salary greater than average of all salaries
DROP VIEW IF EXISTS view10;
CREATE VIEW view10 AS (
    SELECT J.job_posting_title 'Job Title',
        J.salary 'Salary'
    FROM job_posting J
    WHERE J.salary > (
            SELECT AVG(salary)
            FROM job_posting
        )
    ORDER BY J.salary DESC
);
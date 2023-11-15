-- Filter by job type (job_posting_type_id)
SELECT * FROM jobs WHERE job_posting_type_id = 1;
SELECT * FROM jobs WHERE job_posting_type_id = 2;
SELECT * FROM jobs WHERE job_posting_type_id = 3;

-- Filter by job location (job_posting_frequency_id)
SELECT * FROM jobs WHERE job_posting_frequency_id = 1;
SELECT * FROM jobs WHERE job_posting_frequency_id = 2;
SELECT * FROM jobs WHERE job_posting_frequency_id = 3;

-- Filter by job status (job_posting_status_id)
SELECT * FROM jobs WHERE job_posting_status_id = 0;
SELECT * FROM jobs WHERE job_posting_status_id = 1;

-- Filter by salary range
SELECT * FROM jobs WHERE salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE salary > 200000;

-- Combine filters
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 50000 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 100001 AND 150000;
-- Add more combined filters as needed...

-- All combinations for job_posting_type_id = 1
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 1 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary > 200000;





-- All combinations for job_posting_type_id = 2
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 2 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary > 200000;

-- All combinations for job_posting_type_id = 3
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 1 AND job_posting_status_id = 0 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 1 AND job_posting_status_id = 1 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 2 AND job_posting_status_id = 0 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 2 AND job_posting_status_id = 1 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 3 AND job_posting_status_id = 0 AND salary > 200000;

SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 0 AND 50000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 50001 AND 100000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 100001 AND 150000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary BETWEEN 150001 AND 200000;
SELECT * FROM jobs WHERE job_posting_type_id = 3 AND job_posting_frequency_id = 3 AND job_posting_status_id = 1 AND salary > 200000;





-- Repeat all of the above queries for job_posting_type_id = 2 and 3

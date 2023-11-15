SELECT DISTINCT job_posting.*
FROM job_posting
    JOIN view11 ON job_posting.company_id = view11.company_id
WHERE view11.company_id = 0;
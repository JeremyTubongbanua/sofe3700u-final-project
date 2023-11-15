SELECT job_posting.id, job_posting.company_id, company.company_name, job_posting.job_posting_title, job_posting.job_posting_description, job_posting.salary, job_posting.picture, job_posting_status.job_posting_status, job_posting_type.job_posting_type, job_posting_frequency.job_posting_frequency, profession.profession FROM job_posting JOIN company ON job_posting.company_id = company.id JOIN job_posting_status ON job_posting.job_posting_status_id = job_posting_status.id JOIN job_posting_type ON job_posting.job_posting_type_id = job_posting_type.id JOIN job_posting_frequency ON job_posting.job_posting_frequency_id = job_posting_frequency.id LEFT JOIN job_posting_professions ON job_posting.id = job_posting_professions.job_posting_id LEFT JOIN profession ON job_posting_professions.profession_id = profession.id

WHERE

job_posting.salary BETWEEN 0 AND 50000 

AND profession.profession IN ('Software Engineering')

AND job_posting_type.job_posting_type IN ('Hybrid', 'Remote', 'In-Person')

AND job_posting_frequency.job_posting_frequency IN ('Full-Time', 'Part-Time', 'Contract')

AND job_posting_status.job_posting_status IN ('Open')

AND company.company_name LIKE "%Ats%"

-- AND company_nmae

;
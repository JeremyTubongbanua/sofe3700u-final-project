-- view 9
-- Recruits that are looking for work and have uploaded a resume
CREATE VIEW view9 AS (
    SELECT recruit.full_name,
        recruit_status.recruit_status
    FROM recruit
        JOIN recruit_status ON recruit.recruit_status_id = recruit_status.id
    WHERE recruit_status.recruit_status LIKE 'Looking for Jobs'
        AND recruit.recruit_resume IS NOT NULL
);
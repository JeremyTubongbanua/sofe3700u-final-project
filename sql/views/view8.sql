
-- view 8
-- Recruits that are currently hired


DROP VIEW IF EXISTS view8;

CREATE VIEW view8 AS(
    SELECT recruit.id, recruit.u_name, recruit.full_name, recruit_status.recruit_status FROM recruit JOIN recruit_status ON recruit.recruit_status_id = recruit_status.id AND recruit_status.recruit_status LIKE 'Not Looking for Jobs'
    ORDER BY recruit.id ASC
);
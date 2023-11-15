-- View 5
-- Shows all usernames of all accounts in the system
-- Uses nested queries with any of the set operations UNION, EXCEPT, INTERSECT

DROP VIEW IF EXISTS view5;

CREATE VIEW view5 AS (
    (
        SELECT r.u_name
        FROM recruit r
    )
    UNION ALL
    (
        SELECT re.u_name
        FROM recruiter re
    )
);

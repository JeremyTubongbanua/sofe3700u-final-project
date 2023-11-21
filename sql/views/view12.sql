-- View 12

-- show all usernames, password hashes, as well as what type of account they are (recruit or recruiter)

DROP VIEW IF EXISTS view12;

CREATE VIEW view12 AS (
    (
        SELECT r.u_name, r.pass_hash, 'recruit' AS account_type
        FROM recruit r
    )
    UNION ALL
    (
        SELECT re.u_name, re.pass_hash, 'recruiter' AS account_type
        FROM recruiter re
    )
);
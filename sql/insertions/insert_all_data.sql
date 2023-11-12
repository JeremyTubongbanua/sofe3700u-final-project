USE supercooljobs;
INSERT INTO `job_posting_status` (id, job_posting_status)
VALUES (0, 'Closed'),
    (1, 'Open');
INSERT INTO `job_posting_type` (id, job_posting_type)
VALUES (0, 'Remote'),
    (1, 'Hybrid'),
    (2, 'On-site');
INSERT INTO `job_posting_frequency` (id, job_posting_frequency)
VALUES (0, 'Contract'), (1, 'Part-Time'), (2, 'Full-Time');
INSERT INTO `recruit_status` (id, recruit_status)
VALUES (0, 'Not Looking for Jobs'),
    (1, 'Looking for Jobs');
INSERT INTO `job_application_status` (id, job_application_status)
VALUES (0, 'Rejected'),
    (1, 'Pending'),
    (2, 'Accepted');
INSERT INTO `company` (
        id,
        company_name,
        company_description,
        company_location,
        logo
    )
VALUES (
        0,
        'Ontario Tech University',
        'Ontario''s fastest growing engineering university',
        '2000 Simcoe Street North, Oshawa, Ontario, Canada',
        'https://pbs.twimg.com/profile_images/1110951821579829253/weqEaAsM_400x400.png'
    ),
    (
        1,
        'Google',
        'Google LLC is an American multinational technology company that specializes in Internet-related services and products.',
        '111 Richmond Street West Toronto, Ontario, Canada',
        'https://blog.hubspot.com/hubfs/image8-2.jpg'
    ),
    (
        2,
        'Meet Sushi and Boil',
        'We make some pretty good sushi',
        '3595 Sheppard Ave East , Toronto, Ontario',
        'https://imgur.com/vwwGPgT'
    ),
    (
        3,
        'Ontario Power Generation',
        'We power the province of Ontario',
        'Ontario, Canada',
        'https://imgur.com/3ccTKp1'
    ),
    (
        4,
        'Amazon',
        '123 Seaseme Street, Montreal, Canada',
        'Amazon web services',
        'https://m.media-amazon.com/images/G/15/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_ca-main._CB468775011_.png'
    ),
    (
        5,
        'Microsoft',
        'Microsoft made the Windows operating system',
        '4400-81 Bay St Toronto, ON M5J 0E7',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png'
    ),
    (
        6,
        'Code Ninjas',
        'We teach students virtually in all areas from elementary to high school STEM education.',
        NULL,
        'https://imgur.com/pIwUCIg'
    ),
    (
        7,
        'Atsign',
        'We are a SV start up building Networking 2.0 technology securing networkign devices by making them addressable wherever and whenever, closing ports on vulnerable networking devices and making firewalls truly firewalls, and giving data privacy back to the people of the Internet.',
        NULL,
        'https://imgur.com/undefined'
    );
INSERT INTO `job_posting` (
        id,
        company_id,
        job_posting_title,
        job_posting_description,
        salary,
        picture,
        job_posting_status_id,
        job_posting_type_id,
        job_posting_frequency_id
    )
VALUES 
    (0, 0, 'Software Engineering Associate Professor','A professor with a Software and Electrical background and a PhD in Engineering','2000 Simcoe Street North, Oshawa, Ontario',180000,'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',0, 2, 2),
    (1,0,'Data Management Lab Instructor','A Master''s student with a strong software and databases background.', 90000, 'https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, 2, 1),
    (2, 1, 'Project Manager', 'Someone to manage the google developers in their weekly scrum meetings and facilitate team activity and meetings.', 50000, 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, 0, 0),
    (3, 2, 'Sushi Chef', 'Someone with 3+ years of experience in making sushi', 80000, 'https://images.pexels.com/photos/8951199/pexels-photo-8951199.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 2, 2),
    (4, 2, 'Cashier', 'Someone to talk to customers, count money, and pass food from kitchen to front desk', 35000, 'https://images.pexels.com/photos/702251/pexels-photo-702251.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 2, 2),
    (5, 2, 'Part-Time Cashier', 'Someone to talk to customers, count money, and pass food from kitchen to front desk', 20000, 'https://images.pexels.com/photos/702251/pexels-photo-702251.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 2, 1),
    (6, 4, 'Project Manager', 'Facilitate weekly scrums and lead developers to meet quartlery deadlines', 90000, 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, 0, 2),
    (7, 4, 'Assistant Project Manager', 'Facilitate weekly scrums and lead developers to meet quartlery deadlines', 60000, 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, 0, 0),
    (8, 4, 'Clerk', 'Facilitate weekly scrums and lead developers to meet quartlery deadlines', 60000, 'https://images.pexels.com/photos/5965705/pexels-photo-5965705.jpeg?auto=compress&cs=tinysrgb&w=1600', 0, 1, 2),
    (9, 5, 'Software Developer', 'Professional developer with 5+ years experience  attuned with ASP.NET', 100000, 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, 0, 2),
    (10, 5, 'Software Developer', 'Professional developer with 5+ years experience  attuned with ASP.NET', 100000, 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, 0, 2),
    (11, 5, 'Software Developer', 'Professional developer with 5+ years experience  attuned with ASP.NET', 100000, 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0, 0, 2),
    (12, 6, 'Elementary-Level Math Tutor', 'Familiar with basic math such as calculating the circumference and area of a circle.', 8000, 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 1, 1),
    (13, 6, 'Elementary-Level English Tutor', 'Looking for a concurrent university student with English level 10.', 8000, 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, 1, 1),
    (14, 6, 'Elementary-Level Science Tutor', 'Looking for a concurrent university student with basic knowledge of biology, chemistry, and physics.', 8000, 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 1, 1),
    (15, 6, 'High School Math Tutor', 'Familiar with calculus and vectors', 10000, 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 1, 1),
    (16, 6, 'High School Science Tutor', 'Familiar with calculus and vectors', 10000, 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 1, 1),
    (17, 7, 'Software Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with C and/or Dart.', 10000, 'https://images.pexels.com/photos/2698465/pexels-photo-2698465.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 0, 0),
    (18, 7, 'Software Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with C and/or Dart.', 10000, 'https://images.pexels.com/photos/2698465/pexels-photo-2698465.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 0, 0),
    (19, 7, 'Software Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with C and/or Dart.', 10000, 'https://images.pexels.com/photos/2698465/pexels-photo-2698465.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 0, 0),
    (20, 7, 'Marketing Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with making videos or still graphics.', 10000, 'https://images.pexels.com/photos/936135/pexels-photo-936135.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 0, 0),
    (21, 7, 'Marketing Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with making videos or still graphics.', 10000, 'https://images.pexels.com/photos/936135/pexels-photo-936135.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 0, 0),
    (22, 7, 'Marketing Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with making videos or still graphics.', 10000, 'https://images.pexels.com/photos/936135/pexels-photo-936135.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 0, 0);
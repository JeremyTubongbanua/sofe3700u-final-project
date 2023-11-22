USE supercooljobs;

DROP TABLE IF EXISTS `job_application_professions`;
DROP TABLE IF EXISTS `job_application`;
DROP TABLE IF EXISTS `recruiter`;
DROP TABLE IF EXISTS `recruit_professions`;
DROP TABLE IF EXISTS `recruit`;
DROP TABLE IF EXISTS `job_posting_professions`;
DROP TABLE IF EXISTS `job_posting`;
DROP TABLE IF EXISTS `company`;
DROP TABLE IF EXISTS `job_application_status`;
DROP TABLE IF EXISTS `recruit_status`;
DROP TABLE IF EXISTS `job_posting_frequency`;
DROP TABLE IF EXISTS `job_posting_type`;
DROP TABLE IF EXISTS `job_posting_status`;
DROP TABLE IF EXISTS `profession`;

USE supercooljobs;
CREATE TABLE IF NOT EXISTS `job_posting_status` (
    id INTEGER NOT NULL UNIQUE,
    job_posting_status TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `job_posting_type` (
    id INTEGER NOT NULL UNIQUE,
    job_posting_type TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `job_posting_frequency` (
    id INTEGER NOT NULL UNIQUE,
    job_posting_frequency TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `recruit_status` (
    id INTEGER NOT NULL UNIQUE,
    recruit_status TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `job_application_status` (
    id INTEGER NOT NULL UNIQUE,
    job_application_status TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `profession` (
    id INTEGER NOT NULL UNIQUE,
    profession VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `company` (
    id INTEGER NOT NULL UNIQUE,
    company_name VARCHAR(255) NOT NULL,
    company_description TEXT NOT NULL,
    company_location VARCHAR(255),
    logo TEXT,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `job_posting` (
    id INTEGER NOT NULL UNIQUE,
    company_id INTEGER NOT NULL,
    job_posting_title VARCHAR(255) NOT NULL,
    job_posting_description TEXT NOT NULL,
    salary INTEGER,
    picture TEXT,
    job_posting_status_id INTEGER NOT NULL,
    job_posting_type_id INTEGER NOT NULL,
    job_posting_frequency_id INTEGER NOT NULL,
    FOREIGN KEY (company_id) REFERENCES company (id),
    FOREIGN KEY (job_posting_type_id) REFERENCES job_posting_type (id),
    FOREIGN KEY (job_posting_status_id) REFERENCES job_posting_status (id),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `recruit` (
    id INTEGER NOT NULL UNIQUE,
    u_name VARCHAR(255) NOT NULL UNIQUE,
    pass_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    recruit_location VARCHAR(255),
    bio TEXT,
    picture TEXT,
    recruit_resume TEXT,
    recruit_status_id INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (recruit_status_id) REFERENCES recruit_status (id)
);
CREATE TABLE IF NOT EXISTS `recruiter` (
    id INTEGER NOT NULL UNIQUE,
    company_id INTEGER,
    u_name VARCHAR(255) NOT NULL UNIQUE,
    pass_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    recruiter_location VARCHAR(255),
    bio TEXT,
    picture TEXT,
    FOREIGN KEY (company_id) REFERENCES company (id),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS `job_application` (
    recruit_id INTEGER NOT NULL,
    job_posting_id INTEGER NOT NULL,
    job_application_status_id INTEGER NOT NULL,
    FOREIGN KEY (recruit_id) REFERENCES recruit (id),
    FOREIGN KEY (job_posting_id) REFERENCES job_posting (id),
    FOREIGN KEY (job_application_status_id) REFERENCES job_application_status (id),
    PRIMARY KEY (recruit_id, job_posting_id)
);
CREATE TABLE `recruit_professions` (
    recruit_id INTEGER NOT NULL,
    profession_id INTEGER NOT NULL,
    FOREIGN KEY (recruit_id) REFERENCES recruit (id),
    FOREIGN KEY (profession_id) REFERENCES profession (id),
    PRIMARY KEY (recruit_id, profession_id)
);
CREATE TABLE `job_posting_professions` (
    job_posting_id INTEGER NOT NULL,
    profession_id INTEGER NOT NULL,
    FOREIGN KEY (job_posting_id) REFERENCES job_posting (id),
    FOREIGN KEY (profession_id) REFERENCES profession (id),
    PRIMARY KEY (job_posting_id, profession_id)
);

USE supercooljobs;
INSERT INTO `job_posting_status` (id, job_posting_status)
VALUES (0, 'Closed'),
    (1, 'Open');
INSERT INTO `job_posting_type` (id, job_posting_type)
VALUES (0, 'Remote'),
    (1, 'Hybrid'),
    (2, 'In-Person');
INSERT INTO `job_posting_frequency` (id, job_posting_frequency)
VALUES (0, 'Contract'), (1, 'Part-Time'), (2, 'Full-Time');
INSERT INTO `recruit_status` (id, recruit_status)
VALUES (0, 'Not Looking for Jobs'),
    (1, 'Looking for Jobs');
INSERT INTO `job_application_status` (id, job_application_status)
VALUES (0, 'Rejected'),
    (1, 'Pending'),
    (2, 'Accepted');
INSERT INTO `profession` (id, profession)
VALUES 
    (0, 'Software Engineering'),
    (1, 'Data Engineering'),
    (2, 'Mechanical Engineering'),
    (3, 'Accounting'),
    (4, 'Finance'),
    (5, 'Marketing'),
    (6, 'Sales'),
    (7, 'Human Resources'),
    (8, 'Customer Service'),
    (9, 'Data Science'),
    (10, 'Data Analytics'),
    (12, 'Machine Learning'),
    (13, 'Data Mining'),
    (14, 'Electrical Engineering'),
    (15, 'Education'),
    (16, 'Cooking'),
    (17, 'Big Data'),
    (18, 'High School Math');
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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPMc4PJz4LMaNNb63G0-QW5OvNwljP81qTsdIL5e8&s'
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
    (0, 0, 'Software Engineering Associate Professor','A professor with a Software and Electrical background and a PhD in Engineering', 180000,'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',0, 2, 2),
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
    (17, 7, 'Software Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with C and/or Dart.', 10000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPMc4PJz4LMaNNb63G0-QW5OvNwljP81qTsdIL5e8&s', 1, 0, 0),
    (18, 7, 'Software Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with C and/or Dart.', 10000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPMc4PJz4LMaNNb63G0-QW5OvNwljP81qTsdIL5e8&s', 1, 0, 0),
    (19, 7, 'Software Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with C and/or Dart.', 10000, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPMc4PJz4LMaNNb63G0-QW5OvNwljP81qTsdIL5e8&s', 1, 0, 0),
    (20, 7, 'Marketing Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with making videos or still graphics.', 10000, 'https://images.pexels.com/photos/936135/pexels-photo-936135.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 0, 0),
    (21, 7, 'Marketing Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with making videos or still graphics.', 10000, 'https://images.pexels.com/photos/936135/pexels-photo-936135.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 0, 0),
    (22, 7, 'Marketing Intern', 'A current college/university student who wants to help give the Internet its privacy back, familiar with making videos or still graphics.', 10000, 'https://images.pexels.com/photos/936135/pexels-photo-936135.jpeg?auto=compress&cs=tinysrgb&w=1600', 1, 0, 0),
    (23, 1, 'Frontend Developer','An experienced developer with a strong background in JavaScript, HTML, and CSS.', 80000, 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, 2, 1),
    (24, 2, 'Backend Developer','A developer with a strong background in server-side languages like Python or Java.', 85000, 'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0, 2, 2),
    (25, 2, 'Full Stack Developer', 'A developer with a strong background in both frontend and backend development.', 90000, 'https://images.pexels.com/photos/7173026/pexels-photo-7173026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 1, 2, 0);

INSERT INTO `recruit` (id, u_name, pass_hash, full_name, recruit_location, bio, picture, recruit_resume, recruit_status_id)
VALUES 
    (0, 'x23mark', '123', 'Jeremy Tubongbanua', 'Scarborough, Ontario, Canada', '3rd-Year Software Engineering Student Specializaing in IoT', 'https://i.imgur.com/SbwZN0K.png', 'https://www.linkedin.com/in/jeremy-tubongbanua/', 0),
    (1, 'jerryshum', 'de877b38b46ff2a81533394464d8c7ae', 'Jerry Shum', 'Oshawa, Ontario, Canada', '3rd-Year Software Engineering Student', 'https://i.imgur.com/fxfajwb.png', 'https://www.linkedin.com/in/jerry-shum/', 1),
    (2, 'neh2332', '123', 'Nehmat Farooq', 'Oshawa, Ontario, Canada', '3rd-Year Software Engineering Student | Aspiring Software Engineer | Gym Enjoyer', 'https://i.imgur.com/aqSgVKF.png', 'https://www.linkedin.com/in/nehmat-farooq/', 1),
    (3, 'dudeman', 'de877b38b46ff2a81533394464d8c7ae', 'Noah Toma', 'Ajax, Ontario, Canada', '3rd-Year Software Engineering Student | Certified Goat', 'https://static.wikia.nocookie.net/character-stats-and-profiles/images/2/2f/Robloxian_3D_Png.png/revision/latest?cb=20230629111153', 'https://www.linkedin.com/in/nt-se/', 0),
    (4, 'moker', '123', 'Wesley Kyle De Guzman', 'Scarborough, Ontario, Canada', '3rd-Year Mechatronics Engineering Student at Ontario Tech University', 'https://i.imgur.com/BGzXDUd.png', 'https://www.linkedin.com/in/wesley-de-guzman-46529b207/', 1),
    (5, 'kh', 'de877b38b46ff2a81533394464d8c7ae', 'Khalid Hafeez', 'Ontario, Canada', 'Associate Professor at Ontario Tech University', 'https://shared.ontariotechu.ca/shared/faculty/feas/images/faculty-photos/khalid.hafeez.png', 'https://engineering.ontariotechu.ca/people/ecse/khalid.hafeez.php', 0),
    (6, 'billgates', '123', 'Bill Gates', 'San Jose, California', 'Founder of Microsoft', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/330px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg', 'https://en.wikipedia.org/wiki/Bill_Gates', 0),
    (7, 'kevinwang', 'de877b38b46ff2a81533394464d8c7ae', 'Kevin Wang', 'Rome, Italy', 'Associate Professor of Finance at Rotman', 'https://i.imgur.com/A8bcvUF.png', 'https://www.rotman.utoronto.ca/FacultyAndResearch/Faculty/FacultyBios/Wang_K', 1),
    (8, 'nadeemkhan', '123', 'Nadeem Khan', 'Milton, Ontario, Canada', 'Masters of Business & Administration', 'https://media.licdn.com/dms/image/D5603AQHtJa0cVGbFfQ/profile-displayphoto-shrink_200_200/0/1699807793764?e=1705536000&v=beta&t=hkfCkrgDRVP2nMDbO7w6NdrUG3uTCTGFHTT2939hiD4', 'https://www.linkedin.com/in/nadeem-khan-6a8a87241/', 0);

INSERT INTO `recruiter` (id, company_id, u_name, pass_hash, full_name, recruiter_location, bio, picture) VALUES 
    (0, 0, 'recruiter1', '123', 'John Doe', 'Oshawa, Ontario, Canada', 'Recruiter at Ontario Tech University', 'https://www.freeiconspng.com/thumbs/person-icon/grab-vector-graphic-person-icon--imagebasket-13.png'),
    (1, 1, 'recruiter2', '123', 'Jane Doe', 'Toronto, Ontario, Canada', 'Recruiter at Google', 'https://www.freeiconspng.com/thumbs/person-icon/grab-vector-graphic-person-icon--imagebasket-13.png'),
    (2, 2, 'recruiter3', '123', 'John Doe', 'Toronto, Ontario, Canada', 'Recruiter at Meet Sushi and Boil', 'https://www.freeiconspng.com/thumbs/person-icon/grab-vector-graphic-person-icon--imagebasket-13.png'),
    (3, 3, 'recruiter4', '123', 'Jane Doe', 'Toronto, Ontario, Canada', 'Recruiter at Ontario Power Generation', 'https://www.freeiconspng.com/thumbs/person-icon/grab-vector-graphic-person-icon--imagebasket-13.png'),
    (4, 4, 'recruiter5', '123', 'John Doe', 'Montreal, Quebec, Canada', 'Recruiter at Amazon', 'https://www.freeiconspng.com/thumbs/person-icon/grab-vector-graphic-person-icon--imagebasket-13.png'),
    (5, 5, 'recruiter6', '123', 'Jane Doe', 'Toronto, Ontario, Canada', 'Recruiter at Microsoft', 'https://www.freeiconspng.com/thumbs/person-icon/grab-vector-graphic-person-icon--imagebasket-13.png'),
    (6, 6, 'recruiter7', '123', 'John Doe', 'Toronto, Ontario, Canada', 'Recruiter at Code Ninjas', 'https://www.freeiconspng.com/thumbs/person-icon/grab-vector-graphic-person-icon--imagebasket-13.png'),
    (7, 7, 'recruiter8', '123', 'Jane Doe', 'Toronto, Ontario, Canada', 'Recruiter at Atsign', 'https://www.freeiconspng.com/thumbs/person-icon/grab-vector-graphic-person-icon--imagebasket-13.png');

INSERT INTO `job_application` (recruit_id, job_posting_id, job_application_status_id)
VALUES 
    (0, 1, 1),
    (0, 2, 1),
    (0, 3, 1),
    (0, 4, 1),
    (0, 5, 1),
    (0, 12, 1),
    (0, 14, 0),
    (1, 0, 0),
    (1, 1, 1),
    (1, 6, 2),
    (1, 7, 2),
    (1, 10, 1),
    (1, 11, 1),
    (1, 19, 1),
    (2, 0, 0),
    (2, 1, 0),
    (2, 2, 0),
    (2, 3, 2),
    (2, 4, 2),
    (2, 5, 2),
    (2, 6, 1),
    (2, 7, 2),
    (2, 8, 2),
    (2, 9, 1),
    (2, 10, 2),
    (2, 11, 1),
    (2, 12, 1),
    (2, 13, 1),
    (2, 14, 2),
    (2, 15, 1),
    (2, 16, 1),
    (2, 17, 1),
    (2, 18, 1),
    (2, 19, 1),
    (2, 20, 1),
    (2, 21, 1),
    (4, 20, 2),
    (5, 0, 1),
    (7, 17, 1),
    (7, 18, 1),
    (7, 19, 1),
    (7, 20, 1),
    (7, 21, 1),
    (7, 22, 1);

INSERT INTO `recruit_professions` (recruit_id, profession_id)
VALUES (0, 0),
(1, 0),
(2, 0),
(3, 0),
(3, 15),
(4, 5),
(4, 7),
(5, 0),
(5, 1),
(5, 14),
(6, 0),
(7, 4),
(7, 8);

INSERT INTO `job_posting_professions` (job_posting_id, profession_id)
VALUES 
    (0, 0),
    (0, 1),
    (0, 15),
    (1, 0),
    (1, 1),
    (1, 15),
    (2, 6),
    (2, 9),
    (2, 10),
    (3, 8),
    (3, 16),
    (4, 8),
    (5, 8),
    (6, 1),
    (6, 5), 
    (6, 7), 
    (7, 7),
    (8, 7),
    (8, 8),
    (8, 10), 
    (9, 0),
    (9, 1),
    (9, 9),
    (9, 17), 
    (10, 0),
    (11, 0),
    (12, 15),
    (12, 18),
    (13, 15),
    (13, 18),
    (14, 15),
    (15, 15),
    (16, 15),
    (17, 0),
    (17, 12),
    (18, 0),
    (18, 1),
    (19, 0),
    (19, 5),
    (20, 5),
    (21, 5),
    (22, 5);
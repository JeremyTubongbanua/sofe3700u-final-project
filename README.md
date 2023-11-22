# supercooljobs

sofe3700u final project.

Deployed at [http://jeremymark.ca/](http://jeremymark.ca/)

| Name | Student Number |
| ---- | -------------- |
| Jeremy Mark Tubongbanua | 100849092 |
| Noah Toma | 100825559 |
| Nehmat Farooq | 100819864 |
| Jerry Shum | 100845217 | 

Group 9
CRN:43511

## Project Description

Super Cool Jobs is a full-stack application that consists of recruits, recruiters, companies, and job applications. Recruits can apply to jobs, recruiters can post jobs, and companies can hire recruiters to post jobs on their behalf. Recruits can also view their job applications and recruiters can view their job postings. Companies can view their recruiters and job postings.

## Project Structure

```
.
├── api/
│   ├── Api.js (entrypoint for External API)
│   └── ...
├── sql/
│   ├── api_queries/recruit/
│   ├── creation/
│   ├── deletion/
│   ├── insertions/
│   ├── job_postings
│   ├── show_tables/
│   ├── views/
│   └── restart_everything.sql (Refresh data)
└── web/
    ├── public/
    ├── src/
    └── package.json
```

## Installation Instructions

The 2 major components, the website and the external API, are located in the web and api folders respectively. They canboth be started using conventional npm scripts.

Requirements to run these services include:

- [NodeJS](https://nodejs.org/en/), LTS is recommended. NPM is included with NodeJS.

### Running the External API

Linux

Simply enter the directory, install the dependencies, and run the start script.

```sh
cd api
npm i
npm run start
```

### Running the Website

Linux

Simply enter the directory, install the dependencies, and run the start script.

```sh
cd web
npm i 
npm run start
```
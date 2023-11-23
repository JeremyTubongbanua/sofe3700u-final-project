<div align="center">
<hr>

# SuperCoolJobs

<ins>***SOFE3700U final project***</ins>

<ins>*Wednesday, November 22, 2023*</ins>

**Deployed @ [http://jeremymark.ca/](http://jeremymark.ca/)**

| Name | Student Number |
| ---- | -------------- |
| Jeremy Mark Tubongbanua | 100849092 |
| Noah Toma | 100825559 |
| Nehmat Farooq | 100819864 |
| Jerry Shum | 100845217 | 

*Group No.: 9*

*CRN: 43511*

</div>
<br>

<div align="center">

## Description

SuperCoolJobs is a full-stack application that allows candidates, recruiters, and companies to network and engage in the job application process. Candidates can apply to jobs, recruiters can post jobs, and companies can hire recruiters to post jobs on their behalf. Candidates, in turn, can place job applications, and recruiters are able to place, view, and modify job postings. Finally, companies have the ability to view their recruiters and their job postings.

</div>
<br>

<div align="center">

## Structure

</div>
<br>

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

<div align="center">

## Installation

The two major components, the website and the external API, are located in the web and api folders respectively. They can both be initiated via conventional npm scripts.

| Requirements |
|:---:|
| [NodeJS](https://nodejs.org/en/) (LTS is recommended; NPM is included with NodeJS) |

</div>
<br>

<div align="center">

### Running the External API

Linux

Simply enter the directory, install the dependencies, and run the start script.

```sh
cd api
npm i
npm run start
```

### Running the Application

Linux

Simply enter the directory, install the dependencies, and run the start script.

```sh
cd web
npm i 
npm run start
```
</div>
<br>

<hr>

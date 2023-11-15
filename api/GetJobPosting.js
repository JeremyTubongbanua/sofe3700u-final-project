
const responseGetJobPostingById = (db, req, res) => {
    if (req.body === undefined || req.body['id'] === undefined || req.body['id'] === NaN) {
        res.status(400).send({ 'message': 'id is required and must be a number' });
    } else {
        const id = req.body['id'];
        query = 'SELECT job_posting.id, job_posting.company_id, company.company_name, job_posting.job_posting_title, job_posting.job_posting_description, job_posting.salary, job_posting.picture, job_posting_status.job_posting_status, job_posting_type.job_posting_type, job_posting_frequency.job_posting_frequency, profession.profession FROM job_posting JOIN company ON job_posting.company_id = company.id JOIN job_posting_status ON job_posting.job_posting_status_id = job_posting_status.id JOIN job_posting_type ON job_posting.job_posting_type_id = job_posting_type.id JOIN job_posting_frequency ON job_posting.job_posting_frequency_id = job_posting_frequency.id LEFT JOIN job_posting_professions ON job_posting.id = job_posting_professions.job_posting_id LEFT JOIN profession ON job_posting_professions.profession_id = profession.id WHERE job_posting.id = ' + id + ';';
        db.query(query, (err, result) => {
            if (err) {
                res.status(400).send({ 'message': 'error', 'result': err });
            } else {
                data = {};
                data = result[0];
                data['professions'] = [];
                for (let i = 0; i < result.length; i++) {
                    data['professions'].push(result[i]['profession']);
                }
                delete data['profession'];
                res.status(200).send({ 'message': 'success', 'result': data });
            }
        });
    }
};

const responseGetAllJobPostings = (db, req, res) => {
    query = 'SELECT job_posting.id, job_posting.company_id, company.company_name, job_posting.job_posting_title, job_posting.job_posting_description, job_posting.salary, job_posting.picture, job_posting_status.job_posting_status, job_posting_type.job_posting_type, job_posting_frequency.job_posting_frequency, profession.profession FROM job_posting JOIN company ON job_posting.company_id = company.id JOIN job_posting_status ON job_posting.job_posting_status_id = job_posting_status.id JOIN job_posting_type ON job_posting.job_posting_type_id = job_posting_type.id JOIN job_posting_frequency ON job_posting.job_posting_frequency_id = job_posting_frequency.id LEFT JOIN job_posting_professions ON job_posting.id = job_posting_professions.job_posting_id LEFT JOIN profession ON job_posting_professions.profession_id = profession.id;';
    db.query(query, (err, result) => {
        if (err) {
            res.status(400).send({ 'message': 'error', 'result': err });
        } else {
            allData = [];
            for (let i = 0; i < result.length; i++) {
                let found = false;
                for (let j = 0; j < allData.length; j++) {
                    if (allData[j]['id'] === result[i]['id']) {
                        allData[j]['professions'].push(result[i]['profession']);
                        found = true;
                    }
                }
                if (!found) {
                    data = {};
                    data = result[i];
                    data['professions'] = [];
                    data['professions'].push(result[i]['profession']);
                    delete data['profession'];
                    allData.push(data);
                }
            }
            res.status(200).send({ 'message': 'success', 'result': allData });
        }
    });
}

const responseGetFilteredJobPostings = (db, req, res) => {
    if (req.body === undefined) {
        res.status(400).send({ 'message': 'body is required' });
    } else {
        // build query
        const filters = req.body;

        let sql = `SELECT job_posting.id, job_posting.company_id, company.company_name, job_posting.job_posting_title, job_posting.job_posting_description, job_posting.salary, job_posting.picture, job_posting_status.job_posting_status, job_posting_type.job_posting_type, job_posting_frequency.job_posting_frequency, profession.profession FROM job_posting JOIN company ON job_posting.company_id = company.id JOIN job_posting_status ON job_posting.job_posting_status_id = job_posting_status.id JOIN job_posting_type ON job_posting.job_posting_type_id = job_posting_type.id JOIN job_posting_frequency ON job_posting.job_posting_frequency_id = job_posting_frequency.id LEFT JOIN job_posting_professions ON job_posting.id = job_posting_professions.job_posting_id LEFT JOIN profession ON job_posting_professions.profession_id = profession.id WHERE 1=1`;

    if (filters.salary) {
        sql += ` AND job_posting.salary BETWEEN ${filters.salary.min} AND ${filters.salary.max}`;
    }

    if (filters.professions && filters.professions.length > 0) {
        const professions = filters.professions.map(profession => `'${profession}'`).join(', ');
        sql += ` AND profession.profession IN (${professions})`;
    }

    if (filters.job_posting_types && filters.job_posting_types.length > 0) {
        const types = filters.job_posting_types.map(type => `'${type}'`).join(', ');
        sql += ` AND job_posting_type.job_posting_type IN (${types})`;
    }

    if (filters.job_posting_frequency && filters.job_posting_frequency.length > 0) {
        const frequencies = filters.job_posting_frequency.map(frequency => `'${frequency}'`).join(', ');
        sql += ` AND job_posting_frequency.job_posting_frequency IN (${frequencies})`;
    }

    if (filters.job_posting_statuses && filters.job_posting_statuses.length > 0) {
        const statuses = filters.job_posting_statuses.map(status => `'${status}'`).join(', ');
        sql += ` AND job_posting_status.job_posting_status IN (${statuses})`;
    }

    if (filters.company_names && filters.company_names.length > 0) {
        const companyNames = filters.company_names.map(name => `company.company_name LIKE '%${name}%'`).join(' OR ');
        sql += ` AND (${companyNames})`;
    }

    if (filters.job_posting_titles && filters.job_posting_titles.length > 0) {
        const titles = filters.job_posting_titles.map(title => `job_posting.job_posting_title LIKE '%${title}%'`).join(' OR ');
        sql += ` AND (${titles})`;
    }



        db.query(sql, (err, result) => {
            if (err) {
                res.status(400).send({ 'message': 'error', 'data': err });
            } else {
                allData = [];
                for (let i = 0; i < result.length; i++) {
                    let found = false;
                    for (let j = 0; j < allData.length; j++) {
                        if (allData[j]['id'] === result[i]['id']) {
                            allData[j]['professions'].push(result[i]['profession']);
                            found = true;
                        }
                    }
                    if (!found) {
                        data = {};
                        data = result[i];
                        data['professions'] = [];
                        data['professions'].push(result[i]['profession']);
                        delete data['profession'];
                        allData.push(data);
                    }
                }
                res.status(200).send({ 'message': 'success', 'data': allData });
            }
        });
    }
}

module.exports = { responseGetJobPostingById, responseGetAllJobPostings, responseGetFilteredJobPostings };
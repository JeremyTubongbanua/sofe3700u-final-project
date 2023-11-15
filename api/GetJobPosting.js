
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
}

module.exports = { responseGetJobPostingById };
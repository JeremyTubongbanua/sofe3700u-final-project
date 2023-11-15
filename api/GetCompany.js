
const responseGetCompanyById = (db, req, res) => {
    if(req.body === undefined || req.body['id'] === undefined) {
        res.status(400).send({'message': 'id is required'});
    }
    query = 'SELECT * FROM company WHERE company.id = ' + req.body['id'];
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({ 'message': 'error', 'error': err });
        } else {
            if (result.length === 0) {
                res.status(404).send({ 'message': 'company not found' });
            } else {
                data = result[0];
                query = 'SELECT job_posting.id, job_posting.company_id, job_posting.job_posting_title, job_posting.job_posting_description, job_posting.salary, job_posting.picture, job_posting_status.job_posting_status, job_posting_type.job_posting_type, job_posting_frequency.job_posting_frequency FROM job_posting JOIN job_posting_status ON job_posting.job_posting_status_id = job_posting_status.id JOIN job_posting_type ON job_posting.job_posting_type_id = job_posting_type.id JOIN job_posting_frequency ON job_posting_frequency.id = job_posting.job_posting_frequency_id WHERE job_posting.company_id = ' + data['id'];
                db.query(query, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send({ 'message': 'error', 'error': err });
                    } else {
                        data['job_postings'] = result;
                        res.status(200).send({'message': 'success', 'company': data});
                    }
                });
            }
        }
    });
};

module.exports = {
    responseGetCompanyById
};